<<<<<<< HEAD
const exp = require('constants')
=======
>>>>>>> e7bd360ed901a7f04e8531b7720680f2b9ba3651
const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

<<<<<<< HEAD
=======
// acessar as informações do corpo da requisição
>>>>>>> e7bd360ed901a7f04e8531b7720680f2b9ba3651
app.use(express.urlencoded({
    extended: true
}))

<<<<<<< HEAD
app.use(express.json())

=======
// transforma as informações em objetos do JS
app.use(express.json())

// utilizar arquivos estáticos
>>>>>>> e7bd360ed901a7f04e8531b7720680f2b9ba3651
app.use(express.static('public'))

app.post('/users/save', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`
        Usuário: ${nome}
        Idade: ${idade}
    `)

    res.redirect('/')
})

app.get('/users/cadastrar', (req, res) => {
    res.sendFile(`${caminho}/usuariosform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(3000)