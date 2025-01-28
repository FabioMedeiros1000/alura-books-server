const fs = require('fs')

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosAtualizados = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados))
}

function modificaLivro (id, modificacoes) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indice = livros.findIndex(livro => livro.id === id)
    const livroModificado = {...livros[indice], ...modificacoes}

    livros[indice] = livroModificado
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function apagaLivro (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosAtualizados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    apagaLivro
}