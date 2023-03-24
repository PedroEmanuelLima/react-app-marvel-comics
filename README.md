## 🧾 Descrição

Projeto de uma aplicação web que implementa uma page de listagem de HQs da Marvel. Possui uma navbar com opção de navegação para o inicio através da logo, no corpo uma listagem de quadrinhos com suas informações, opção de compra, na pa´gina de compra há um formulário para adicionar informações do comprador, inclusive um mapa para selecionar local de entrega.

Além disso, o projeto é feito em JavaScript com o framework ReactJS.Além da utilização da biblioteca do Google-Maps e API do Google, e API da marvel.

<h1>

## 🔌 Tecnologias utilizadas

- **JavaScript**
- **React JS**
- **CSS**

#### DEPENDENCIAS PARA:
##### Gerenciar rotas: react-router-dom
>##### `npm install react-router-dom`
##### Realizar chamada para API: axios
>##### `npm install --save axios`
##### Criptografar hash md5 para chamar API: md5
>##### `npm install --save md5`
##### Implementar o layout: Bootstrap utilizando o reactstrap 
>##### `npm install --save bootstrap`
>##### `npm install --save reactstrap`
##### Trabalhar com Google Maps na aplicação:
> ##### `npm install --save react-google-maps`
> ##### `npm install --save react-google-autocomplete`
> ##### `npm install --save react-geocodea`

## 🏳️ Como executar?

#### **Passo 1**
Faça download do repositório.
<br/>
>``git clone https://github.com/PedroEmanuelLima/react-app-marvel-comics.git``

#### **Passo 2**
Abra o arquivo em um navegador e teste as funções.
<br/>
>``cd react-app-marvel-comics``

#### **Passo 3**
Instale as dependências.
<br/>
>``npm install --force``

#### **Passo 4**
Criar arquivo .env na raiz com:
> REACT_APP_PUBLIC_KEY=<'chave pública da API'>
<br/>
REACT_APP_PRIVATE_KEY=<'chave privada da API'>
<br />
REACT_APP_GOOGLE_KEY=<'chave da API do Google'>

###### _Para o fucionamento correto do Mapa é necessário ativar as bibliotecas Places API, Maps JavaScript API e Geocoding API no Google Cloud Platform_
#### **Passo 5**
Execute.
<br>
>``npm start``

## ✅ Resultado (Preview)

### Tela 1:
Listagem de quadrinhos em cards, com opção de mais, onde exibe um modal com mais informações e opção de comprar:
Web | Mobile
:--------- | :------:
<img src="Gifs/mc1.gif"> | <img style="width: 60%;" src="Gifs/marvel-c.gif">

<br>

### Tela 2:
Formulário de compra, preencher com confirmação de dados, inclusive endereço com auxilio de uma mapa:

<div style="display:flex; justify-content: center;">
    <img style="width: 80%;" src="Gifs/mc2.gif">
</div>
<br>

## 💻 Autor: Pedro Emanuel

Portfólio:
- [Github](https://github.com/PedroEmanuelLima)

Contato:
- [Linkedin](https://www.linkedin.com/in/pedro-almeida-b39a9019b/)
