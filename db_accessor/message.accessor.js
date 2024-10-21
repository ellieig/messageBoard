import Connection from "../db/connection.js";
import Message from "..?model/message.js";

export default class MessageAccessor {
    static async getMessage (msge_id) {
        try {
            await Connection.open("messageBoard");
            const msge = await Message.findOne({id: msge_id});
            return msge;
        } catch (e) {
            throw e;
        }
    }

    static async createMessage (messageInfo) {
        try {
            await Connection.open("messageBoard");
            const msge = await Message.create(messageInfo);
            return msge;
        } catch (e) {
            console.log("Failed");
        }
    }
}