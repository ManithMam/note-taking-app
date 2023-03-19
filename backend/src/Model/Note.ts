import mongoose from 'mongoose'

const { Schema } = mongoose

export interface note {
    content: string,
    id: string
}

const NoteSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Note", NoteSchema)