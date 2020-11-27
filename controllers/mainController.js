module.exports = {
    index: (req,res) => {
        res.send(`<br>Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!`)
    },
    creditos: (req,res) => {
        res.send(`<br>Server creado por la comisión 5.`)
    },
    error: (req,res) =>{
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')
    }
}