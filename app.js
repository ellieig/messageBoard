import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve() + '/src/homepage.html')
})

app.get("/p2", (req, res) => {
    res.sendFile(path.resolve() + '/src/page2.html')
})

const HOSTNAME = 'localhost'
const PORT = 3000

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});