💈 Palheta Barbearia - Sistema de Gestão de Agendamentos Status do Projeto: 🚀 Deploy realizado com sucesso

Link da Aplicação: https://barbearia-agendamento-seven.vercel.app/

Bem-vindo ao repositório da Palheta Barbearia, uma aplicação Full Stack moderna desenvolvida para transformar a experiência de agendamento de serviços de barbearia. Este projeto nasceu da necessidade de conectar clientes a profissionais de forma ágil, elegante e totalmente automatizada.

🎯 O Sistema: Uma Experiência Humanizada Diferente de sistemas de agendamento rígidos, a Palheta Barbearia foi pensada para ser intuitiva:

Para o Cliente: Um formulário limpo, com validações em tempo real que impedem agendamentos no passado, garantindo que o usuário nunca erre a reserva.

Para o Barbeiro: Um Dashboard administrativo que elimina cliques desnecessários. O sistema possui uma Lógica de Tempo Real onde o status do agendamento muda sozinho (Confirmado 🟢, Pendente 🟡 ou Cancelado 🔴) baseando-se no relógio do servidor.

🛠️ Desafios Técnicos e Soluções (A Jornada do Dev) Este projeto demonstra maturidade técnica ao enfrentar e resolver desafios reais de infraestrutura e código:

Deploy Inteligente no Render: O backend utiliza uma estratégia de economia de recursos.

O "Pulo do Gato": Como o servidor gratuito entra em modo de hibernação, o sistema foi otimizado para lidar com o tempo de "acordar" (spin-up) de aproximadamente 50 segundos. Implementamos feedbacks visuais no Front-end para que o usuário compreenda o tempo de processamento inicial.

Identidade Visual Dinâmica: Criamos um componente React para gerar um Favicon Dinâmico via SVG Base64. A logo (uma tesoura dourada em fundo bege) é injetada via código, garantindo nitidez máxima e eliminando erros de carregamento de ativos estáticos.

Refatoração Vite & Vercel: Toda a estrutura de build foi ajustada para compatibilidade com o ecossistema Vite, resolvendo conflitos de Case Sensitivity e variáveis de ambiente durante o deploy.

🏗️ Arquitetura do Projeto Frontend React.js & Vite: Interface de alta performance e componentizada.

Lucide React: Ícones minimalistas para uma UI moderna.

Axios: Comunicação assíncrona com tratamento rigoroso de erros (400, 404, 500).

Backend Node.js & Express: API robusta e escalável.

PostgreSQL / Supabase: Banco de dados relacional para persistência segura dos dados.

Lógica de Negócio: Validação rigorosa de datas futuras e automação de status por horário.

🚀 Como Iniciar o Projeto

Servidor (Backend) O servidor está hospedado no Render. Ao realizar a primeira requisição após um período de inatividade:
O servidor recebe o sinal e inicia o processo de "wake-up".

Leva cerca de 50s para carregar o ambiente.

Uma vez ativo, todas as respostas subsequentes são instantâneas.

Rodando Localmente Bash
Clone o repositório
git clone https://github.com/seu-usuario/palheta-barbearia

Instale as dependências
npm install

Inicie o modo de desenvolvimento
npm run dev 👨‍💻 O que este projeto diz sobre mim? Este projeto reflete minha capacidade de resolver problemas complexos de ponta a ponta. Desde a configuração de portas e variáveis de ambiente no deploy, até o ajuste fino de UX/UI com SVGs complexos. Eu não apenas escrevo código; eu construo soluções que funcionam no mundo real, respeitando as limitações de infraestrutura e focando nas necessidades reais do usuário final.

📞 Contato e Suporte Para dúvidas, sugestões ou oportunidades, entre em contato:

Desenvolvedor: Palhetaspedro

E-mail: Ppalhetapedro@gmail.com

LinkedIn: https://www.linkedin.com/in/pedro-palheta-b81017321/

GitHub: https://github.com/Palhetaspedro

📄 Licença e Direitos Autorais © Palhetaspedro. Todos os direitos reservados. Este projeto foi desenvolvido para fins de portfólio e gestão comercial da Palheta Barbearia.