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
    },
    _id: {
        type: String,
        required: true,
        default: new mongoose.Types.ObjectId().toString()
    }
})

export default mongoose.model("Note", NoteSchema)