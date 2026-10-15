Quero que você desenvolva uma landing page de portfólio pessoal com nível visual e técnico de um produto digital premium.

Este projeto faz parte de um trabalho acadêmico de Vibecoding, mas o resultado NÃO deve parecer um trabalho acadêmico, um template de portfólio ou uma página genérica produzida por IA.

A referência visual principal é uma landing page editorial de um artista musical que utiliza fundo preto, tipografia muito grande, composição assimétrica, pequenos elementos informativos, bastante espaço negativo, imagens tratadas como peças editoriais e uma experiência contínua durante o scroll.

Não quero que a página seja uma cópia dessa referência. Quero aproveitar sua linguagem visual e reinterpretá-la para um portfólio profissional de tecnologia.

O resultado final deve parecer algo que poderia ter sido desenvolvido por um creative developer ou por um estúdio digital de alto nível.

==================================================
STACK
==================================================

Utilize:

- Angular
- TypeScript
- componentes standalone
- Tailwind CSS para estrutura e utilitários
- CSS/SCSS customizado quando necessário para direção de arte, tipografia, pseudo-elements e animações
- GSAP
- GSAP ScrollTrigger
- Lenis para smooth scrolling
- Lucide apenas quando um ícone realmente acrescentar algo

Evite adicionar dependências sem necessidade.

Não utilize:

- Bootstrap
- Material UI
- Angular Material
- PrimeNG
- bibliotecas de componentes prontas
- templates de portfolio
- bibliotecas de UI que imponham uma estética própria

Se já existir um projeto no repositório, analise sua estrutura antes de começar e preserve o que fizer sentido.

Se for necessário criar a aplicação do zero, utilize uma configuração moderna e estável do Angular compatível com o ambiente disponível.

Não adicione backend, banco de dados, autenticação, NgRx ou outras camadas que não sejam necessárias para uma landing page.

==================================================
DIREÇÃO DE ARTE
==================================================

A direção visual deve misturar:

EDITORIAL
BRUTALIST
MINIMAL
INDUSTRIAL
EXPERIMENTAL
PREMIUM

O site deve parecer mais próximo de um editorial digital, portfolio de creative developer ou site de estúdio do que de um portfolio tradicional de programador.

Quero uma interface extremamente dark, baseada principalmente em preto e cinza, com off-white para textos e vermelho como cor de assinatura.

Utilize esta paleta como base:

--background: #050505;
--surface: #111111;
--text-primary: #F2F0EA;
--text-secondary: #858585;
--border: #242424;
--accent: #E10600;

O vermelho deve ser utilizado como tensão visual e elemento de identidade, NÃO como decoração constante.

Utilize vermelho principalmente em:

- pequenos números;
- labels;
- palavras específicas;
- estados de hover;
- linhas;
- indicadores;
- detalhes de interação;
- elementos pontuais de motion.

Não transforme toda a interface em vermelho.

Avoid neon cyberpunk aesthetics, excessive red glows, gaming UI patterns, glassmorphism and generic futuristic styling.

Também evite:

- gradients roxo/azul;
- neon;
- glow exagerado;
- blobs;
- partículas aleatórias;
- grids tecnológicos clichês;
- estética SaaS;
- cards arredondados em excesso;
- sombras exageradas;
- glassmorphism;
- interfaces gamer;
- terminal falso;
- animação de código;
- chuva de caracteres;
- elementos puramente decorativos sem função visual.

Quero algo sofisticado, agressivo e editorial, não cyberpunk.

==================================================
TIPOGRAFIA
==================================================

A tipografia deve ser uma das protagonistas da página.

Utilize uma combinação de:

- uma grotesca/display moderna para títulos;
- uma fonte mono ou técnica para metadata, labels, datas e pequenos elementos.

Boas direções:

Display:
Inter Tight
Archivo
Manrope
Space Grotesk

Mono:
IBM Plex Mono
JetBrains Mono
Geist Mono

Escolha uma combinação coerente e mantenha consistência durante toda a experiência.

Os títulos podem ocupar grande parte da viewport.

