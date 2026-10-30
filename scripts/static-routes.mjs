// GitHub Pages only knows files: every route gets its own index.html, so a
// direct link (the privacy policy for the stores) answers with status 200.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = [
  "impressum",
  "datenschutz",
  "spiele/mindestabhebung",
  "spiele/island-hopper",
  "spiele/games-with-friends",
  "spiele/the-last-chairlift",
];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
copyFileSync("dist/index.html", "dist/404.html");
