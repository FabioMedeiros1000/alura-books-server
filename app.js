const express = require('express')
const rotaLivro = require('./rotas/livros')
const rotaFavorito = require('./rotas/favorito')
const cors = require('cors')

const app = express()
const port = 8000

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
    console.log("Servidor rodando na porta 8000")
})