Explore:

- palavras gigantes;
- quebras inesperadas;
- textos parcialmente saindo da viewport;
- diferentes escalas tipográficas;
- contraste entre títulos enormes e metadata muito pequena;
- uppercase;
- tracking controlado;
- alinhamentos assimétricos.

Não transforme tudo em texto gigante. A força deve vir do contraste.

==================================================
PRINCÍPIO DE DESIGN
==================================================

Esta página NÃO deve parecer uma sequência de componentes independentes.

Evite a sensação:

NAVBAR
HERO
CARD
CARD
CARD
SKILLS
CONTACT
FOOTER

Quero que todas as seções pareçam fazer parte da mesma experiência visual.

O scroll deve conectar a narrativa.

Utilize grid editorial, sobreposição controlada, espaços vazios, mudanças de escala e composição assimétrica para evitar o aspecto tradicional de landing page.

Não tenha medo de deixar algumas áreas deliberadamente vazias.

Whitespace faz parte da direção de arte.

==================================================
ESTRUTURA DA EXPERIÊNCIA
==================================================

Crie uma landing page one-page com aproximadamente esta narrativa:

01 / INTRO
02 / PROFILE
03 / SELECTED WORK
04 / EXPERTISE
05 / EXPERIENCE
06 / ADDITIONAL / EVENTS
07 / CONTACT

Não trate esses nomes necessariamente como headings tradicionais.

Use-os como estrutura conceitual.

==================================================
INTRO / HERO
==================================================

A primeira viewport precisa causar impacto imediatamente.

Fundo praticamente preto.

Elementos pequenos no topo podem apresentar informações como:

PORTFOLIO / 2026
SÃO PAULO, BR
SERVICE NOW DEVELOPER

O nome do profissional deve ser o elemento dominante da composição.

Utilize um placeholder centralizado em um arquivo de dados para o nome caso ainda não haja informação real disponível.

Exemplo de direção, NÃO copie literalmente:

ISAAC
AMBROZEVICIUS

O nome pode ocupar grande parte da viewport e até ultrapassar parcialmente seus limites.

Quero uma composição editorial e assimétrica, não um Hero centralizado convencional.

Evite completamente textos como:

"Hello, I'm..."
"Passionate developer..."
"I create amazing digital experiences..."
"Turning ideas into reality..."

Não use copy clichê de portfolio.

Também não quero emoji no Hero.

Crie uma microcopy curta, objetiva e confiante.

==================================================
INTRO MOTION
==================================================

Ao carregar o site, crie um loader curto e elegante.

Nada maior que aproximadamente 1 a 2 segundos em condições normais.

Uma possível assinatura visual:

PORTFOLIO / 2026

com uma linha vermelha avançando horizontalmente.

A transição do loader deve revelar a página naturalmente.

Depois:

- metadata entra primeiro;
- nome aparece por máscara ou clip;
- elementos secundários entram com pequeno stagger;
- scroll passa a controlar a próxima transformação.

Não utilize animações aleatórias.

Toda animação deve parecer parte do mesmo sistema visual.

==================================================
STATEMENT
==================================================

Depois do Hero, crie uma seção baseada principalmente em typography motion.

Uma frase curta pode ocupar grande parte da tela.

Direção conceitual:

BUILDING
SYSTEMS THAT
PEOPLE USE.

Não precisa utilizar exatamente essa frase.

Uma palavra ou detalhe pode utilizar vermelho.

Explore GSAP + ScrollTrigger para:

- deslocamento horizontal;
- reveal por linha;
- clipping;
- mudança de posição;
- diferença de velocidade entre palavras;
- pinning curto da seção.

A animação deve estar diretamente relacionada ao progresso do scroll.

==================================================
PROFILE
==================================================

A apresentação pessoal deve parecer um editorial, não um "About Me" tradicional.

Utilize:

01
PROFILE

ou uma linguagem semelhante.

Combine:

- texto principal;
- metadata;
- informações profissionais;
- localização;
- área de atuação;
- pequenos indicadores.

