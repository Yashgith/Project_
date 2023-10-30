const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const usersModel = require('./Models/Users')
const userSalesData = require('./Models/UserSalesData')

mongoose.connect('mongodb://127.0.0.1:27017/User')

app.post('/login', (req,res) => {
    const { email, password } = req.body
    usersModel.findOne({email: email})
    .then((user)=> {
        if(user) {
            if(user.password == password) {
                if (user.client === 'vendor') {
                    res.json("Vendor Login Successful");
                } else {
                    res.json("You are not authorized to access the vendor page.");
                }
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("User Not Exists")
        }
    })
})

app.post('/register',(req,res)=> {
    usersModel.create(req.body)
    .then((user)=> res.json(user))
    .catch((error)=> res.json(error))
})

app.post('/userData', (req,res) => {
    userSalesData.create(req.body)
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))
})

app.get('/userData', (req, res) => {
    userSalesData.find({})
        .then((userData) => {
            const vendor1Data = userData.filter(user => user.vendor === 'vendor1');
            const vendor2Data = userData.filter(user => user.vendor === 'vendor2');

            res.json({ vendor1: vendor1Data, vendor2: vendor2Data });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

app.listen(5000, () => {
    console.log('Server Running')
})