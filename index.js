const express = require('express');
let alert = require('alert');
// console.log(express);

const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

// server.get('/kemuel', (req, res) =>{
//     // console.log('acessou a rota do Kemuel');
//     return res.json({message: 'Aqui estou mais um dia!'});
// })


app.listen(3030, () =>{
    let data  = new Date();
    console.log('Servidor iniciado em:', + data);
});