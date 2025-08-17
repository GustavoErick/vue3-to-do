# 📝 Lista de Tarefas com Vue.js

## 📚 Sobre o Projeto

Este é um projeto de uma lista de tarefas (To-Do List) desenvolvido como uma forma de estudo e aprimoramento em tecnologias web modernas. O objetivo principal foi aplicar e aprofundar os conhecimentos em **Vue 3**, **Vuetify** e **Pinia**, construindo uma aplicação funcional, reativa e com um design simples.

## ✨ Funcionalidades Principais

- **Adicionar Tarefas**: Adicione novas tarefas à sua lista de forma rápida e intuitiva.
- **Editar Tarefas**: Modifique o título e a descrição de tarefas já existentes.
- **Excluir Tarefas**: Remova tarefas que não são mais necessárias.
- **Marcar como Concluída**: Acompanhe seu progresso marcando as tarefas como concluídas.
- **Notificações**: Receba feedbacks visuais ao criar, editar ou excluir tarefas.
- **Persistência de Dados**: Suas tarefas são salvas no *localStorage* do navegador, para que você não as perca ao recarregar a página.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e ferramentas:

- **Vue 3**: A versão mais recente do framework progressivo para a construção de interfaces de usuário.
- **Vuetify 3**: Uma biblioteca de componentes de interface de usuário para Vue, que oferece um design Material Design diverso e responsivo.
- **Pinia**: A solução de gerenciamento de estado recomendada para Vue 3, conhecida por sua simplicidade e poder.
- **Vue Router**: Para o gerenciamento de rotas da aplicação, permitindo a navegação entre as páginas "Home" e "Sobre".
- **Vite**: Uma ferramenta de build que oferece uma experiência de desenvolvimento extremamente rápida.

## 🚀 Como Executar o Projeto

Para executar este projeto em seu ambiente local, siga os passos abaixo:

**1. Clone o repositório:**

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio
```
**2. Instale as depedências:**

```bash
# com npm
npm install

# com yarn 
yarn install
```
**3. Inicie o servidor de desenvolvimento:**

O servidor de desenvolvimento irá iniciar a aplicação com hot-reload, tornando-a acessível em http://localhost:3000.

```bash
# com npm
npm run dev

# com yarn 
npm dev
```
## 📂 Estrutura de Arquivos

A estrutura de arquivos do projeto é organizada da seguinte forma:

```bash
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/
│   │   ├── dialogs/
│   │   ├── shared/
│   │   ├── ListTasks.vue
│   │   └── ToDoList.vue
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   ├── router/
│   ├── stores/
│   │   ├── alert.js
│   │   └── task.js
│   ├── styles/
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html
├── package.json
└── vite.config.mjs
```