const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHead = req.get("Authorization");

  if (typeof authHead !== "undefined") {
    const bearerToken = authHead.split(" ")[1];
    return jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).send({ message: ["does not have access rights"] });
      }

      return next();
    });
  }
  return res.status(401).send({ message: ["not authorized"] });
}

module.exports = {
  authMiddleware,
};
