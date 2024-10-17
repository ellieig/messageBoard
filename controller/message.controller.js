import MessageAccessor from "../db_accessor/message.accessor";

export default class MessageController {
    static async getMessageById(req, res) {
        try {
            const m_id = req.params.id;
            const messge = await MessageAccessor.getMessage(m_id);
        } catch (e) {
            throw e;
        }
    }
}