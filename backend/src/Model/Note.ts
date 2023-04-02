import mongoose from 'mongoose'

const { Schema } = mongoose

export type note = {
    content: string,
    stringId: string
}

const NoteSchema = new Schema<note> ({
    content: {
        type: String,
        required: true
    },
    stringId: {
        type: String,
        required: true,
        default: new mongoose.Types.ObjectId().toString()
    }
})

export default mongoose.model("Note", NoteSchema)