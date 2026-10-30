# by_eisiii Studios Website

React, TypeScript und Motion, gebaut mit Vite. HTML, TypeScript und CSS liegen getrennt: `index.html` ist die einzige HTML-Datei, jede Komponente hat ihre `.tsx` und ihre `.module.css`.

```
npm install
npm run dev       # lokal ansehen
npm run build     # prüft die Typen und baut nach dist/
npm run preview   # den fertigen Build ansehen
```

- `src/data/games.ts`: alle Spiele, ein neues Spiel kommt nur hier dazu (plus Eintrag in `scripts/static-routes.mjs`)
- `src/pages/`: Startseite, Spielseite, Impressum, Datenschutz
- `src/components/`: Bausteine und Animationen
- `src/styles/`: Farben und Grundstil
- `public/img/`: Bilder

Alle Animationen respektieren die Systemeinstellung "Bewegung reduzieren".

## Vor dem Veröffentlichen

1. Alle gelb markierten Platzhalter (`<Todo>`) in `src/pages/Impressum.tsx` und `src/pages/Datenschutz.tsx` ausfüllen.
2. Die Rechtstexte gegenlesen lassen.
3. Repository öffentlich stellen, unter Settings > Pages als Quelle "GitHub Actions" wählen. Danach baut jeder Push die Seite neu.
4. `https://by-eisi.github.io/datenschutz` in Mindestabhebung (`config.legal.privacy_url`) und in die Play Console eintragen.
