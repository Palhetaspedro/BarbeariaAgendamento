# 🪒 Palheta Barbearia — Sistema de Agendamento

## Estrutura do Projeto

```
palheta-barbearia/
│
├── tailwind.config.js
│
└── src/
    ├── App.jsx                        # Raiz: estado + composição
    │
    ├── constants/
    │   └── index.js                   # Cores, serviços, dados iniciais
    │
    ├── utils/
    │   └── formatDate.js              # Formatação de datas
    │
    ├── styles/
    │   └── global.css                 # Todo o CSS centralizado
    │
    └── components/
        ├── Navbar.jsx                 # Barra de navegação + logo PB
        ├── Hero.jsx                   # Faixa hero com título
        ├── FormPanel.jsx              # Formulário de agendamento
        ├── TablePanel.jsx             # Tabela de agendamentos
        ├── DeleteModal.jsx            # Modal de confirmação de exclusão
        ├── Toast.jsx                  # Notificações de sucesso/erro
        └── Footer.jsx                 # Rodapé com contatos e redes sociais
```

## Instalação

```bash
# 1. Criar projeto React
npx create-react-app palheta-barbearia
cd palheta-barbearia

# 2. Instalar dependências
npm install lucide-react

# 3. Instalar Tailwind (opcional — projeto usa CSS global)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Substituir arquivos com os do projeto
# Copie todos os arquivos de src/ e o tailwind.config.js

# 5. Rodar
npm start
```

## Conectar à API Java (futuro)

No `App.jsx`, substitua o `useState(INITIAL_DATA)` por chamadas fetch:

```js
// Exemplo: buscar agendamentos
useEffect(() => {
  fetch("http://localhost:8080/api/agendamentos")
    .then((res) => res.json())
    .then((data) => setAppointments(data));
}, []);

// Exemplo: criar agendamento
const handleSubmit = async () => {
  await fetch("http://localhost:8080/api/agendamentos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  // ...
};
```

## Paleta de Cores

| Token        | Hex       | Uso                        |
|-------------|-----------|----------------------------|
| `bege`      | `#F5F5DC` | Fundo principal            |
| `preto`     | `#121212` | Navbar, hero, elementos    |
| `amarelo`   | `#FDE047` | Destaques, bordas, status  |
| `cinza`     | `#6B6B6B` | Textos secundários         |
| `begeEscuro`| `#E8E8C8` | Bordas, separadores        |
