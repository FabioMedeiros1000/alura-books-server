const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, apagaLivro } = require('../servicos/livros')

function  getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        if (req.body.nome) {
            const livro = req.body
            insereLivro(livro)
            res.status(201)
            res.send("Livro adicionado com sucesso!")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
    
            modificaLivro (id, body)
            res.status(200)
            res.send("Item modificado com sucesso!")
        } else {
            res.status(422)
            res.send('Id inválido!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro (req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            apagaLivro(id)
    
            res.status(200)
            res.send("Livro deletado com sucesso!")
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}