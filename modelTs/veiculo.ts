const fs = require("fs")

interface Veiculo {
    modelo: string;
    anoDeFabricacao: string;
    quantidadeDePortas: number;
    marca: string;
}

class Carro implements Veiculo{
    modelo: string;
    anoDeFabricacao: string;
    quantidadeDePortas: number;
    marca: string;
    constructor(modelo: string, anoDeFabricacao: string, quantidadeDePortas: number, marca: string){
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca
    }

    salvaDados() {
        const datas = {
            modelo: this.modelo,
            anoDeFabricacao: this.anoDeFabricacao,
            quantidadeDePortas: this.quantidadeDePortas,
            marca: this.marca
        };
        fs.writeFile("./dbJson/carros.json", JSON.stringify(datas), (err: any) => {
            if (err) {
                throw err;
            }
        });
        return datas     
       
    }
}
class Moto implements Veiculo{
    modelo: string;
    anoDeFabricacao: string;
    quantidadeDePortas: number;
    marca: string;
    rodas: number;
    passageiros: number;
    constructor(modelo: string, anoDeFabricacao: string, quantidadeDePortas: number, marca: string, rodas: number, passageiros: number){
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca
        this.rodas = 2
        this.passageiros = 2
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
        fs.writeFile("./dbJson/motos.json", JSON.stringify(datas), (err: any) => {
            if (err) {
                throw err;
            }
        });
        return datas 
    }
}
module.exports = {Carro, Moto}