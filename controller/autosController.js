const fs = require ("fs");
const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));


const autos = {
    
    index: (req,res) =>{
        res.send (concesionarias.autos)
    },
    marca: (req,res) =>{
        let idmarca = req.params.marca
        concesionarias.forEach(function(marca){
            if (concesionarias.marca == idmarca){
                res.send ("codigo de marca" + concesionarias.marca)
            }
        });
    },
    dato: (req,res) =>{
        res.send("codigo de marca/dato")
    }
        
}

module.exports = autos;