const mongoose = require('mongoose')
const { Schema }  = mongoose

const userSchema = new Schema ({
    userName: { type: String, require: true },
    emailId: { type: String, require: true },
    phoneNo: { type: Number, require: true },
    systemType: { type: String, require: true },
    user : { type: Schema.ObjectId, ref:'User'}
})

mongoose.model('users',userSchema)
