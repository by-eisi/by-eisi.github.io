import type { ReactNode } from "react";
import styles from "./Todo.module.css";

/** Marks text that has to be filled in before the site goes public. */
export function Todo({ children }: { children: ReactNode }) {
  return <mark className={styles.todo}>{children}</mark>;
}
