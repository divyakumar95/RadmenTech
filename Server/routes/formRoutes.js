const mongoose = require('mongoose')
//const User = mongoose.model('users') 

module.exports = (app) => {
    app.post('/formdb',(req,res) => {
        var name  = req.query.name
        var email = req.query.email 
        var systemType  = req.query.systemType
        var phone = req.query.phone     
        
        new User({userName: name,            // User name Entered from Form for submitting Query
            emailId: email,                  // Email id Entered from Form for submitting Query
            phoneNo: phone,                  // Phone Number Entered from Form for submitting Query
            systemType: systemType           // Type of system to be built 
        }).save()                            //to save the data received from the Form  
        console.log(User)
        console.log("Here divya")
    })

}