# AJ-Blikk-Nettside
Nettsiden for AJ Blikk AS

## Oppsett

```
npm install
```

## Utvikling (live reload)

```
npm run dev
```

Åpner siden lokalt (Eleventy serve), typisk på http://localhost:8080

## Produksjonsbygg

```
npm run build
```

Bygger Tailwind-CSS og statiske HTML-sider til `_site/`, som er mappen Netlify publiserer fra (se `netlify.toml`).

## Struktur

- `src/_data/` – firmainfo, tjenesteliste og prosjektkategorier. Legg til/fjern en tjeneste her, så oppdateres meny, forside og undersider automatisk.
- `src/_includes/layouts/base.njk` – felles HTML-skall for alle sider.
- `src/_includes/partials/header.njk` og `footer.njk` – felles navigasjon/header/footer. Endre menyen her, ett sted.
- `src/tjenester/tjeneste.njk` – én mal som genererer én side per tjeneste (basert på `_data/services.json`).
- `src/prosjekter/kategori.njk` – én mal som genererer én side per prosjektkategori (Privat / Borettslag-Sameie / Næringsbygg).
- Øvrige sider (`index.njk`, `om-oss.njk`, `kontakt.njk`, `gratis-befaring/`) er egne filer.

## TODO før lansering

- Bytt ut logo-plassholder ("LOGO"-boksen) i header/footer med ekte logofil.
- Fyll inn tekst/bilder markert med TODO på forsiden, tjenestesidene og prosjektsidene.
- Legg til ekte prosjekter under Prosjekter-kategoriene.
- Sett opp e-postvarsling for "Gratis befaring"-skjemaet i Netlify (Site settings > Forms > Form notifications) til ahaider.blikk@gmail.com.
- Bytt Google Maps-plassholder på Kontakt-siden med ekte kart-embed.
