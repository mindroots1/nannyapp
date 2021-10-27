const express = require('express');
const app = express()

app.get('/',(req, res) => {
    res.send("welcome")
})

app.get('/user',(req, res) => {
    res.send({
        "status": true,
        "message": "Welcome"
    })
})

app.listen(8000, () => {
    console.log("connected")
})