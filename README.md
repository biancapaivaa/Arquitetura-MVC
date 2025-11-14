# Cadastro de Produtos — Arquitetura MVC (Frontend)

Este projeto é um exemplo simples e didático de como implementar a **arquitetura MVC (Model–View–Controller)** usando apenas **HTML, CSS e JavaScript puro**, sem backend.  
O objetivo é demonstrar como separar responsabilidades dentro de uma aplicação web.

---

## Arquitetura MVC explicada

A arquitetura **MVC** divide o código em três camadas independentes:

---

## **Model (model.js)**  
Responsável pelos **dados** da aplicação.

Funções principais:
- Buscar dados do `localStorage`
- Salvar dados no `localStorage`
- Adicionar novos produtos
- Editar produtos existentes
- Excluir produtos

O Model não conhece a interface. Ele apenas gerencia dados.

---

## **View (view.js)**  
Responsável pela **interface**.

Funções principais:
- Renderizar a lista de produtos
- Montar o HTML dos itens
- Exibir mensagens quando a lista estiver vazia

A View não altera dados. Ela apenas exibe o que recebe do Controller.

---

## **Controller (controller.js)**  
Responsável por conectar **View** ↔ **Model**.

Funções principais:
- Capturar eventos do usuário (adicionar, editar, excluir)
- Atualizar os dados através do Model
- Solicitar atualização da interface através da View

O Controller coordena tudo sem misturar responsabilidades.

---

## Estrutura de pastas

```text
.
├── controller
│   └── tasksController.js
├── model
│   └── tasksModel.js
├── view
│   ├── index.html
│   └── style.css
└── README.md

---

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo **index.html** no navegador.
3. Comece a cadastrar, editar e excluir produtos.

Nenhum servidor é necessário — tudo funciona com **localStorage**.

---

## Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6)  
- localStorage  
- Arquitetura MVC

---

## Funcionalidades

- Cadastrar produto  
- Editar produto  
- Excluir produto  
- Salvar automaticamente no localStorage  
- Renderização dinâmica da lista  

---

## Objetivo educacional

Este projeto demonstra:
- Separação de responsabilidades
- Implementação simples de MVC no frontend
- Manipulação do DOM
- Modularização de código

---

## Créditos

Desenvolvido por **Bianca Nogueira**  
Curso de **Desenvolvimento de Sistemas – SENAI**

---