Não invente informações pessoais.

Caso alguma informação não esteja disponível no projeto, utilize placeholders claramente concentrados em um arquivo de dados para facilitar a edição posterior.

Não espalhe conteúdo hardcoded pelos componentes.

==================================================
SELECTED WORK
==================================================

Esta deve ser uma das seções mais fortes da página.

NÃO utilize uma grade tradicional de cards.

Apresente projetos em uma grande lista editorial.

Direção:

01     PROJECT NAME                         2026
       CATEGORY / TECHNOLOGY

02     PROJECT NAME                         2026
       CATEGORY / TECHNOLOGY

03     PROJECT NAME                         2026
       CATEGORY / TECHNOLOGY

Cada linha deve possuir comportamento interativo.

Desktop:

- animação no hover;
- deslocamento controlado do título;
- mudança sutil de cor;
- indicador vermelho;
- preview visual do projeto;
- imagem ou composição seguindo levemente o cursor;
- cursor podendo assumir estado "VIEW";
- transições rápidas e precisas.

Se houver imagens reais em /public ou /assets, utilize-as.

Caso não existam, NÃO baixe imagens genéricas de banco de imagens.

Crie previews editoriais neutros utilizando composição, tipografia, CSS e placeholders facilmente substituíveis.

No mobile, não dependa de hover.

Os previews e informações importantes precisam continuar acessíveis.

==================================================
EXPERTISE
==================================================

Não utilize barras de progresso.

Não utilize estrelas.

Não utilize porcentagens.

Não diga:

JavaScript 95%
Angular 90%
ServiceNow 100%

Apresente conhecimento como informação editorial.

Exemplo conceitual:

PLATFORM
ServiceNow

DEVELOPMENT
JavaScript
TypeScript
Business Rules
Script Includes
REST APIs

PRODUCT
ITSM
CSM
App Engine

AUTOMATION
Flow Designer
Approvals
SLAs
Integrations

O conteúdo real deve ficar centralizado em um arquivo de dados.

Crie a seção visualmente como uma ficha técnica ou índice editorial.

==================================================
EXPERIENCE
==================================================

Experiências profissionais devem ser apresentadas como timeline editorial minimalista.

Use principalmente:

empresa;
função;
período;
área;
descrição extremamente curta.

Nada de grandes caixas independentes.

Explore linhas, números, alinhamentos, divisões horizontais e mudanças tipográficas.

==================================================
EVENTS / ADDITIONAL
==================================================

Crie uma seção menor destinada a eventos, certificações, estudos ou outros elementos profissionais relevantes.

Ela não precisa competir visualmente com Selected Work.

Pode utilizar uma composição mais compacta e técnica.

==================================================
CONTACT
==================================================

O final da página deve voltar a ganhar escala.

Pode utilizar uma headline grande como convite ao contato.

Evite:

"Let's create something amazing together."

Prefira linguagem simples e direta.

Email, LinkedIn, GitHub e demais links podem aparecer em formato editorial.

Crie hover states interessantes, mas discretos.

Finalize visualmente retomando elementos introduzidos no início, principalmente:

- tipografia;
- linha vermelha;
- pequenos códigos;
- ano;
- metadata.

A página deve dar a sensação de ciclo completo.

==================================================
MOTION SYSTEM
==================================================

Motion é parte importante do projeto.

Quero utilizar GSAP e ScrollTrigger de maneira relevante.

Implemente, quando fizer sentido:

- text reveal;
- clip-path reveal;
- parallax sutil;
- stagger;
- horizontal movement;
- pinned sections;
- scrub animations;
- typography responding to scroll;
- image reveal;
- hover interaction;
- cursor interaction;
- pequenas mudanças de escala;
- linhas crescendo;
- elementos atravessando a viewport.

Evite animação apenas por animação.

Não quero todos os elementos usando fade-in + translateY.

Crie variedade, mas preserve uma linguagem consistente.

A animação deve dar sensação de peso e precisão.

Evite animações excessivamente lentas ou "flutuantes".

Prefira movimentos relativamente rápidos, controlados e com easing bem definido.

