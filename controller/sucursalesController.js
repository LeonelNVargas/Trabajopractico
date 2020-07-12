const fs = require ("fs");
const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const sucursales = {
    index: (req,res) =>{
        let sucursal = concesionarias.filter(function(sucursal){
            sucursal == concesionarias.sucursal
        })
        res.send("Bienvenidos a la pagina de sucursales" + "<br>" + "he aqui una lista " + sucursal)
    },
    sucursal: (req,res) =>{
        res.send ("codigo de /:sucursal")
    }
        
}



module.exports = sucursales