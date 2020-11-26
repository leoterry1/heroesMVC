const express = require("express")
const app = express()
const mainRouter = require("./routes/main")
const heroesRouter = require("./routes/heroes")


app.listen(3030, () => console.log("Server running in port 3030"))

app.use("/heroes", heroesRouter)
app.use('/', mainRouter)
app.get("*", (req,res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')
})
