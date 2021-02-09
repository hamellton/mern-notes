import mongoose from 'mongoose'

import '../models/note.js'

const Note = mongoose.model('Note')

export let setUpConnection = () => {
    mongoose.connect('mongodb://localhost/notes', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export let listNotes = () => {
    return Note.find()
}

export let createNote = (data) => {
    const newNote = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    })
    return newNote.save()
}

export let deleteNote = (id) => {
    return Note.findById(id).remove()
}