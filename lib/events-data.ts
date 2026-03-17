export interface Event {
  id: string
  image: string
  title: string
  date: string
  location: string
  description: string
  fullDescription: string
  schedule: { time: string; activity: string }[]
  speakers: { name: string; role: string; image: string }[]
  gallery: string[]
}

export const events: Event[] = [
  {
    id: "Workshop-1",
    image: "/images/event1.jpg",
    title: "Réussir sa carrière dans le numérique : stratégies, erreurs à éviter et opportunités ",
    date: "22 Decembre 2025",
    location: "Afrix Global",
    description: "Ce workshop a été un moment riche en échanges et en apprentissages, réunissant des professionnels seniors en activité et nos apprenants engagés, autour des enjeux clés de l’employabilité dans le numérique.",
    fullDescription:
      "Ce workshop a été un moment riche en échanges et en apprentissages, réunissant des professionnels seniors en activité et nos apprenants engagés, autour des enjeux clés de l’employabilité dans le numérique.Les échanges ont été animés par Lemoisson Metre de Harvely et John Santos Nd. de PrimeTek Africa. Les discussions ont porté sur la gestion de carrière, le positionnement professionnel et l’articulation entre le marché local et les opportunités internationales pour les développeurs. Ces interventions ont mis en évidence un constat largement partagé : l’asymétrie d’information entre les jeunes talents et le marché de l’emploi demeure l’un des principaux freins à une insertion professionnelle durable.Nous avons également eu une intervention particulièrement marquante de Ushindi Gedeon, autour du software development et de 𝗹'𝗼𝗽𝗲𝗻 𝘀𝗼𝘂𝗿𝗰𝗲. Il a rappelé que l’open source repose sur du code ouvert, le partage et la collaboration, et que ce n’est pas simplement du code gratuit, mais une véritable manière d’apprendre, de construire des solutions concrètes et de créer de la valeur.Un grand merci à John Santos Nd., Lemoisson Metre et Ushindi Gedeon pour leur disponibilité, leur expertise et la qualité des échanges.",
    schedule: [
      { time: "14h:00", activity: "Ouverture de l'evenement" },
      { time: "17h30", activity: "Session de questions-réponses et clôture" },
    ],
    speakers: [
      { name: "Lemoisson Metre", role: "CEO, Harvely compagny", image: "/images/speakers/lemoisson.jpg" },
      { name: "John Santos Nd.", role: "CEO, PrimeTek Africa", image: "/images/speakers/santos.jpg" },
      { name: "Ushindi Gedeon", role: "Software Engineer", image: "/images/speakers/ushindi.jpg" },
    ],
    gallery: ["/images/events/event.jpg", "/images/events/pub1.jpg", "/images/events/pub2.jpg", "/images/events/pub3.jpg"],
  },
  {
    id: "workshop-2",
    image: "/images/event2.jpg",
    title: "De Code Learner à Développeur Professionnel : Les Clés Réelles pour Réussir dans l’Industrie Technologique",
    date: "20 fevrier 2026",
    location: "Afrix Global & Online",
    description: "Ce workshop est une occasion unique pour apprendre, progresser et comprendre les vraies clés pour réussir dans l’industrie tech.",
    fullDescription:
      "Ce workshop intensif de 3 jours vous permettra de maitriser les outils digitaux essentiels pour votre carriere. De la creation de contenu au marketing digital, en passant par l'analyse de donnees, vous acquerrez des competences pratiques immediatement applicables. Les sessions sont animees par des experts du domaine avec une approche 100% pratique.",
    schedule: [
      { time: "10:00", activity: "Ouverture de la session" },
      { time: "14:00", activity: "Q&A et cloture" },
    ],
    speakers: [
      { name: "Guillain Bisimwa", role: "Building Digital trade & ICT plateforms| fullstack Engineer", image: "/images/speakers/team-4.jpg" },
    ],
    gallery: ["/images/events/pub1.jpg", "/images/events/about-1.jpg", "/images/events/guillain.jpg"],
  },
  {
    id: "Workshop-3",
    image: "/images/event3.jpg",
    title: "Analyse de cas réels : campagnes réussies et campagnes ratées",
    date: "10-11 fevrier 2026",
    location: "Afrix Global",
    description: "48 heures pour creer des solutions innovantes aux defis africains.",
    fullDescription:
      "Le Hackathon Afrix est une competition de 48 heures ou des equipes de developpeurs, designers et entrepreneurs s'affrontent pour creer des solutions technologiques innovantes repondant aux defis du continent africain. Avec des prix totalisant 50 000 USD et un accompagnement par des mentors de renommee internationale, c'est l'opportunite parfaite pour transformer vos idees en projets concrets.",
    schedule: [
      { time: "8:30", activity: "ouverture" },
      { time: "12:30", activity: "Cloture" },
    ],
    speakers: [
      { name: "Justin KASEREKA", role: "artiste visuel", image: "/images/speakers/justin.jpg" },
    ],
    gallery: ["/images/events/pub2.jpg", "/images/events/pub3.jpg", "/images/events/event.jpg", "/images/events/formation-hero.jpg"],
  },
]

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}
