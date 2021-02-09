import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    surname: String,
    email: String,
    phone: "Number",
    message: String,
})

const User = mongoose.model('mongos', userSchema)