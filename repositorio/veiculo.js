const fs = require("fs");
class Carro {
    modelo;
    anoDeFabricacao;
    quantidadeDePortas;
    marca;
    constructor(modelo, anoDeFabricacao, quantidadeDePortas, marca) {
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
    }
    salvaDados() {
        const datas = {
            modelo: this.modelo,
            anoDeFabricacao: this.anoDeFabricacao,
            quantidadeDePortas: this.quantidadeDePortas,
            marca: this.marca
        };
        fs.writeFile("./dbJson/carros.json", JSON.stringify(datas), (err) => {
            if (err) {
                throw err;
            }
        });
        return datas
    }
}
class Moto {
    modelo;
    anoDeFabricacao;
    quantidadeDePortas;
    marca;
    rodas;
    passageiros;
    constructor(modelo, anoDeFabricacao, quantidadeDePortas, marca, rodas, passageiros) {
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
        this.rodas = rodas;
        this.passageiros = passageiros;
    }
    salvaDados() {
        const datas = {
            modelo: this.modelo,
            anoDeFabricacao: this.anoDeFabricacao,
            quantidadeDePortas: this.quantidadeDePortas,
            marca: this.marca,
            rodas: this.rodas,
            passageiros: this.passageiros
        };
        fs.writeFile("./dbJson/motos.json", JSON.stringify(datas), (err) => {
            if (err) {
                throw err;
            }
        });
        return datas
    }
}

module.exports = {Carro, Moto}
