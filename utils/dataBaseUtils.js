import mongoose from 'mongoose'

import '../models/note.js'

const User = mongoose.model('mongos')

export let setUpConnection = () => {
    mongoose.connect('mongodb://localhost/mongodb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            throw err
        } else {
            console.log(`Connect with  mongoDB`)
        }
    })
}

export let listUsers = () => {
    return User.find({})
}

export let createUser = (data) => {
    const newUser = new User({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    })
    return newUser.save()
}

export let deleteUser = (id) => {
    return User.findById(id).remove()
}