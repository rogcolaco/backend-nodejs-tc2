# Definições gerais do projeto
Esse repositório foi criado como parte dos estudos da disciplina de Tópicos de Computação 2 (TC2) do curso de análise e desenvolvimento de sistemas 
do Instituto Federa de Ciência e Tecnologia de São Paulo Campus São Carlos.
Trata-se de um backend simples feito utilizando NodeJS e o framework express e tem como objetivo realizar as operções de CRUD para cadastro de veículos.

## Rotas disponívels

/api/cars
- GET: Retorna todos os veículos cadastrados
- POST: Cadastra um novo veículo

/api/cars/:id 
- GET: Busca o veículo com o ID informado
- PUT: Altera o veículo com o ID informado
- DELETE: Deleta o veículo com o ID informado
