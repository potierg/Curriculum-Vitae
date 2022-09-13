import { CVInterface, BlocksTypes, Langs } from "../interfaces/CV";

const CVData: CVInterface = {
  profileInfo: {
    name: "Guillaume POTIER",
    title: "Développeur Fullstack JS/TS (Full Remote)",
    picture:
      "https://media-exp1.licdn.com/dms/image/D5635AQEbe8B7O3fWrg/profile-framedphoto-shrink_100_100/0/1661956290478?e=1663477200&v=beta&t=tP7UQvxUfOkdFlBwDy3-8cqgnNYe8iFWkuAes3clo9Q",
  },
  leftSection: [
    {
      page: 1,
      block: {
        type: BlocksTypes.PersonalInfo,
        infos: [
          {
            icon: "mdi-account",
            value: "Guillaume Potier",
          },
          {
            icon: "mdi-email",
            value: "guillaume.potier@epitech.eu",
            type: "email",
          },
          {
            icon: "mdi-phone",
            value: "+33633817703",
            type: "tel",
          },
          {
            icon: "mdi-home",
            value: "36 avenue Bernard Palissy, 92210 St-Cloud",
          },
          {
            icon: "mdi-calendar",
            value: "13 mai 1997",
          },
          {
            icon: "mdi-flag",
            value: "France",
          },
          {
            icon: "mdi-linkedin",
            value: "https://www.linkedin.com/in/guillaume-potier-a3713a92/",
            type: "link",
          },
        ],
      },
    },
    {
      page: 1,
      block: {
        type: BlocksTypes.Langs,
        langs: [
          { lang: Langs.FRANCAIS, rate: 5 },
          { lang: Langs.ANGLAIS, rate: 4 },
        ],
      },
    },
    {
      page: 1,
      block: {
        type: BlocksTypes.Skill,
        skills: [
          { name: "Javascript", rate: 10 },
          { name: "Typescript", rate: 10 },
          { name: "HTML", rate: 10 },
          { name: "JSON", rate: 10 },
          { name: "REST", rate: 10 },
          { name: "Windows", rate: 10 },
          { name: "Linux", rate: 10 },
          { name: "MAC", rate: 9 },
          { name: "Git", rate: 9 },
          { name: "Express", rate: 9 },
          { name: "RabbitMq", rate: 8 },
          { name: "NodeJS", rate: 8 },
          { name: "Angular", rate: 8 },
          { name: "Vue.JS", rate: 8 },
          { name: "PHP", rate: 8 },
          { name: "MongoDB", rate: 8 },
          { name: "MySQL", rate: 8 },
          { name: "Docker", rate: 8 },
          { name: "Kubernetes", rate: 8 },
          { name: "Redis", rate: 7 },
          { name: "MicroServices", rate: 7 },
          { name: "Symfony", rate: 7 },
          { name: "Graphana", rate: 7 },
          { name: "C#", rate: 7 },
          { name: "CSS", rate: 6 },
          { name: "C++", rate: 6 },
          { name: "C", rate: 5 },
          { name: "Python", rate: 5 },
          { name: "Android", rate: 5 },
          { name: "GCP", rate: 5 },
          { name: "AWS", rate: 5 },
          { name: "GCP", rate: 5 },
          { name: "JAVA", rate: 3 },
          { name: "React", rate: 3 },
        ],
      },
    },
  ],
  content: [
    {
      page: 1,
      block: {
        type: BlocksTypes.ProfileDescription,
        description: `Passionné par le domaine de l'informatique depuis toujours, j'aime
          m'informer et me tenir à jour sur tout ce qui touche de près ou de
          loin à l'informatique, que ce soit la mise en circulation du dernier
          smartphone ou encore la création d'une techno révolutionnaire. Malgré
          un parcours scolaire difficile, j'ai su m'en sortir la tête haute et
          ces difficultés ont fait de moi l'homme que je suis aujourd'hui, un
          travailleur sérieux et concerné. Je suis toujours ouvert à toutes
          propositions et challenges, n'hésitez surtout pas à me contacter.`,
      },
    },
    {
      page: 1,
      block: {
        type: BlocksTypes.Degree,
        degrees: [
          {
            title: "Titre d'expert en technologies de l'information - BAC + 5",
            date: {
              dateStart: "juil. 2013",
              dateEnd: "août. 2018",
            },
            school: "Epitech",
            city: "Paris",
          },
          {
            title: "Certificat en Génie Logiciel - BAC + 4",
            date: {
              dateStart: "août. 2016",
              dateEnd: "mai. 2017",
            },
            school: "Université Laval",
            city: "Quebec - Canada",
          },
        ],
      },
    },
    {
      page: 1,
      block: {
        type: BlocksTypes.Job,
        jobs: [
          {
            title: "Developpeur Fullstack (Angular/Laminas)",
            company: "G4 Interactive",
            city: "Levallois-Perret",
            date: { dateStart: "mars. 2018", dateEnd: "déc. 2021" },
            description: `
            Myposeo est une plateforme SEO en ligne d'analyse, de suivi du
            positionnement & du référencement naturel et payant de vos sites web sur
            Google.<br /><br />Pendant 4 ans, j'ai fait partie de l'équipe des
            développeurs, notre travail consistait à faire évoluer l'application en
            permanence selon les demandes de la direction et des clients.
            `,
          },
          {
            title: "Developpeur Front End Angular 4",
            company: "RS2I",
            city: "Levallois-Perret",
            date: { dateStart: "sept. 2017", dateEnd: "févr. 2018" },
            description: `
            RS2i est une société du groupe Neurone. Ma mission fut de développer une
            application Web pour le client 'OPCALIM'.<br /><br />
            Au commencement, je me suis occupé de créer le modèle de la base de
            données, puis j'ai créé des scripts pour parser des fichiers Excel remis
            par OPCALIM afin de remplir le jeu de données. J'ai réalisé selon des
            spécifications bien précises, les differents écrans de l'appli.
            `,
          },
          {
            title: "Developpeur Full Stack PHP",
            company: "FlatSwire",
            city: "Paris",
            date: { dateStart: "avr. 2016", dateEnd: "août. 2016" },
            description: `
            FlatsWire est une boîte à outils complète conçue pour une gestion de
            location de vacances rentable et efficace, donnant accès à un logiciel
            de gestion immobilière et locative ainsi qu'un gestionnaire de canaux,
            le tout combiné dans une seule application.<br /><br />j'ai travaillé à
            la réalisation d'une application de gestion de réservation saisonnière
            en équipe. Je me suis aussi occupé d'installer un serveur Grafana afin
            d'intégrer des graphes dans l'application.
            `,
          },

          {
            title: "Administrateur Système et Developpeur WEB (PHP)",
            company: "Global Pictures",
            city: "Braine le Comte - Belgique",
            date: { dateStart: "oct. 2015", dateEnd: "mars. 202016" },
            description: `
            Global Picture est une société spécialisée dans l'information, le sport
            et le divertissement en production, post-production et sous-traitants.
            <br /><br />
            J'ai réalisé leur site vitrine et installé, configuré et maintenu
            l'ensemble de leurs services d'information (SFTP, MAIL, NAS)
            `,
          },

          {
            title: "Gestionnaire de projet et développeur JAVA",
            company: "Groupe HN",
            city: "Bercy",
            date: { dateStart: "sept. 2014", dateEnd: "déc. 2014" },
            description: `
            Le Groupe HN facilite les évolutions de carrière et contribue au
            renforcement des compétences de ses collaborateurs. Il propose une large
            gamme de services aux principaux acteurs des secteurs de la banque, de
            l'assurance, de l'industrie et des services.
            <br />
            <br />
            J'ai participé au développement et à l'amélioration de l'outil de
            supervision et de traitement des flux destiné à un client, à la
            construction et à l'ajout de diverses fonctionalités à la demande du
            client.
            `,
          },
        ],
      },
    },
    {
      page: 1,
      block: {
        type: BlocksTypes.Training,
        trainings: [
          {
            title: "Docker & Kubernetes: The practical Guide",
            time: 23.5,
            description: `
            Learn Docker, Docker Compose, Multi-Container Projects, Deployment and
            all about Kubernetes from the ground up!
            `,
            picture:
              "https://img-c.udemycdn.com/course/240x135/3490000_d298_2.jpg",
          },

          {
            title: "Introduction to Cloud Computing on AWS",
            time: 8,
            description: `
            Learn Cloud Computing concepts and AWS Basics. Master AWS fundamentals
            and hands-on skills on Amazon Web Services (AWS)
            `,
            picture:
              "https://img-c.udemycdn.com/course/240x135/3329962_a6e7_4.jpg",
          },

          {
            title: "RabbitMQ and Messaging Concepts",
            time: 4,
            description: `
            Learn RabbitMQ message broker, general messaging concepts with C# and
            Java code samples
            `,
            picture:
              "https://img-c.udemycdn.com/course/240x135/2526432_6e10_2.jpg",
          },

          {
            title: "Microservices with Node JS and React",
            time: 54,
            description: `
            Build, deploy, and scale an E-Commerce app using Microservices built
            with Node, React, Docker and Kubernetes
            `,
            picture:
              "https://img-c.udemycdn.com/course/240x135/2887266_c696_5.jpg",
          },
        ],
      },
    },
  ],
};

export default CVData;
