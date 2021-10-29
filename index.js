const express = require('express');
require('./database/dbconnection')
const port_number = process.env.PORT || 3000
const app = express()
const User = require('./models/User');

app.use(express.json())

app.get('/', (req, res) => {
    res.status(400).send("this url is not valid!!")
})

app.get('/user', (req, res) => {

    User.find((error, result) => {
        if (error) {
            res.json({ "status": false, "message": error.message })
        }
        else {
            res.json({ "status": true, "data": result })
        }
    })
})

app.post('/signup', async (req, res) => {

    let user = User({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        password: req.body.password
    });

    try {
        const result = await user.save();

        res.json({ "status": true, "message": "signup successfully" })
    } catch (error) {
        res.json({ "status": false, "message": error.message })
    }

    // user.save((error, result) => {
    //     if (error) {
    //         res.json({ "status": false, "message": error.message })
    //     }
    //     else {
    //         res.json({ "status": true, "message": "signup successfully" })
    //     }
    // })
})

app.post('/login', async (req, res) => {

    try {
        const result = await User.findOneAndUpdate({ email: req.body.email, password: req.body.password }, {lastLoginTime: Date.now()}, { __v: 0, password: 0 }).exec();
        res.json({ "status": true, "message": result })
    } catch (error) {
        res.json({ "status": false, "message": error.message })
    }
})

app.listen(port_number, () => {
    console.log(`connected: http://localhost:${port_number}`)
})