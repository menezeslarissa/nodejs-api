const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//exporta o objeto 
//index faz a listagem de todos os produtos na base de dados
//async define uma função assincrona que retorna uma promise ( pode ser um valor que pode estar disponivel agr, no futuro ou nunca)
//await pausa a execução da async e espera pela resolução da promise passada e depois retorna
//a função assincrona e o valor resolvido
//ou seja a proxima linha só executa depois de conseguir o registro do bacno dedados
module.exports = {
    async index(req, res){
        const products = await Product.paginate({}, {page: 1, limit: 10});
        //retorna a lista no formato json
        return res.json(products);
    },
    //cria novo produto
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },
    //rota de retorna um unico produto
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    //atualiza os dados de um produto
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});
        //a propriedade new true diz para o mongoose retornar esse objeto atualizado
        return res.json(product);
    },

    //remoção
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}
