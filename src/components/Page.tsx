import { motion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { EASE_OUT, STUDIO } from "../lib/motion";

type Props = { title?: string; description: string; children: ReactNode };

/** Fades between routes, sets the head tags and handles scrolling to anchors. */
export function Page({ title, description, children }: Props) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <motion.main
      id="inhalt"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
    >
      <title>{title ? `${title} - ${STUDIO}` : STUDIO}</title>
      <meta name="description" content={description} />
      {children}
    </motion.main>
  );
}
