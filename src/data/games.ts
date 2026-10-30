export type Feature = { title: string; text: string };
export type Shot = { src: string; alt: string };

export type Game = {
  slug: string;
  name: string;
  status: string;
  lead: string;
  image: Shot;
  /** Picture on the start page tile when the page hero already shows `image`. */
  cover?: Shot;
  /** Pixel art stays crisp when scaled. */
  pixel?: boolean;
  /** Spans the whole row on the start page. */
  wide?: boolean;
  dark?: boolean;
  headline?: string;
  intro?: string;
  features?: Feature[];
  gallery?: Shot[];
  facts?: [label: string, value: string][];
  cta?: { label: string; href: string };
};

export const games: Game[] = [
  {
    slug: "mindestabhebung",
    name: "Mindestabhebung",
    status: "Bald verfügbar",
    lead: "Mit 18 rausgeschmissen. Konto: 3,40 €. Die Bank will 20 € Mindestabhebung.",
    image: { src: "/img/mb_living_room.png", alt: "Das Wohnzimmer im Spiel mit Laptop, Fernseher und Bücherregal" },
    cover: { src: "/img/mb_kitchen.png", alt: "Die Küche im Spiel" },
    pixel: true,
    wide: true,
    headline: "Ein ganzes Leben. Ein einziges Ende.",
    intro:
      "Eine humorvolle Lebenssimulation in Pixel-Art. Ein Tag ist ein Monat, zwölf Tage sind ein Jahr. Wie lange du lebst, hängt davon ab, was du isst, ob du Sport machst und wie viel Stress du dir antust.",
    features: [
      {
        title: "Geld verdienen, aber nicht durch Klicken.",
        text: "Zettel an der Haustür, Schwarzarbeit, ein echter Job mit wilden Bewerbungsgesprächen, Aktien, Krapfencoin und Hacking-Rätsel.",
      },
      {
        title: "Alles hat Folgen.",
        text: "Finanzamt, Polizei, Nachbarschaft und Stammtisch merken sich, was du tust. Mahnungen bis zum Exekutor inklusive.",
      },
      {
        title: "Eine Wohnung, die mitwächst.",
        text: "Vom leeren Zimmer bis zum vollen Kühlschrank, Garage mit Motorrad und irgendwann vielleicht das Eigenheim.",
      },
      {
        title: "Leute, die reden.",
        text: "Passanten vor dem Fenster, Handy-Kontakte und eigene Fernsehsender. Gerüchte, die stimmen. Oder auch nicht.",
      },
    ],
    gallery: [
      { src: "/img/mb_kitchen.png", alt: "Die Küche im Spiel" },
      { src: "/img/mb_bedroom.png", alt: "Das Schlafzimmer im Spiel" },
      { src: "/img/mb_hallway.png", alt: "Das Vorzimmer im Spiel" },
    ],
    facts: [
      ["Enden", "43"],
      ["Erfolge", "56"],
      ["Dauer", "1 bis 6 Stunden je Durchgang"],
      ["Sprachen", "Deutsch, Englisch"],
      ["PC", "4,99 € auf Steam, ohne Werbung"],
      ["Android und iOS", "Gratis mit einer Werbung alle 12 Nächte, Werbung weg um 2,99 €"],
    ],
  },
  {
    slug: "island-hopper",
    name: "Island Hopper",
    status: "In Entwicklung",
    lead: "Ein süßes Piraten-Puzzle für Handys.",
    image: { src: "/img/island-hopper.svg", alt: "Illustration: Boote fahren um eine Insel" },
    headline: "Eine Farbe. Ein Boot. Ein Plan.",
    intro:
      "Boote fahren um eine Insel und schießen ein Pixelbild ab, jedes Boot nur seine eigene Farbe. Sind alle Stege voll, ist das Level verloren.",
    facts: [
      ["Level", "160 auf einer Schatzkarte"],
      ["Schwierigkeiten", "Normal, Schwer, Sehr schwer, Experte"],
      ["Items", "Extra-Anker, Fernrohr, Kanone, Zusatzboot, Krake"],
      ["Fair", "Keine Echtgeld-Käufe, keine Werbung"],
    ],
  },
  {
    slug: "games-with-friends",
    name: "Games With Friends",
    status: "Jetzt im Browser",
    lead: "Dein privates Casino.",
    image: { src: "/img/games-with-friends.svg", alt: "Illustration: Spielkarten und Würfel" },
    cta: { label: "Jetzt spielen", href: "https://gameswithfriends-self.vercel.app" },
  },
  {
    slug: "the-last-chairlift",
    name: "The Last Chairlift",
    status: "Upcoming Release",
    lead: "Bald mehr dazu.",
    image: { src: "/img/the-last-chairlift.svg", alt: "Illustration: Sessellift im Abendlicht vor Bergen" },
    wide: true,
    dark: true,
  },
];
