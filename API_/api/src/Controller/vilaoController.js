import {CadastreVilao,ConsultarVilao } from '../Repository/vilaoRespository.js'

import { Router } from "express";

const server = Router();

server.post('/vilao', async (req, resp) => {
    try {
        const vilao = req.body;

        const InserirVilao = await CadastreVilao(vilao);

        resp.send(InserirVilao);
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.get('/vilaozinho', async (req, resp) => {
    try {
        const resposta = await ConsultarVilao();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
export default server;