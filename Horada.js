const express = require('express');
const server = express();
server.get('/',(req,resp)=>{
    resp.send("OHAYOOOOOOOOO <br> <p style=color:blue;background-color:green;> MATTE MATTE </p>")
})

// Dá pra colocar CSS in line dessa forma acima

server.get('/teste/',(req,resp)=>{
    resp.send('O server está funcionando!');
});

server.get('/mensagem/:nome',(req,resp)=>{
    let mizagen = req.params.nome;
    console.log(mizagen)
    resp.send(`Ohayo!!! ${mizagen}`)
})


server.listen(3000,()=>{
    console.log('Servidor Iniciado!!');
});