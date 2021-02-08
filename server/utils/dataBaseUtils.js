import mongoose from 'mongoose'

import '../models/note'

const Note = mongoose.model('Note')

export let setUpConnection = () => {
    mongoose.connect('mongodb://localhost/notes')
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