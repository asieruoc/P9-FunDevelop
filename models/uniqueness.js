require('./mongoDB')

const User = require ('./models/User')

async function createusers(){
    const user = new User({
        username: 'Paki',
        password: '123456'
    })
    await user.save();
}

createusers();