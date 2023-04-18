import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},{
    timestamps: true
})

export default model('post', PostSchema)