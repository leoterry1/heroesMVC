const express = require("express")
const app = express()
const mainRouter = require("./routes/main")
const heroesRouter = require("./routes/heroes")

//Server
app.listen(3030, () => console.log("Server running in port 3030"))


//Routeo
app.use("/heroes", heroesRouter)
app.use('/', mainRouter)

                  