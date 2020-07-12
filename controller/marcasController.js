const fs = require ("fs");
const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const marcas = {
    index: (req,res) =>{
        res.send ("Bienvenido a la pagina marcas")
    },
    marca: (req,res) =>{
        res.send ("codigo de /:marca")
    }
        
}

module.exports = marcas