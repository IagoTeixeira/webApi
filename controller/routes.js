const models = require("../model/models")

module.exports = (app) =>{
    app.get("/", (req, res) =>{
        res.send("Bem vindo a Web Api")
    })

    app.get("/palindrome/:start/:end", (req, res) =>{
        const start = req.params.start
        const end = req.params.end
        models.isPalindrome(start, end)
            .then(element => res.json(element))
            .catch(erro => res.status(404).json(erro))
    })

    app.get("/invoice/:purchasePrice/:payment", (req, res) =>{
        const purchasePrice = req.params.purchasePrice
        const payment = req.params.payment
        models.invoice(purchasePrice, payment)
            .then(element => res.json(element))
            .catch(erro => res.status(404).json(erro))
    })

    app.post("/CEP", (req, res) =>{
        const dados = req.body
        models.cep(dados)
            .then(element => res.json(element))
            .catch(erro => res.status(404).json(erro))
    })

    app.post("/carro", (req, res) =>{
        const dados = req.body
        models.carro(dados)
            .then(element => res.json(element))
            .catch(erro => res.status(404).json(erro))
    })

    app.post("/moto", (req, res) =>{
        const dados = req.body
        models.moto(dados)
            .then(element => res.json(element))
            .catch(erro => res.status(404).json(erro))
    })
}
