const express = require('express');
require('./database/dbconnection')
const port_number = process.env.PORT || 3000
const app = express()
const User = require('./models/User');

app.get('/',(req, res) => {
    res.status(400).send("this url is not valid")
})

app.get('/user',(req, res) => {
    
    User.find((error, result) => {
        if (error) {
            res.json({"status": false, "message": error.message})
        }
        else {
            res.json({"status": true, "data": result})
        }
    })
})

app.listen(port_number, () => {
    console.log(`connected: http://localhost:${port_number}`)
})