# Isaac Ambrozevicius — ServiceNow Developer

Portfólio profissional em inglês, com direção editorial e motion ligado ao scroll. Conteúdo fornecido em `dados.md`: quatro projetos corporativos, experiência na Artycs, formação na FIAP e seis certificações.

## Executar

Node.js 24.15+ (ambiente validado: 24.16) e npm.

```sh
npm ci
npm start
```

Abra http://127.0.0.1:4200. Para produção: `npm run build`; arquivos em `dist/portfolio/browser`.

## Stack e decisões

- Angular 22, TypeScript, componentes standalone e detecção de mudanças sem Zone.js.
- Tailwind CSS 4 para utilitários; CSS autoral para composição, responsividade e previews.
- GSAP + ScrollTrigger para máscaras, tipografia e progresso de leitura. Lenis sincronizado pelo ticker do GSAP, apenas em desktop com ponteiro preciso.
- `gsap.matchMedia` refaz e limpa o motion em mudanças de breakpoint e preferência. Movimento reduzido desativa animações e smooth scroll.
- Fontes Inter Tight e IBM Plex Mono hospedadas localmente. Sem fotos genéricas, backend ou UI kits.
- Projetos em componente próprio com `dialog` nativo, suporte a Escape e restauração de foco. Previews sempre visíveis no celular.

## Personalizar

Edite `src/app/data/portfolio.data.ts` para atualizar textos, projetos, competências e trajetória. Os projetos possuem contexto, abordagem e resultado; as composições visuais são ilustrativas e não usam capturas de ambientes corporativos.

Pendências: email, URLs de LinkedIn/GitHub, currículo PDF e links individuais das credenciais. Contatos sem URL permanecem como texto. Para habilitar um contato, atualize `value` e `url` (email usa `mailto:`). Para o currículo, coloque o arquivo em `public/assets/ISAAC-AMBROZEVICIUS_CV.pdf` e preencha a URL correspondente. CIS-CSM e CIS-Discovery aparecem como estudos em andamento, separados das certificações obtidas.

## Verificar

Com `npm start` rodando em outro terminal:

```sh
npx playwright install chromium
npm test
```

O QA usa Chromium e verifica cinco larguras (375–1920 px), anchors, modal pelo teclado, retorno de foco, hover, touch, resize, console e movimento reduzido. Capturas e resultados ficam em `artifacts/` (ignorado pelo Git).
