const express = require ("express");
const router = express.Router();

const autosControllers = require("../controller/autosController")

router.get ("/",autosControllers.index)
router.get("/:marca",autosControllers.marca)
router.get("/:marca/:dato",autosControllers.dato)


module.exports = router;