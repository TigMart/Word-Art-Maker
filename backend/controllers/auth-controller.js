const { mainService } = require("../services/main-service");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");

async function loginPost(req, res) {
  const email = req.body.email || "";
  const password = req.body.password || "";

  if (!email || !password) {
    return res.status(401).send({
      messages: ["Invalid Password Or Email"],
    });
  }

  const user = await mainService.getUserByEmail(email);

  if (!user) {
    return res.status(401).send({
      messages: ["Incorrect Email"],
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({
      messages: ["Incorrect Password"],
    });
  }

  return res.send({
    token: jsonWebToken.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    ),
  });
}

module.exports = {
  loginPost,
};
