import { Navigate, useParams } from "react-router-dom";
import { Facts } from "../components/Facts";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { LitText } from "../components/LitText";
import { Page } from "../components/Page";
import { PinnedGallery } from "../components/PinnedGallery";
import { Reveal } from "../components/Reveal";
import { ScrollImage } from "../components/ScrollImage";
import { games } from "../data/games";
import styles from "./GamePage.module.css";

export function GamePage() {
  const { slug } = useParams();
  const game = games.find((entry) => entry.slug === slug);
  if (!game) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page title={game.name} description={game.lead}>
      <Hero eyebrow={game.status} lines={[game.name]} lead={game.lead}>
        {game.cta && (
          <a className="button" href={game.cta.href} rel="noopener">
            {game.cta.label}
          </a>
        )}
      </Hero>
      <ScrollImage image={game.image} pixel={game.pixel} />

      {game.intro && (
        <section className="section narrow">
          {game.headline && (
            <Reveal>
              <h2 className={styles.heading}>{game.headline}</h2>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <p className={styles.intro}>{game.intro}</p>
          </Reveal>
        </section>
      )}

      {game.features && (
        <section className="section">
          <Features features={game.features} />
        </section>
      )}

      {game.gallery && <PinnedGallery shots={game.gallery} />}

      {game.facts && (
        <section className="section narrow">
          <Reveal>
            <h2 className={styles.heading}>Auf einen Blick</h2>
          </Reveal>
          <Facts facts={game.facts} />
        </section>
      )}

      {!game.intro && !game.cta && (
        <section className="section narrow">
          <LitText text="Wir arbeiten daran. Mehr Infos gibt es hier, sobald es so weit ist." />
        </section>
      )}
    </Page>
  );
}
