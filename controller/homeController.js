const fs = require ("fs");
const { send } = require("process");
const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));


const home = {

    index: (req,res) =>{
        concesionarias.forEach(element => {
            
            res.send ("Bienvenidos al homepage " + "<br>" + "he aqui una lista de nuestras sucursales: " + concesionarias.element)
        });
        }
}

module.exports = home;