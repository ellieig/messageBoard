// This is the schema for what a message should look like

import mongoose from "mongoose";

const Schema = mongoose.Schema;

//This is the schema for our model
const MessageSchema = new Schema (
    {
        id: {type: Number, required: true},
        from: {type: String, required: true},
        content: {type: String, required: true},
        to: {type: String, required: true}
    },
    {
        // save to collection proj_collection
        collection: "proj_collection"
    }
);

const db = mongoose.connection.useDb("messageBoard");
const Message = db.model("Message", MessageSchema);

export default Message; 