==================================================
SMOOTH SCROLL
==================================================

Utilize Lenis integrado corretamente ao GSAP.

Certifique-se de que:

- ScrollTrigger continua sincronizado;
- navegação por anchor continua funcionando;
- scroll não fica preso;
- teclado continua funcional;
- touch funciona normalmente;
- mobile não sofre com scroll excessivamente artificial.

Smooth scrolling deve melhorar a experiência, não dificultá-la.

==================================================
CUSTOM CURSOR
==================================================

Pode existir um custom cursor discreto em dispositivos desktop com ponteiro preciso.

Ele pode mudar de estado sobre:

- projetos;
- links;
- elementos interativos.

Exemplo:

VIEW

Não utilize cursor customizado em touch devices.

O cursor também não deve prejudicar acessibilidade ou usabilidade.

==================================================
RESPONSIVIDADE
==================================================

O mobile NÃO deve ser simplesmente a versão desktop empilhada.

Crie uma composição própria para telas menores.

Adapte:

- escalas tipográficas;
- ordem visual;
- espaçamento;
- animações;
- previews;
- navegação;
- interações baseadas em hover;
- pinning.

Algumas animações desktop podem ser simplificadas ou removidas em mobile.

Garanta boa experiência em aproximadamente:

375px
768px
1024px
1440px
1920px

Evite overflow horizontal acidental.

Elementos deliberadamente fora da viewport são permitidos apenas quando fizerem parte da composição e não causarem scroll horizontal indesejado.

==================================================
ACESSIBILIDADE
==================================================

Implemente:

- HTML semântico;
- hierarquia correta de headings;
- aria-label onde necessário;
- foco de teclado visível;
- links acessíveis;
- contraste adequado;
- navegação por teclado;
- alt text nas imagens.

Implemente suporte a:

prefers-reduced-motion: reduce

Quando reduced motion estiver ativo:

- remova smooth scroll artificial;
- simplifique animações;
- elimine movimentos grandes;
- mantenha todo conteúdo acessível.

==================================================
ANGULAR
==================================================

Utilize uma arquitetura simples e profissional.

Prefira componentes standalone.

Separe a página em componentes apenas quando houver responsabilidade visual ou funcional clara.

Evite componentização artificial.

Uma estrutura possível:

src/app/
  components/
    header/
    hero/
    statement/
    profile/
    selected-work/
    expertise/
    experience/
    additional/
    contact/
    footer/

  data/
    portfolio.data.ts

  app.component.ts

Não precisa seguir exatamente isso caso uma organização melhor surja durante a implementação.

Centralize conteúdo editável.

Não coloque dados pessoais repetidos em vários componentes.

Use Angular Signals apenas onde existir estado real que justifique seu uso.

Não adicione complexidade apenas para demonstrar Angular.

==================================================
GSAP EM ANGULAR
==================================================

Integre GSAP corretamente ao lifecycle dos componentes.

Utilize refs ou queries controladas.

Faça cleanup das animações, timelines, observers e event listeners quando necessário.

Evite memory leaks.

Utilize gsap.context() quando fizer sentido.

Não espalhe querySelector global pela aplicação inteira.

==================================================
PERFORMANCE
==================================================

Apesar da quantidade de motion, a página precisa continuar fluida.

Priorize transform e opacity quando possível.

Evite animar propriedades caras continuamente.

Não crie dezenas de listeners de mouse independentes.

Utilize requestAnimationFrame quando apropriado.

Otimize imagens.

Evite Layout Shift.

Não carregue bibliotecas enormes sem necessidade.

Evite animações executando indefinidamente fora da viewport.

O objetivo é manter experiência suave mesmo em notebooks comuns.

==================================================
CONTEÚDO
==================================================

Não invente:

- empresas;
- cargos;
- certificações;
- anos de experiência;
- resultados;
- métricas;
- clientes;
- tecnologias dominadas.

Se alguma informação real não estiver disponível, utilize dados claramente editáveis ou TODOs em portfolio.data.ts.

