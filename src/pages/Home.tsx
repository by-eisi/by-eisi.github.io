import { Link } from "react-router-dom";
import { GameTile } from "../components/GameTile";
import { Hero } from "../components/Hero";
import { LitText } from "../components/LitText";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { ScrollImage } from "../components/ScrollImage";
import { games } from "../data/games";
import { STUDIO } from "../lib/motion";
import styles from "./Home.module.css";

export function Home() {
  return (
    <Page description="Unabhängiges Spielestudio aus Österreich.">
      <Hero
        large
        eyebrow={STUDIO}
        lines={["Kleine Spiele.", "Große Ideen."]}
        lead="Ein unabhängiges Spielestudio aus Österreich. Mit viel Humor und Liebe zum Detail."
      >
        <Link className="button" to="/#spiele">
          Unsere Spiele
        </Link>
      </Hero>
      <ScrollImage image={games[0].image} pixel />

      <section id="spiele" className="section">
        <Reveal>
          <h2 className={styles.heading}>Spiele</h2>
        </Reveal>
        <div className={styles.grid}>
          {games.map((game, index) => (
            <GameTile key={game.slug} game={game} index={index} />
          ))}
        </div>
      </section>

      <section id="studio" className={styles.studio}>
        <div className="narrow">
          <p className={styles.label}>Das Studio</p>
          <LitText text={`${STUDIO} macht Spiele, die wir selber gern spielen würden. Von der Idee bis zum Release.`} />
        </div>
      </section>
    </Page>
  );
}
