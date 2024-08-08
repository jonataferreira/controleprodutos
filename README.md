# EM CONSTRUÇÃO - Projeto Full-Stack: Gerenciamento de Produtos

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Este projeto demonstra uma aplicação full-stack usando **ASP.NET Core** no back-end, **React** no front-end, e **SQL Server** como banco de dados. Ele foi desenvolvido para fornecer uma base sólida para habilidades de desenvolvimento web full-stack, focando em práticas modernas e boas práticas de codificação.

## Status do Projeto

**Status**: Em Desenvolvimento

Este projeto ainda está em fase de desenvolvimento. Algumas funcionalidades podem estar faltando e o código pode não estar totalmente estável. Contribuições e feedback são bem-vindos!


## Visão Geral

A aplicação é uma plataforma de gerenciamento de produtos onde usuários podem visualizar, adicionar, atualizar e deletar produtos. A API RESTful é construída com ASP.NET Core e utiliza Entity Framework Core para interagir com o banco de dados SQL Server. O front-end é desenvolvido em React e se comunica com a API usando Axios.

## Estrutura do Projeto

### Backend (ASP.NET Core)

- **Controllers/**: Contém os controladores que gerenciam as rotas da API.
- **Models/**: Define os modelos de dados e o contexto do banco de dados.
- **Services/**: Inclui a lógica de negócios e serviços que interagem com o banco de dados.
- **Migrations/**: Scripts de migração gerados pelo Entity Framework Core.
- **appsettings.json**: Arquivo de configuração contendo a string de conexão com o banco de dados.

### Frontend (React)

- **src/**: Diretório principal do código fonte React.
  - **components/**: Componentes React reutilizáveis como listas e formulários de produtos.
  - **services/**: Funções para realizar requisições HTTP para a API.
  - **hooks/**: Hooks personalizados para gerenciamento de estado e efeitos colaterais.
  - **pages/**: Componentes que representam as diferentes páginas ou views da aplicação.
  - **styles/**: Arquivos de estilo, contendo CSS e/ou SCSS.
- **public/**: Arquivos estáticos e o documento HTML principal.

## Tecnologias Utilizadas

- **Back-End**: 
  - ASP.NET Core 7
  - Entity Framework Core
  - SQL Server
- **Front-End**: 
  - React
  - Axios
  - HTML5, CSS3
- **Outros**:
  - Visual Studio Code / Visual Studio
  - Node.js e npm
  - Git e GitHub

## Como Executar o Projeto

### Pré-requisitos

- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Node.js](https://nodejs.org/) e npm

### Configuração do Back-End

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio-backend.git
   cd nome-do-repositorio-backend

2. **Restaurar Dependências:**

   ```bash
   dotnet restore

3. **Configurar a String de Conexão:**

   No arquivo appsettings.json, configure a      string de conexão para o seu banco de dados SQL Server.

4. **Aplicar Migrações e Criar o Banco de Dados:**

   ```bash
   dotnet ef database update

4. **Executar o Servidor:**

   ```bash
   dotnet run

A API estará disponível em http://localhost:5000.

### Configuração do Front-End

1. **Clonar o Repositório:**

     ```bash
   git clone https://github.com/seu-usuario/ nome-do-repositorio-frontend.git
    cd nome-do-repositorio-frontend

2. **Instalar Dependências:**
    
    ```bash
    npm install

3. **Executar o Servidor de Desenvolvimento:**
    ```bash
    npm start

A aplicação estará disponível em http://localhost:3000.


## Funcionalidades

- **Listagem de Produtos**: Os usuários podem visualizar uma lista de produtos cadastrados.
- **Adicionar Produto**: Os usuários podem adicionar novos produtos ao sistema.
- **Atualizar Produto**: Os usuários podem editar as informações de um produto existente.
- **Excluir Produto**: Os usuários podem remover produtos do sistema.

## Arquitetura

Este projeto segue uma arquitetura limpa e modular, separando responsabilidades entre camadas:

- **Controller Layer**: Recebe as requisições HTTP e chama os serviços apropriados.
- **Service Layer**: Contém a lógica de negócios, manipulando e processando dados.
- **Data Layer**: Utiliza o Entity Framework para interagir com o banco de dados.

No front-end, os componentes React são organizados para promover a reutilização e o encapsulamento, facilitando a manutenção e expansão do projeto.

## Melhores Práticas Implementadas

- **Separação de Responsabilidades**: Cada camada tem uma responsabilidade clara e bem definida.
- **Reutilização de Componentes**: No React, os componentes são pequenos, focados em uma única responsabilidade.
- **Uso de Hooks Customizados**: Hooks personalizados encapsulam lógica de estado complexa.
- **Boas Práticas de Segurança**: Utilização de HTTPS e prevenção de CORS no back-end.
- **Versionamento e Controle de Código**: Uso do Git e GitHub para versionamento de código e colaboração.

## Próximos Passos

- **Autenticação e Autorização**: Implementar autenticação com JWT para proteger endpoints sensíveis.
- **Validação e Tratamento de Erros**: Melhorar a validação de dados no back-end e tratamento de erros no front-end.
- **Testes Automatizados**: Adicionar testes unitários e de integração para garantir a estabilidade do código.

## Contribuindo

Se você deseja contribuir, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Crie um Pull Request.

## Contato

Desenvolvido por **Jonata Ferreira** - [https://www.linkedin.com/in/ferreira-jonata/](https://www.linkedin.com/in/ferreira-jonata/)

Se tiver alguma dúvida, sinta-se à vontade para entrar em contato!

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).






