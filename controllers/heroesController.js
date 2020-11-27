const fs = require("fs")
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf-8"))

module.exports = {
    data: function (req, res) {
        res.send(heroes)
    },
    bio: function (req, res) {
        let id = req.params.idHeroe;
        let ok = req.params.ok;
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSeleccionado = heroe[0];
        if (heroeSeleccionado == undefined) {
            return res.send("<br>No encontramos un héroe para mostrarte su biografía")
        }
        if (ok == "ok") {
            return res.send(`<br>${heroeSeleccionado.nombre}: ${heroeSeleccionado.resenia}`)
        } else {
            return res.send(`<br>${heroeSeleccionado.nombre}: Lamento que no desees saber más de mí.`)
        }
    },
    heroe: function (req, res) {
        let id = req.params.idHeroe

        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            res.send('<br>Este héroe no fue encontrado :(  pruebe con otro numero de id.');
        } else {
            res.send(`<br>Hola, mi nombre es ${heroeSeleccionado.nombre} y soy ${heroeSeleccionado.profesion}`)
        }
    }
}