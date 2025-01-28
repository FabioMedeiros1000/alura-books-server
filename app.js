const express = require('express')
const rotaLivro = require('./rotas/livros')
const rotaFavorito = require('./rotas/favorito')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando')
})