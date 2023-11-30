## Pizza Api

![Texto alternativo](https://usagif.com/wp-content/uploads/gifs/pizza-38.gif)

<p>Resolução do desafio CollabCodeTech </p> 

## Descrição do desafio 

<p>Esta aplicação tem o propósito de expor uma API JSON para ser consumida por um cliente frontend para pedir pizza.</p>

### As seguintes entidades devem ser criadas (incluindo relações adequadas):

pizza - tem nome e preço (por exemplo, Margherita $ 5, Pepperoni $ 6, ...).
pedido - tem itens
item do pedido - tem pizza e quantidade.<br>
<strong> Os seguintes endpoints devem retornar uma resposta JSON.

## Tecnologias utilizadas

* Deno js
* Oak
* Postgresql

## Instalação

* Se tiver o deno js instalado em sua maquina siga o proximo tópico  caso contrário instale o [deno js](https://docs.deno.com/runtime/manual/getting_started/installation).<br><br>
* <strong> Clone o repositório 
```bash
$ git clone https://github.com/Miguel-D3v/pizzaApi.git
```

## Configuração
<p> Crie um arquivo .env e preencha com as informações do seu banco de bados postgres . Utilize o arquivo example.env como base.</p>

## Execução
Inicie o servidor

```bash
$ deno task start
``` 
<br>

## Endpoints

