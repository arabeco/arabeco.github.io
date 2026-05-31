# Publicar o Beco's Lab

Este site é estático e pode ser publicado no GitHub Pages sem build.

## URLs legais para lojas

Como o repositório é `arabeco/arabeco.github.io`, a URL pública padrão do GitHub Pages é:

`https://arabeco.github.io/`

Use estas URLs nas lojas enquanto não houver domínio próprio:

- Índice geral de privacidade: `https://arabeco.github.io/privacidade.html`
- Índice geral de termos: `https://arabeco.github.io/termos.html`
- Glyph privacidade: `https://arabeco.github.io/privacidade-glyph.html`
- Glyph termos: `https://arabeco.github.io/termos-glyph.html`
- Elite50 privacidade: `https://arabeco.github.io/privacidade-elite50.html`
- Elite50 termos: `https://arabeco.github.io/termos-elite50.html`
- Elite50 exclusão de conta: `https://arabeco.github.io/elite50/exclusao.html`
- KingsWorld privacidade: `https://arabeco.github.io/privacidade-kingsworld.html`
- KingsWorld termos: `https://arabeco.github.io/termos-kingsworld.html`
- KingsWorld exclusão de conta: `https://arabeco.github.io/kingsworld/exclusao.html`
- Mind Practice privacidade: `https://arabeco.github.io/privacidade-mind-practice.html`
- Mind Practice termos: `https://arabeco.github.io/termos-mind-practice.html`
- Mind Practice exclusão de conta: `https://arabeco.github.io/mind-practice/exclusao.html`
- ScoreTrader privacidade: `https://arabeco.github.io/privacidade-scoretrader.html`
- ScoreTrader termos: `https://arabeco.github.io/termos-scoretrader.html`

## Exclusão de conta web

Antes de criar tabela em qualquer Supabase, verificar se já existe algo como `account_deletion_requests`,
`account_deletion_web_requests` ou equivalente. Se a tabela existente for de fluxo autenticado interno do app e exigir
`user_id`, `metadata`, `requested_at` ou campos parecidos, criar uma tabela separada para o fluxo público web.

Schema recomendado para as páginas `exclusao.html`:

```sql
create table if not exists public.account_deletion_web_requests (
  id uuid primary key default gen_random_uuid(),
  app_slug text not null,
  email text not null,
  nickname text,
  identifier text,
  reason text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  processed_at timestamptz,
  notes text
);

alter table public.account_deletion_web_requests enable row level security;

create policy "account_deletion_web_requests_insert_anon"
on public.account_deletion_web_requests
for insert
to anon
with check (true);
```

O JavaScript público envia `app_slug`, `email`, `nickname`, `identifier`, `reason` e `status` para essa tabela quando
`window.BECOSLAB_DELETION_SUPABASE` estiver configurado com `url`, `anonKey` e `table`.

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
