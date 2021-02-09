import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createdAt: {type: Date},
})

const Note = mongoose.model('Note', noteSchema)