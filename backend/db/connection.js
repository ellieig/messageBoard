import {config as dotenvConfig} from 'dotenv';
import mongoose from 'mongoose';

export default class Connection {
    static async open(db) {
        dotenvConfig();

        const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER} = process.env;
        const DATABASE_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.xtdufxk.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(DATABASE_URL, {
        maxPoolSize: 50,
        socketTimeoutMS: 2500,
        dbName: db

    });
    return mongoose.connection;
    }
}
