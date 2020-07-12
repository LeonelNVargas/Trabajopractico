const express = require ("express");
const router = express.Router();// ejecucion del metodo de ruta de express
const homeController = require("../controller/homeController")//requiero el controllador correspondiente

router.get("/",homeController.index)


module.exports = router; //siempre al ultimo