const express = require ("express");
const app = express ();

app.listen(3030, ()=> console.log ("server levantado en el puerto 3030"))

const rutaHome = require("./routes/home")
const rutaMarcas = require("./routes/marcas")
const rutaSucursales = require("./routes/sucursales")
const rutaAutos = require ("./routes/autos")

app.use("/", rutaHome)
app.use("/marcas", rutaMarcas)
app.use("/sucursales", rutaSucursales)
app.use("/autos", rutaAutos)

