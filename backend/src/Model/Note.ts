import mongoose from 'mongoose'

const { Schema } = mongoose

export type note = {
    content: string,
    _id: string
}

const NoteSchema = new Schema<note> ({
    content: {
        type: String,
        required: true
    }      
})

export default mongoose.model("Note", NoteSchema)