import styles from "./Facts.module.css";
import { Reveal } from "./Reveal";

export function Facts({ facts }: { facts: [string, string][] }) {
  return (
    <Reveal>
      <dl className={styles.list}>
        {facts.map(([label, value]) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
