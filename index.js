const express = require('express');

// console.log(express);

const server = express();

server.get('/kemuel', () =>{
    console.log('acessou a rota do Kemuel');
})

server.listen(3030);