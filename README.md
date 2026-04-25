<div align="center">

<img src="https://img.shields.io/badge/PALHETA-BARBEARIA-1a1a1a?style=for-the-badge&logoColor=FDE047" alt="Palheta Barbearia" />

#  PALHETA BARBEARIA
### Sistema de Agendamento Online

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

**Plataforma web fullstack para agendamento de serviços de barbearia.**  
O cliente agenda seu horário online e o barbeiro gerencia todos os agendamentos pelo painel administrativo.

##  Acesso para Demo

| Perfil | E-mail | Senha |
|--------|--------|-------|
|  Barbeiro | barbeiro@palheta.com | sua_senha |

> Conta de demonstração. Por favor, não altere os agendamentos existentes.
[ Ver Demo ao Vivo](https://agendamento-seven.vercel.app)

</div>

---

##  Capturas de Tela

###  Landing Page
![Landing Page](assets/Landingpage.png)

###  Agendamento — Área do Cliente
![Agendamento](assets/Paginaprincipal.png)

###  Login do Barbeiro
![Login](assets/LoginBarbeiro.png)

###  Painel Administrativo
![Admin](assets/Agendamentos.png)

###  Versão Mobile
<div align="center">
  <img src="assets/barbeariamobile.jpeg" width="300" alt="Mobile" />
</div>

---

##  Sobre o Projeto

O **Palheta Barbearia** é um sistema web de agendamento desenvolvido para facilitar a gestão de horários entre clientes e barbeiros.

O cliente acessa o site, escolhe o serviço, a data e o horário e confirma o agendamento — tudo sem precisar de cadastro. O barbeiro faz login no painel administrativo e visualiza todos os agendamentos com status em tempo real.

---

##  Funcionalidades

###  Cliente
-  Agendar horário com nome, serviço, data e hora
-  Sem necessidade de cadastro ou login
-  Interface responsiva para mobile e desktop

###  Barbeiro (Administrador)
-  Login seguro no painel administrativo
-  Visualização de todos os agendamentos em tempo real
-  Editar agendamentos existentes
-  Cancelar/deletar agendamentos
-  Status automático por horário:

| Status | Condição |
|--------|----------|
| ✅ **Confirmado** | Data futura — agendamento válido |
| ⏳ **Pendente** | Horário já passou mas menos de 24h |
| ❌ **Cancelado** | Mais de 24h após o horário agendado |

---

##  Arquitetura

```
PALHETA BARBEARIA
├── Frontend (React + Vite)  →  Vercel
│   ├── LandingPage      — Página inicial com portfólio
│   ├── FormPanel        — Formulário de agendamento do cliente
│   ├── BarbeiroLogin    — Autenticação do barbeiro
│   └── AdminDashboard   — Painel com lista de agendamentos
│
└── Backend (Node.js + Express)  →  Render
    └── /agendamento
        ├── GET    →  Listar agendamentos
        ├── POST   →  Criar agendamento
        ├── PUT    →  Editar agendamento
        └── DELETE →  Deletar agendamento
```

---

##  Diagrama UML

### Fluxo do Sistema

```mermaid
sequenceDiagram
    actor C as Cliente
    actor B as Barbeiro
    participant F as Frontend
    participant API as Backend (Render)
    participant DB as Banco de Dados

    C->>F: Acessa o site
    C->>F: Preenche nome, serviço, data e hora
    F->>API: POST /agendamento
    API->>DB: Salva agendamento
    DB-->>API: Confirmação
    API-->>F: 201 Created
    F-->>C: "Agendamento realizado com sucesso!"

    B->>F: Faz login no painel
    F->>API: GET /agendamento
    API->>DB: Busca agendamentos
    DB-->>API: Lista de agendamentos
    API-->>F: Agendamentos com status calculado
    F-->>B: Exibe tabela com status em tempo real
```

### Status dos Agendamentos

```mermaid
stateDiagram-v2
    [*] --> Confirmado : Data futura
    Confirmado --> Pendente : Horário passou (menos de 24h)
    Pendente --> Cancelado : Mais de 24h após o horário
```

---

##  Stack Tecnológica

| Camada | Tecnologia | Função |
|--------|-----------|--------|
| Frontend | React + Vite | Interface do usuário |
| Estilização | CSS Modules + Custom CSS | Design premium dark theme |
| Backend | Node.js + Express | API REST de agendamentos |
| Deploy Frontend | Vercel | Hospedagem do frontend |
| Deploy Backend | Render | Hospedagem do servidor |

---

##  Como Rodar Localmente

### Pré-requisitos
- Node.js 18+

### Frontend

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/palheta-barbearia.git

# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

### Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode o servidor
npm start
```

---

##  Estrutura de Pastas

```
palheta-barbearia/
├── frontend/
│   └── src/
│       ├── components/     # Navbar, Hero, FormPanel, AdminDashboard...
│       ├── styles/         # CSS global e módulos
│       └── constants/      # Constantes do formulário
│
└── backend/
    └── src/
        ├── routes/         # agendamento.java
        ├── controllers/    # agendamentoController.java
        └── models/         # Agendamento.java
```

---

##  Autor

<div align="center">

**Pedro Palheta**  
Desenvolvedor Full Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-palheta-b81017321/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Palhetaspedro)

</div>

---

<div align="center">
  <sub>Desenvolvido com 🖤 por Pedro Palheta</sub>
</div>
