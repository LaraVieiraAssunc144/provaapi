import 'dotenv/config'

import vilaoController from './Controller/vilaoController.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use(vilaoController)




server.listen(process.env.PORT,()=> console.log(`Api online na porta ${process.env.PORT}`))