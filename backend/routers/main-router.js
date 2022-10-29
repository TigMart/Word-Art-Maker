const express = require("express");
const multer = require("multer");
const { authMiddleware } = require("../utils");
const path = require("path");
const mainController = require("../controllers/main-controller");
const authController = require("../controllers/auth-controller");

const router = express.Router();

// TODO later

const storageFunc = (fileName) => {
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, `../public/${fileName}`));
    },
    filename: function (req, file, cb) {
      let temp = file.originalname.split(".");
      let ext = temp[temp.length - 1];

      cb(null, path.join(`${Date.now()}_${file.originalname.split(".")[0]}.${ext}`));
    },
  });
  return storage;
};

const uploadShapes = multer({ storage: storageFunc("shapes") });
const uploadFonts = multer({ storage: storageFunc("fonts") });
const uploadPalettes = multer({ storage: storageFunc("palettes") });

router.post("/login", authController.loginPost);

router.get("/fonts", mainController.getFonts);
router.post(
  "/fonts",
  uploadFonts.single("font"),
  authMiddleware,
  mainController.postFonts
);
router.get("/palettes", mainController.getPalettes);
router.get("/shapes", mainController.getShapes);
router.post(
  "/shapes",
  uploadShapes.single("shape"),
  authMiddleware,
  mainController.postShapes
);
router.post(
  "/palettes",
  uploadPalettes.single("palette"),
  authMiddleware,
  mainController.postPalettes
);

router.delete("/fonts/:id", authMiddleware, mainController.deleteFont);
router.delete("/shapes/:id", authMiddleware, mainController.deleteShape);
router.delete("/palettes/:id", authMiddleware, mainController.deletePalette);
router.patch("/fonts/:id", mainController.updateFont);
router.get("/fonts/:url", mainController.getByUrl);
router.get("/shapes/:url", mainController.getByUrl);
router.get("/palettes/:url", mainController.getByUrl);
router.post("/data", mainController.postData);

module.exports = router;
