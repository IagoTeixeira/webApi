<h1 align="center"> Web Api </h1>

<p>Essa api tem como funcionalidade a de encontrar um palindromo, menor valor de notas devolvido de um caixa com notas de 1,10 e 100, criar um objeto através de uma regra de interface em Typescript e de trazer dados da quantidade de ceps informados</p>

<h2>Dependências utilizadas</h2>

<p>Foi utilizado as seguintes dependências : <br>
  
<strong>Express:</strong> Utilizado para criar o servidor e as rotas.

<strong>Consign:</strong> Utilizado para unir as rotas ao index, onde se encontra a inicialização da aplicação.
  
<strong>Typescript:</strong> Para poder criar os objetos em typescript.
  
<strong>Axios:</strong> Para consumir a api de ceps.

<strong>Nodemon:</strong> Para reiniciar o servidor sempre que houver alguma atualização.

Para que sejam instaladas todas as dependências, basta dar o comando:
  
 `npm install`

<strong>OBSERVAÇÃO: PARA QUE ESSA APLICAÇÃO RODE É NECESSÁRIO QUE O NODEJS ESTEJA INSTALADO NA MÁQUINA</strong>
</p>


<h2>Comandos utilizados</h2>

`npm test` : vai rodar os testes unitários.

`npm start` : vai rodar a aplicação, ligando o servidor.


<h2>Rotas</h2>

<p><strong>"/" => Essa rota é apenas uma rota de boas vinda simples</p>

<p><strong>"/polindrome/:start/:end"</strong> => Essa rota retorna os números palíndromos entre um intervalo da sua escolha, nessa rota deve ser passado os parâmetros que deseja na própria url, sendo o parâmetro start como o ínicio do intervalo e o parâmetro end como o fim do intervalo, a função irá percorrer entre os pontos de inicio e fim informados encontrando os palíndromos, o método utilizado é o GET.</p>

Exemplo: 
`polindrome/1/48`

Retorna: 
```json
{"palindromo":[1,2,3,4,5,6,7,8,9,11,22,33,44]}
```

<p><strong>"/invoice/:purchasePrice/:payment"</strong> => Essa rota retorna o valor da compra, o valor de troco e as menores notas que podem ser passadas para esse troco, a rota recebe no parâmetro purchasePrice o valor da compra total e no parâmetro payment recebe o valor pago, na função é feito o cálculo do valor de troco e as notas mínimas necessárias para ser devolvido ao cliente, o método utilizado é o GET.</p>

Exemplo: 
`/invoice/100/200`

Retorna: 
```json
{"valorDaCompra":"100","valorTroco":100,"notas":{"notasDeCem":1}}
```

<p><strong>"/CEP"</strong> => Essa rota retorna os dados dos cep's informados, os cep's devem ser informados como no exemplo abaixo, a função vai percorrer os cep's informados fazendo a consulta na api (https://viacep.com.br/) e armazenando os seus dados para no fim do processo informar todos os cep's com seus dados de uma única vez, os dados devem ser informados no formato JSON, o método utilizado é o POST.</p>

Exemplo: 
```json
{
    "ceps": ["64088630","69093182","15501393","29301661","69306394"]
}
```

Retorna
```json

[
    {
        "cep": "64088-630",
        "logradouro": "Rua Quinze de Novembro",
        "complemento": "",
        "bairro": "Todos os Santos",
        "localidade": "Teresina",
        "uf": "PI",
        "ibge": "2211001",
        "gia": "",
        "ddd": "86",
        "siafi": "1219"
    },
    {
        "cep": "69093-182",
        "logradouro": "Rua Castanha do Pará",
        "complemento": "",
        "bairro": "Monte das Oliveiras",
        "localidade": "Manaus",
        "uf": "AM",
        "ibge": "1302603",
        "gia": "",
        "ddd": "92",
        "siafi": "0255"
    },
    {
        "cep": "15501-393",
        "logradouro": "Rua Cavenagui",
        "complemento": "",
        "bairro": "Vila Nova",
        "localidade": "Votuporanga",
        "uf": "SP",
        "ibge": "3557105",
        "gia": "7183",
        "ddd": "17",
        "siafi": "7245"
    },
    {
        "cep": "29301-661",
        "logradouro": "Avenida Doutor Aristides Campos",
        "complemento": "de 1/2 a 99998/99999",
        "bairro": "Estelita Coelho Marins",
        "localidade": "Cachoeiro de Itapemirim",
        "uf": "ES",
        "ibge": "3201209",
        "gia": "",
        "ddd": "28",
        "siafi": "5623"
    },
    {
        "cep": "69306-394",
        "logradouro": "Rua Perimetral Norte",
        "complemento": "",
        "bairro": "Nossa Senhora Aparecida",
        "localidade": "Boa Vista",
        "uf": "RR",
        "ibge": "1400100",
        "gia": "",
        "ddd": "95",
        "siafi": "0301"
    }
]
```

<p><strong>"/carro"</strong> => Essa rota retorna o objeto criado com os dados informado, o mesmo é salvo em um arquivo JSON, localizado na pasta /dbJson, salva apenas um modelo, é necessário informar os dados no formato json, o dado de quantidade de portas deve ser um NUMBER entre 2 e 4, o método utilizado é o POST.</p>

Exemplo: 
```json
{
    "modelo": "Creta",
    "anoDeFabricacao": "2020",
    "quantidadeDePortas": 4,
    "marca": "Hyundai"
}
```

Retorna
```json

{
    "modelo": "sedan",
    "anoDeFabricacao": "2020",
    "quantidadeDePortas": 4,
    "marca": "Hyundai"
}
```

<p><strong>"/moto"</strong> => Essa rota retorna o objeto criado com os dados informado, o mesmo é salvo em um arquivo JSON, localizado na pasta /dbJson, salva apenas um modelo de cada vez, é necessário informar os dados no formato json, os dados de passageiro (entre 1 e 2) e rodas(sempre deve ser 2) deve ser um NUMBER, o método utilizado é o POST.</p>

Exemplo: 
```json
{
    "modelo": "CG 160 Start",
    "anoDeFabricacao": "2020",
    "marca": "Honda",
    "rodas": 2,
    "passageiros": 1

}
```

Retorna
```json
{
    "modelo": "CG 160 Start",
    "anoDeFabricacao": "2020",
    "marca": "Honda",
    "rodas": 2,
    "passageiros": 1

}
```

