const axios = require("axios").default
const {Carro, Moto}= require("../repositorio/veiculo")

class Models{

    isPalindrome(start, end){
        const numPalindrome = []
        let counter = parseInt(start)
        while(counter <= end){
            const numReverse = counter.toString().split("").reverse().join("")
            if(numReverse === counter.toString()){
                numPalindrome.push(counter)
            }
            counter += 1
        }
        if(numPalindrome.length === 0){
            return Promise.reject({message: "nenhum Palíndromo foi encontrado"}) 
        }else{
            return Promise.resolve({palindromo: [...numPalindrome]})
        } 
        
    }


    
    invoice(purchasePrice, payment){
        let exchanged = payment - purchasePrice
        let notesOfOne, tenNotes, hundredBill = 0
        if(payment < purchasePrice){
            return Promise.reject({message: "Valor pago é menor que o valor da compra."})
        }
        else if(exchanged >= 10 && exchanged < 100){

            if(exchanged % 10 !== 0){
                tenNotes = parseInt(exchanged / 10)
                notesOfOne = exchanged % 10
                return Promise.resolve({valorDaCompra: purchasePrice, valorTroco: exchanged, notas:{notasDeDez: tenNotes,notasDeUm: notesOfOne}})
            }
            else{
                tenNotes = parseInt(exchanged / 10)
                return Promise.resolve({valorDaCompra: purchasePrice, valorTroco: exchanged, notas:{notasDeDez: tenNotes}})
            }
        }
        
        else if(exchanged >= 100){
            hundredBill = exchanged / 100

            if(exchanged % 100 !== 0){
                tenNotes = (exchanged % 100) / 10
                if(tenNotes % 10 !== 0){
                    notesOfOne = exchanged % 10
                    return Promise.resolve({valorDaCompra: purchasePrice, valorTroco: exchanged, notas:{notasDeDez: parseInt(tenNotes),notasDeUm: notesOfOne, notasDeCem: parseInt(hundredBill)}})
                }
            }else{
                return Promise.resolve({valorDaCompra: purchasePrice, valorTroco: exchanged, notas:{notasDeCem: hundredBill}})
            } 
        }
        
        else{
            notesOfOne = exchanged / 1
            return Promise.resolve({valorDaCompra: purchasePrice, valorTroco: exchanged, notas:{notasDeUm: notesOfOne}})
        }
    }



    carro(dados){
        if(dados.quantidadeDePortas < 2|| dados.quantidadeDePortas > 4){
            return Promise.reject({message: "Quantidade de portas incorreto."})
        }else{
        const carro = new Carro(dados.modelo, dados.anoDeFabricacao, dados.quantidadeDePortas, dados.marca)
        return Promise.resolve(carro.salvaDados())
        }
    }

    moto(dados){
        if(dados.quantidadeDePortas > 0 || dados.rodas !== 2 ||  dados.passageiros <1 ||  dados.passageiros > 2){
            return Promise.reject({message: "Dados incorretos, por favo, verificar."})
        }else{
        const moto = new Moto(dados.modelo, dados.anoDeFabricacao, dados.quantidadeDePortas, dados.marca, dados.rodas, dados.passageiros)
        return Promise.resolve(moto.salvaDados())
        }
    }



    async cep(dados){
        const aCeps = dados.ceps
        const dataCeps = []
        for(let i = 0; i< aCeps.length; i++){
            if(aCeps[i].length === 8){
            await axios.get(`https://viacep.com.br/ws/${aCeps[i]}/json/`)
                .then(element => dataCeps.push(element.data))
            }else{
                dataCeps.push({message: `Cep ${aCeps[i]} esta incorreto.`})
            }
        }
        return Promise.resolve(dataCeps)
    }
}

module.exports = new Models()