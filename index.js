const express = require('express');
require('./database/dbconnection')
const port_number = process.env.PORT || 3000
const app = express()
const User = require('./models/User');

app.get('/',(req, res) => {
    res.status(400).send("this url is not valid!!")
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

app.post('/user',(req, res) => {
    
    let user = User({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        password: req.body.password
    })
    user.save((error, result) => {
        if (error) {
            res.json({"status": false, "message": error.message})
        }
        else {
            res.json({"status": true, "message": "signup successfully"})
        }
    })
})

app.listen(port_number, () => {
    console.log(`connected: http://localhost:${port_number}`)
})