# Framework CSS

## Bootstrap
Constituem bibliotecas que visam permitir a codificação do CSS de modo mais fácil e compatível com padrões de estilos, agregando uma série de opções já prontas para projetar uma página web, como se fosse um esqueleto, reduzindo o tempo gasto com o desenvolvimento.

### Quando utilizar?
- Prototipação rápida em HTML;
- Sites de larga escala e com estruturas similares;
- Sites construídos através de plataformas de CMS;
- Projetos que tenham prazos curtos;
- Projetos realizados em equipe onde há diversas pessoas trabalhando no mesmo CSS, podendo ter um conjunto consistente de padrões de codificação.

### Vantagens:
- Arquivos modularizados;
- Compatibilidade cross-browser (na maioria dos casos);
- Flexibilidade de estilos que podem ser combinadas de diversas formas;
- Geralmente já possuem uma documentação;
- Padronização de código entre a equipe de desenvolvimento;
- Você pode melhorar suas habilidades estudando o framework;
- Redução de tempo;
- Reduz futuros esforços de manutenção.

### Desvantagens: 
- Muitos frameworks apresentam classes pouco semânticas;
- Nem sempre o código é bem organizado para adaptar o framework;
- O framework pode conter códigos irrelevantes que nunca serão
utilizados no projeto e serão carregados sem necessidade,
podendo diminuir o desempenho da página;
- Quantidade excessiva de modificações que devem ser feitas.

### Como instalar?
- Download dos arquivos;
- Inserção do [link]() no HTML;
- Através do comando `npm install bootstrap` com node.js.

### Inserindo no HMTL
- o CSS: `<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">`
- o jQuery: `<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>`
- o JavaScript: `<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>`

### Como utilizar?
1. Abrir documentação >
1. Buscar componente que irá utilizar >
1. Copiar código >
1. Inserir no HTML.

Exemplo de botões:

```HTML
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

```

-----

(**+**) Para mais informações: 
- [Google Docs: Framework CSS](https://docs.google.com/presentation/d/10SqDClB9mymaVEBu9wBy9k4tdtoESua9VcK27NPgVug/edit#slide=id.g44db1d105b_0_42);
- [Bootstrap](https://getbootstrap.com/);
- [node.js - download](https://nodejs.org/en/)