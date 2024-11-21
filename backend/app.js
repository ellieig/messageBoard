import express, { application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import router from './backend/routes/message.route.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}));
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlEncoded({extended:false}));
app.use(bodyParser.json());
app.use("/", router);

app.use('/styles', express.static(path.join(__dirname, 'styles')));

//serve static files from the react app
app.use(express.static(path.join(__dirname, '../frontend/build')));

//route all requests to React's index.js
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const HOSTNAME = 'localhost';
const PORT = 5000;

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});