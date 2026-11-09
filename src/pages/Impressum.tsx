import { Page } from "../components/Page";
import { STUDIO } from "../lib/motion";
import styles from "./Legal.module.css";

export function Impressum() {
  return (
    <Page title="Impressum" description={`Impressum von ${STUDIO}.`}>
      <section className={`section narrow ${styles.legal}`}>
        <h1>Impressum</h1>
        <p>Angaben nach § 5 E-Commerce-Gesetz und § 25 Mediengesetz.</p>
        <h2>Anbieter</h2>
        <p>
          {STUDIO}
          <br />
          Ulli Pichler
          <br />
          Sombartstraße 10d
          <br />
          4040 Linz, Österreich
        </p>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:ulli.pichler04@gmail.com">ulli.pichler04@gmail.com</a>
        </p>
        <h2>Unternehmensgegenstand</h2>
        <p>Entwicklung und Vertrieb von Computerspielen.</p>
      </section>
    </Page>
  );
}
