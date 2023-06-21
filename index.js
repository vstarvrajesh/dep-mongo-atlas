const mongoose = require("mongoose");
const express = require('express');
const app = express();
const server = require('http').createServer(app)
const Demo = require("./Demo");
const dotenv = require("dotenv")

dotenv.config()

console.log(process.env.MONOGODB_URI)
mongoose.connect(process.env.MONOGODB_URI)
    .then(() => {
        console.log("connected")
    })
    .catch(() => {
        console.log("Error")
    })
const port = 5000
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello there")
})

server.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})

app.post('/demo', async (req, res) => {
    console.log(req.body)
    const { name, email } = req.body

    const data = await Demo.create({
        name,
        email
    })
    await data.save()
    res.send(data)
})