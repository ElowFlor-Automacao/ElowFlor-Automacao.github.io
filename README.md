# Página pública da ElowFlor

Publicada pelo GitHub Pages a partir da `main` em https://elowflor.com.br: o que entra na `main` vai para o ar.

- HTML e CSS estáticos, sem framework e sem etapa de build; nada carregado de outro site.
- Texto: página *Empresa* do Notion. Cores, fonte e logos: página *Marca*. As imagens do painel são de dados de demonstração e estão marcadas assim.
- Ver no computador: `python3 -m http.server 8080` nesta pasta e abrir http://localhost:8080.
- Domínio: o arquivo `CNAME` diz ao GitHub qual é o endereço. O DNS do domínio fica na Hostinger (registros A para o GitHub Pages e `www` como CNAME para `elowflor-automacao.github.io`). Não apague o `CNAME`: sem ele, o site sai do domínio.
