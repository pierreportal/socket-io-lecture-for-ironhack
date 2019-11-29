const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = require("../models/User")

const data = require("./userdata.json")


const cryptPsw = strPsw => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(strPsw, salt)
}

const processedData = data.map(x => {
    x.password = cryptPsw(x.password)
    return x
})

mongoose.connect("mongodb://localhost/mern-chat-app").then(() => {
    console.log('connection success !')
}).catch(err => console.log(err))

User.insertMany(processedData).then(response => {
    console.log(`${response.length} users created.`)
    mongoose.connection.close()
}).catch(err => console.log(err))