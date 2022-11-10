const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")

app.listen(3001)

app.get("/", (req, res) => {
    console.log('asdasdasd')
    res.send({some:"asd"})
})

app.use(cors({origin: "http://localhost:3000", credentials: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE"}))

app.use(express.json())

const router = require("./router/mainRouter")
app.use("/", router)