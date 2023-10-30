const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    product: String,
    quantity: String,
    shipping: String,
    shippingschedule: String,
    vendor: String
})

const userSalesData = mongoose.model('UsersSalesData', userSchema)
module.exports = userSalesData