const express = require('express');
const port_number = process.env.PORT || 3000

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

app.listen(port_number, () => {
    console.log(`connected: http://localhost:${port_number}`)
})