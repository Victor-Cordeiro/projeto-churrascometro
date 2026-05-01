# 🍖 Churrascômetro

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📌 Sobre o Projeto
O **Churrascômetro** é uma aplicação web interativa projetada para acabar com a dúvida na hora de planejar um churrasco. A ferramenta calcula a quantidade ideal de carnes, cerveja e bebidas (refrigerante/água) necessária para um evento, levando em consideração o número de adultos, crianças e a duração da festa. 

Este projeto foi desenvolvido como parte de um curso de aprofundamento em JavaScript, focando na aplicação prática da lógica de programação.

## 🚀 Como Acessar
Você pode testar a aplicação diretamente pelo link: 
👉 **[Acessar o Churrascômetro](https://victor-cordeiro.github.io/projeto-churrascometro/)**

## ⚙️ Funcionalidades e Regras de Negócio
O cálculo é feito dinamicamente assim que os dados são inseridos, seguindo a seguinte lógica:

**Carnes (Bovina, Suína, Frango, etc.):**
* 400g por adulto (se o evento durar mais de 6 horas, passa a ser 650g).
* Crianças consomem metade do valor de um adulto.

**Cerveja:**
* 1200ml (1,2L) por adulto (se o evento durar mais de 6 horas, passa a ser 2000ml).
* *Crianças não entram no cálculo de cerveja.*

**Bebidas (Refrigerante e Água):**
* 1000ml (1L) por pessoa (adultos e crianças).
* Se o evento durar mais de 6 horas, passa a ser 1500ml (1,5L) por pessoa.

## 💻 Tecnologias e Conceitos Aplicados
* **HTML5:** Estruturação semântica da página de formulário e da área de resultados.
* **CSS3:** Estilização da interface, garantindo um visual limpo e responsivo.
* **JavaScript (ES6+):** 
  * Manipulação do DOM (captura de valores de *inputs* e injeção de *outputs*).
  * Criação de funções condicionais para alterar as taxas de consumo baseadas no tempo de duração.
  * Cálculos matemáticos em tempo real.

## 🛠️ Como rodar localmente
1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/victor-cordeiro/projeto-churrascometro.git](https://github.com/victor-cordeiro/projeto-churrascometro.git)
   ```
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão.

---
Feito com 💻 e muita 🥩 por [Victor Cordeiro](https://github.com/victor-cordeiro)
