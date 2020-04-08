const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json()); //permite que eu envie dados pra app no formato de json
//iniciando o database
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true } );
requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001); //app vai ouvir a porta 3001 do navegador
