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
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

export default mongoose.model("Note", NoteSchema)