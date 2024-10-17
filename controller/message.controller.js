import MessageAccessor from "../db_accessor/message.accessor";

export default class MessageController {
    static async getMessageById(req, res) {
        try {
            const m_id = req.params.id;
            const messge = await MessageAccessor.getMessage(m_id);
            res.json(messge);
        } catch (e) {
            throw e;
        }
    }

    static async postNewMessage(req, res) {
        try {
            await MessageAccessor.createMessage(req.body);
            res.redirect("/");
        }   catch (e) {
                console.log("Failed");
        }
    }
}
