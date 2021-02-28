const passport = require('passport')

module.exports = (app) => {
    app.get('/aut/google',
        passport.authenticate('google',{
            scope:['profile','email']
        })
    )

    app.get('/auth/google/callback',passport.authenticate('google'))

}