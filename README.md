# NodeIA - Chat GPT Integration Project

Um projeto full-stack que integra a API do ChatGPT com uma aplicação web para enviar prompts e receber respostas baseadas em IA.

## 📋 Descrição do Projeto

NodeIA é uma aplicação composta por:

- **Backend (Server)**: Uma API Express.js que comunica com a API do OpenAI ChatGPT
- **Frontend (Web)**: Uma aplicação React que fornece uma interface amigável para interagir com o ChatGPT

O projeto permite que usuários enviem prompts de texto e recebam respostas inteligentes do ChatGPT diretamente através da web.

## 🏗️ Estrutura do Projeto

```
NodeIA/
├── server/              # Backend Node.js com Express
│   ├── src/
│   │   ├── app.js      # Configuração da aplicação Express
│   │   ├── server.js   # Inicialização do servidor
│   │   ├── config/
│   │   │   └── openai.js          # Configuração da API OpenAI
│   │   ├── controllers/
│   │   │   └── prompt-controller.js # Lógica de controle de prompts
│   │   ├── models/
│   │   │   └── input-prompt.js    # Modelo de dados para prompts
│   │   └── routes/
│   │       └── routes.js          # Definição de rotas da API
│   └── package.json
│
└── web/                 # Frontend React
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── api/
    │   │   └── api.js              # Cliente HTTP para comunicação com backend
    │   ├── assets/
    │   │   └── avatar.js
    │   ├── components/
    │   │   ├── ChatMessage/        # Componente de mensagem de chat
    │   │   └── SideMenu/           # Menu lateral da aplicação
    │   └── styles/
    │       ├── App.css
    │       ├── index.css
    │       └── reset.css
    └── package.json
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express.js**: Framework web para criar a API
- **OpenAI**: Biblioteca oficial para comunicação com a API do ChatGPT
- **CORS**: Middleware para permitir requisições cross-origin
- **dotenv**: Gerenciamento de variáveis de ambiente

### Frontend
- **React**: Biblioteca para construção da interface
- **Axios**: Cliente HTTP para requisições da API
- **React Scripts**: Ferramentas de build e desenvolvimento

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14+)
- npm ou yarn
- Chave de API do OpenAI

### Configuração do Backend

1. Navegue até a pasta do servidor:
```bash
cd server
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na pasta `server` com sua chave de API:
```
OPENAI_API_KEY=sua_chave_de_api_aqui
```

4. Inicie o servidor:
```bash
npm start
```

O servidor rodará em `http://localhost:3000` (ou a porta configurada).

### Configuração do Frontend

1. Navegue até a pasta web:
```bash
cd web
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação React:
```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000` no seu navegador.

## 🚀 Como Usar

1. Acesse a aplicação web no seu navegador
2. Digite seu prompt na interface de chat
3. Envie o prompt para a API
4. A resposta do ChatGPT será exibida na tela

## ⚠️ Limitação Importante

**NOTA**: Este projeto **não pode ser testado 100% sem custos**, pois a API do ChatGPT do OpenAI é **paga desde 2024**. 

Para testar a aplicação, você precisará:
- Criar uma conta no [OpenAI](https://platform.openai.com)
- Adicionar um método de pagamento
- Gerar uma chave de API
- Configurar limites de uso para controlar gastos

Cada requisição à API do ChatGPT terá um custo associado dependendo do modelo utilizado e da quantidade de tokens processados.

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` na raiz da pasta `server` com:

```
OPENAI_API_KEY=sua_chave_de_api
```

## 🔧 Scripts Disponíveis

### Backend
- `npm start`: Inicia o servidor com watch mode (reinicia automaticamente ao detectar mudanças)

### Frontend
- `npm start`: Inicia o servidor de desenvolvimento React
- `npm build`: Cria uma build otimizada para produção
- `npm test`: Executa testes unitários

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

Desenvolvido como projeto de integração com a API do OpenAI.

---

**Última atualização**: Novembro de 2025
