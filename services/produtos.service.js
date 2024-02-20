import { produtos } from "../db/produtos.js"


export const produtoService = {
    buscarProdutos: (request, reply) => {
        return produtos
    },
    buscarProdutoPorId: (req, res) => {
        let idReq = req.params.id
        let produto = produtos.find(p => p.id === parseInt(idReq))
        return produto
    },
    criarProduto: (req, res) => {
        let produtoReq = req.body
        return produtos.push(produtoReq)
    },
    atualizarProduto: (req, res) => {
        const produtoId = req.params.id
        const produto = produtos.find(produto => produto.id == produtoId)
        if(!produto) {
            res.status(404).send({message: 'Produto não encontrado'})
            return
        }

        produto.nome = req.body.nome ?? produto.nome
        produto.preco = req.body.preco ?? produto.preco
        produto.off = req.body.off ?? produto.off

        res.status(201).send(produto)
    },
    removerProdutos: (req, res) => {
        produtos.splice(0, produtos.length)
        res.status(201).send({message: "todos os produtos foram excluídos"})
    },

    removerProdutoPorId: (req,res) => {
        const produtoId = req.params.id
        const produto = produtos.find((produto) => produto.id == produtoId)
        const index = produtos.indexOf(produto)
        produtos.splice(index,1)

        res.status(201).send({message: "produto excluído com sucesso!"})
    },



    atualizarProdutoParcial: (req,res) => {
        

    }
}