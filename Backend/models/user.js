const mongoose = require('mongoose')
const { Scheme }  = mongoose

const userSchema = new Scheme({
    userName: String,
    emailId: String,
    phoneNo: Number,
    systemType: String
})

mongoose.model('users',userSchema)
