const models = require("../model/models")

describe("Palíndromo", ()=>{
    test("Deve retornar os Palíndromos entre um intervalo", async () =>{
        const res = await models.isPalindrome(start = 1, end = 48)
        expect(res).toEqual({
            "palindromo": [
               1,
               2,
               3,
               4,
               5,
               6,
               7,
               8,
               9,
               11,
               22,
               33,
               44,
             ]
           })
    })

    test("Deve retornar nenhum Palíndromo", async () => {
        const res = await models.isPalindrome(start = 50, end = 48).catch(erro => erro)
        expect(res).toEqual({"message": "nenhum Palíndromo foi encontrado"})
    })
})


describe("Invoice", () =>{
    test("Deve retornar que o valor da conta é maior do que foi pago", async () =>{
        const res = await models.invoice(purchasePrice = 19, payment = 10).catch(erro => erro)
        expect(res).toEqual({"message": "Valor pago é menor que o valor da compra."})
    })
    
    test("Deve retornar notas de um", async () =>{
        const res = await models.invoice(purchasePrice = 11, payment = 20)
        expect(res).toEqual({"notas": {"notasDeUm": 9}, "valorDaCompra": 11, "valorTroco": 9})
    })

    test("Deve retornar notas de dez", async () =>{
        const res = await models.invoice(purchasePrice = 10, payment = 20)
        expect(res).toEqual({"notas": {"notasDeDez": 1}, "valorDaCompra": 10, "valorTroco": 10})
    })

    test("Deve retornar notas de um e de dez", async () =>{
        const res = await models.invoice(purchasePrice = 10, payment = 25)
        expect(res).toEqual({"notas": {"notasDeDez": 1, "notasDeUm": 5}, "valorDaCompra": 10, "valorTroco": 15})
    })

    test("Deve retornar notas de cem", async () =>{
        const res = await models.invoice(purchasePrice = 100, payment = 200)
        expect(res).toEqual({"notas": {"notasDeCem": 1}, "valorDaCompra": 100, "valorTroco": 100})
    })

    test("deve retornar notas de dez e de cem", async () =>{
        const res = await models.invoice(purchasePrice = 100, payment = 210)
        expect(res).toEqual({"notas": {"notasDeCem": 1, "notasDeDez": 1, "notasDeUm": 0}, "valorDaCompra": 100, "valorTroco": 110})
    })

    test("deve retornar notas de um, dez e cem", async () =>{
        const res = await models.invoice(purchasePrice = 100, payment = 215)
        expect(res).toEqual({"notas": {"notasDeCem": 1, "notasDeDez": 1, "notasDeUm": 5}, "valorDaCompra": 100, "valorTroco": 115})
    })
})


describe("Objeto Carro", () => {
    test("Deve retornar erro pela quantidade de portas abaixo de 2", async () =>{
        const carro = {
            "modelo": "sedan",
            "anoDeFabricacao": "2020",
            "quantidadeDePortas": 1,
            "marca": "Hyundai"
        }
        const res = await models.carro(carro).catch(erro => erro)
        expect(res).toEqual({"message": "Quantidade de portas incorreto."})
    })

    test("Deve retornar erro pela quantidade de portas acima de 4", async () =>{
        const carro = {
            "modelo": "sedan",
            "anoDeFabricacao": "2020",
            "quantidadeDePortas": 5,
            "marca": "Hyundai"
        }
        const res = await models.carro(carro).catch(erro => erro)
        expect(res).toEqual({"message": "Quantidade de portas incorreto."})
    })

    test("Deve retornar o objeto carro", async () =>{
        const carro = {
            "modelo": "sedan",
            "anoDeFabricacao": "2020",
            "quantidadeDePortas": 2,
            "marca": "Hyundai"
        }
        const res = await models.carro(carro)
        expect(res).toEqual({"anoDeFabricacao": "2020", "marca": "Hyundai", "modelo": "sedan", "quantidadeDePortas": 2})
    })
})


describe("Objeto Moto", () => {
    test("Deve retornar erro pela quantidade de rodas ser diferente de 2", async () =>{
        const moto ={
            "modelo": "CG 160 Start",
            "anoDeFabricacao": "2020",
            "marca": "Honda",
            "rodas": 1,
            "passageiros": 1
        
        }
        const res = await models.moto(moto).catch(erro => erro)
        expect(res).toEqual({"message": "Dados incorretos, por favo, verificar."})
    })

    test("Deve retornar erro pela quantidade de passageiros ser menor que 1", async () =>{
        const moto ={
            "modelo": "CG 160 Start",
            "anoDeFabricacao": "2020",
            "marca": "Honda",
            "rodas": 2,
            "passageiros": 0
        
        }
        const res = await models.moto(moto).catch(erro => erro)
        expect(res).toEqual({"message": "Dados incorretos, por favo, verificar."})
    })

    test("Deve retornar erro pela quantidade de passageiros ser maior que 2", async () =>{
        const moto ={
            "modelo": "CG 160 Start",
            "anoDeFabricacao": "2020",
            "marca": "Honda",
            "rodas": 2,
            "passageiros": 3
        
        }
        const res = await models.moto(moto).catch(erro => erro)
        expect(res).toEqual({"message": "Dados incorretos, por favo, verificar."})
    })

    test("Deve retornar o objeto carro", async () =>{
        const moto = {
            "modelo": "CG 160 Start",
            "anoDeFabricacao": "2020",
            "marca": "Honda",
            "rodas": 2,
            "passageiros": 2
        
        }
        const res = await models.moto(moto)
        expect(res).toEqual({"anoDeFabricacao": "2020", "marca": "Honda", "modelo": "CG 160 Start", "passageiros": 2, "quantidadeDePortas": undefined, "rodas": 2})
    })
})

describe("Cep", () => {
    test("Deve retornar cep invalido", async () =>{
        const ceps = {
            "ceps": [""]
        }
        const res = await models.cep(ceps)
        expect(res).toEqual([{"message": "Cep  esta incorreto."}])
    })

    test("Deve retornar os dados dos ceps", async () =>{
        const ceps = {
            "ceps": ["64088630","69093182","15501393","29301661","69306394"]
        }
        const res = await models.cep(ceps)
        expect(res).toEqual([{"bairro": "Todos os Santos", "cep": "64088-630", "complemento": "", "ddd": "86", "gia": "", "ibge": "2211001", "localidade": "Teresina", "logradouro": "Rua Quinze de Novembro", "siafi": "1219", "uf": "PI"}, {"bairro": "Monte das Oliveiras", "cep": "69093-182", "complemento": "", "ddd": "92", "gia": "", "ibge": "1302603", "localidade": "Manaus", "logradouro": "Rua Castanha do Pará", "siafi": "0255", "uf": "AM"}, {"bairro": "Vila Nova", "cep": "15501-393", "complemento": "", "ddd": "17", "gia": "7183", "ibge": "3557105", "localidade": "Votuporanga", "logradouro": "Rua Cavenagui", "siafi": "7245", "uf": "SP"}, {"bairro": "Estelita Coelho Marins", "cep": "29301-661", "complemento": "de 1/2 a 99998/99999", "ddd": "28", "gia": "", "ibge": "3201209", "localidade": "Cachoeiro de Itapemirim", "logradouro": "Avenida Doutor Aristides Campos", "siafi": "5623", "uf": "ES"}, {"bairro": "Nossa Senhora Aparecida", "cep": "69306-394", "complemento": "", "ddd": "95", "gia": "", "ibge": "1400100", "localidade": "Boa Vista", "logradouro": "Rua Perimetral Norte", "siafi": "0301", "uf": "RR"}])
    })
})