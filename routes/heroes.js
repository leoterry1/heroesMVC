const express = require("express")
const router = express.Router()
const controladorHeroes = require("../controllers/heroesController")

router.use("/",controladorHeroes.data)
router.use("/:idHeroe",controladorHeroes.heroe)
router.use("/bio/:idHeroe/:ok?",controladorHeroes.bio)

module.exports = router