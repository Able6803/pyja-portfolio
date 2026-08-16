# pyja.net

Personal site for Kris Liles — cybersecurity operator and Russian linguist.
Bilingual (EN/RU), static, served by GitHub Pages on `www.pyja.net`.

## Structure

```
index.html        Home — hero, about, instruments, featured
resume.html       Résumé — skeleton with [заполнить] placeholders
portfolio.html    Four dossier entries
contact.html      Email / GitHub / LinkedIn
assets/style.css  Design tokens + layout
assets/app.js     RU/EN i18n dictionary + language toggle (localStorage)
CNAME             www.pyja.net
```

## Deploy

- Branch `main`, Pages root path
- DNS (Cloudflare): CNAME `www` → `Able6803.github.io`, DNS-only (grey cloud)
- Email: Cloudflare Email Routing forwards `kris@pyja.net`

## Design

Direction "Translator" — the site proves the language skill: every string
switches between English and Russian in place. PT Serif / PT Sans / IBM Plex
Mono (all Cyrillic-capable), constructivist red `#C41E24` as the single accent.
