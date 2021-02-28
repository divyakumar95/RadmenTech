const mongoose = require('mongoose')
const User = mongoose.model('users') 
const data = require ('../routes/formRoutes')

new User({userName: "", // User name Entered from Form for submitting Query
        emailId: "", // Email id Entered from Form for submitting Query
        phoneNo: "", // Phone Number Entered from Form for submitting Query
        systemType:"" // Type of system to be built 
    }).save()  //to save the data received from the Form  
