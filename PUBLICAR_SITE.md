# Publicar o Beco's Lab

Este site é estático e pode ser publicado no GitHub Pages sem build.

## URLs legais para lojas

Como o repositório é `arabeco/arabeco.github.io`, a URL pública padrão do GitHub Pages é:

`https://arabeco.github.io/`

Use estas URLs nas lojas enquanto não houver domínio próprio:

- Política geral de privacidade: `https://arabeco.github.io/privacidade.html`
- Termos gerais: `https://arabeco.github.io/termos.html`
- Glyph: `https://arabeco.github.io/privacidade.html#glyph`
- Elite 2050: `https://arabeco.github.io/privacidade.html#elite-2050`
- KingsWorld: `https://arabeco.github.io/privacidade.html#kingsworld`
- Mind Practice: `https://arabeco.github.io/privacidade.html#mind-practice`
- ScoreTrader: `https://arabeco.github.io/privacidade.html#scoretrader`

## Caminho rápido com GitHub Pages

1. Usar o repositório `arabeco/arabeco.github.io`.
2. Enviar estes arquivos para a branch `main`.
3. Em `Settings > Pages`, escolher `GitHub Actions` como fonte.
4. O workflow `.github/workflows/pages.yml` publica o site.
5. A URL inicial será `https://arabeco.github.io/`.

## Domínio claro

Para publicar apps, o ideal é apontar um domínio próprio, por exemplo:

- `https://becoslab.com/`
- `https://www.becoslab.com/`
- `https://legal.becoslab.com/`

No GitHub Pages, depois de comprar/configurar o domínio:

1. Em `Settings > Pages`, adicionar o domínio customizado.
2. No DNS do domínio, apontar para GitHub Pages.
3. Ativar `Enforce HTTPS`.
4. Criar um arquivo `CNAME` na raiz contendo apenas o domínio escolhido.

Não criei `CNAME` ainda porque ele precisa conter o domínio real que você vai usar.