Porém, não deixe a interface visualmente incompleta.

Utilize conteúdo temporário plausível apenas como estrutura editorial e identifique claramente o que precisa ser substituído.

Evite lorem ipsum.

Evite texto corporativo genérico.

==================================================
VISUAL DETAILS
==================================================

Inclua pequenos elementos que reforcem identidade, por exemplo:

- números de seção;
- códigos como 01 / 02 / 03;
- coordenadas visuais;
- anos;
- labels pequenos;
- linhas de 1px;
- bordas discretas;
- pequenas setas;
- metadata;
- indicadores de scroll;
- elementos vermelhos pontuais.

Não exagere.

Esses detalhes precisam parecer parte de um design system.

==================================================
NAVIGATION
==================================================

Crie uma navegação minimalista.

Ela pode permanecer discreta no topo.

Nada de navbar tradicional com grande logo + vários botões arredondados.

Utilize texto, pequenas divisões e uma composição simples.

Links podem apontar para:

Profile
Work
Expertise
Experience
Contact

O comportamento de scroll deve ser suave e confiável.

==================================================
MICROINTERACTIONS
==================================================

Crie microinterações cuidadosas para:

- links;
- projetos;
- navegação;
- cursor;
- botões;
- linhas;
- elementos clicáveis.

Evite o padrão genérico:

transform: scale(1.05)

em todos os elementos.

Explore underline animation, text shift, clipping, linha percorrendo o elemento, mudança de tracking ou pequenas transformações direcionais.

==================================================
QUALIDADE VISUAL
==================================================

Durante a implementação, revise constantemente se alguma área está parecendo:

- template;
- dashboard;
- site SaaS;
- portfolio genérico;
- landing page criada por IA;
- página baseada em cards;
- site gamer;
- site cyberpunk.

Se isso acontecer, reavalie composição, tipografia e espaçamento.

O design deve continuar editorial e autoral.

==================================================
QA
==================================================

Depois de implementar, faça uma rodada completa de QA.

Teste:

- carregamento inicial;
- loader;
- scroll;
- Lenis;
- ScrollTrigger;
- todas as animações;
- hover;
- cursor;
- links;
- anchors;
- navegação;
- resize;
- orientation change;
- mobile;
- tablet;
- desktop;
- teclado;
- prefers-reduced-motion;
- overflow horizontal;
- console errors;
- warnings relevantes.

Abra e teste a aplicação no navegador.

Não considere o projeto concluído apenas porque compila.

Corrija qualquer comportamento visual ou funcional claramente quebrado antes de finalizar.

==================================================
ORGANIZAÇÃO FINAL
==================================================

Ao terminar:

1. garanta que o projeto execute normalmente com os comandos padrão;
2. remova código morto;
3. remova imports não utilizados;
4. remova console.logs temporários;
5. organize estilos;
6. mantenha o conteúdo editável centralizado;
7. confirme que não existem erros no console;
8. confirme responsividade;
9. confirme que as animações não quebram após resize;
10. confirme que o site continua utilizável sem animações.

Também atualize o README com:

- nome do projeto;
- breve descrição;
- stack utilizada;
- como executar localmente;
- principais decisões técnicas.

Não escreva no README um texto longo e artificial.
Seja direto.

==================================================
OBJETIVO FINAL
==================================================

Não estou procurando apenas uma landing page funcional.

Estou procurando uma experiência digital com identidade.

Quero que alguém abra o site e perceba imediatamente que houve direção de arte, intenção tipográfica e cuidado com motion.

O resultado deve ser:

experimental sem ser confuso;
minimalista sem ser vazio;
agressivo sem ser gamer;
animado sem ser cansativo;
profissional sem parecer corporativo;
técnico sem usar clichês visuais de programação.

O ponto de referência é um editorial digital premium transformado em portfolio de tecnologia.

Antes de implementar, analise o repositório completo.

Depois, desenvolva a experiência inteira, execute a aplicação, teste o resultado e faça as correções técnicas necessárias.

Não simplifique a direção visual apenas para terminar mais rápido.