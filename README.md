# 🎬 Favorites Movies

<div align="center">
  <img src="/favorites-movies/assets/images/screenshot.png" alt="Screenshot do Projeto" width="100%"/>
</div>

Uma aplicação para gerenciar e organizar seus filmes favoritos, permitindo que você mantenha uma lista personalizada dos filmes que mais gosta.<br>
<br>[Link do Vercel](https://favorites-movies-fzvaxgzeq-marianaeslans-projects.vercel.app/)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API](#api)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

## 📖 Sobre o Projeto

O **Favorites Movies** é uma aplicação web que permite aos usuários criar e gerenciar uma lista personalizada de filmes favoritos. Com uma interface intuitiva e moderna, você pode adicionar, visualizar e remover filmes da sua coleção pessoal.

### 🎯 Objetivos

- Proporcionar uma experiência simples para catalogar filmes favoritos
- Interface responsiva e amigável ao usuário

## ⚡ Funcionalidades

- ✅ Adicionar filmes à lista de favoritos
- ✅ Visualizar detalhes dos filmes (título, ano)
- ✅ Remover filmes da lista
- ✅ Pesquisar filmes na coleção
- ✅ Interface responsiva para dispositivos móveis(em andamento)
- ✅ Armazenamento local dos dados

## 🛠 Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</div>

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- React


### Outras Ferramentas
- Git & GitHub
- Vite

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Git

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/marianaeslan/favoritesMovies.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd favoritesMovies
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Execute o projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Acesse a aplicação**
   - Abra seu navegador e vá para `http://localhost:3000`

## 🚀 Como Usar

### Adicionando um Filme

1. Clique no coração no card do filme 
2. Verifique seu filme favoritado na aba "Favorites"

### Removendo um Filme

1. Clique no coração novamente para desfavoritar
   
## 📁 Estrutura do Projeto

```
favoritesMovies/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── contexts/           # Contexts APIs
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # API set up
│   ├── styles/             # Arquivos de estilo
├── public/                 # Arquivos públicos
├── package.json
└── README.md
```

## 🔌 API

### Endpoints Principais

```javascript
// Buscar todos os filmes favoritos
GET /api/movies

// Adicionar novo filme
POST /api/movies

// Buscar filme específico
GET /api/movies/:id

// Atualizar filme
PUT /api/movies/:id

// Remover filme
DELETE /api/movies/:id
```

### Exemplo de Objeto Filme

```json
{
  "id": 1,
  "title": "O Poderoso Chefão",
  "year": 1972,
  "genre": "Drama",
  "director": "Francis Ford Coppola",
  "synopsis": "Uma saga épica sobre uma família mafiosa...",
  "rating": 5,
  "poster": "url_da_imagem",
  "dateAdded": "2024-01-15"
}
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. **Abra** um Pull Request

### 📝 Diretrizes para Contribuição

- Mantenha o código limpo e bem comentado
- Siga os padrões de codificação estabelecidos
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Mariana Eslan**
- GitHub: [@marianaeslan](https://github.com/marianaeslan)
- LinkedIn: [Mariana Eslan](https://linkedin.com/in/marianaeslan)
- Email: mariana.eslan@gmail.com

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ por Mariana Eslan</p>
</div>
