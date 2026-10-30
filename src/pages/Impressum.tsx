import { Page } from "../components/Page";
import { Todo } from "../components/Todo";
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
          <Todo>[Vor- und Nachname]</Todo>
          <br />
          <Todo>[Straße und Hausnummer]</Todo>
          <br />
          <Todo>[PLZ Ort]</Todo>, Österreich
        </p>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <Todo>[E-Mail-Adresse]</Todo>
        </p>
        <h2>Unternehmensgegenstand</h2>
        <p>Entwicklung und Vertrieb von Computerspielen.</p>
        <h2>Weitere Angaben</h2>
        <p>
          <Todo>[Falls vorhanden: UID-Nummer, Gewerbebehörde, Kammer]</Todo>
        </p>
      </section>
    </Page>
  );
}
