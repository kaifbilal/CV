import {
 Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Mohd Kaif",
  initials: "M.K.",
  location: " Meerut, India",
  about:
    "CS Undergrad Student",
  summary: (
    <>
     I'm a curious and open to learning Student, I love to do things my way.
     I am Organiser@TEDx, GDG On Campus Organiser, Microsoft Learn Student Ambassadro, Defang Campus Advocate.
     I am Python developer, also brushed up my skills in JS, Java, C & C#, some technology I dived deep in are Web dev, Cloud, cybersecurity. 
     And Researching in Quantum Computin, Mainframes and AI. 
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/144979579?v=4",
  personalWebsiteUrl: "https://kaifbilalibrahim.me/",
  contact: {
    email: "kaifbilalibrahim@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kaifbilal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohdkaifbilal",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/kaifbilalibrahm",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "IIMT Engineering College",
      degree: "Bachelor's Degree in Computer Science",
      start: "2023",
      end: "2027",
    },
  ],
  work: [],
  //   [{
  //     company: "Company",
  //     link: "about:blank",
  //     badges: ["Remote", "React", "TypeScript", "Node.js"],
  //     title: "Job Position",
  //     logo: Logo,
  //     start: "2024",
  //     end: null,
  //     description: (
  //       <>
  //         Sed eget felis lacus. Maecenas placerat diam a tincidunt viverra. 
  //         <ul className="list-inside list-disc">
  //           <li>
  //             Praesent hendrerit justo et nisl dapibus, porttitor placerat nisi efficitur.
  //           </li>
  //           <li>
  //             Donec viverra urna in porta dignissim, nunc suscipit aliquet elementum, 
  //             etiam vestibulum. 
  //           </li>
  //           <li>
  //             Curabitur venenatis magna lacinia, vulputate nisl ac, fermentum turpis. 
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Company",
  //     link: "about:blank",
  //     badges: [
  //       "Remote",
  //       "React",
  //       "TypeScript",
  //       "Node.js",
  //     ],
  //     title: "Job Position",
  //     logo: Logo,
  //     start: "2021",
  //     end: "2024",
  //     description: (
  //       <>
  //         Quisque vitae elementum orci. In hac habitasse platea dictumst.
  //         <ul className="list-inside list-disc">
  //           <li>
  //           Duis ornare ligula nec tincidunt mattis, crabitur lectus neque.
  //           </li>
  //           <li>
  //           Donec porttitor nec magna quis facilisis mauris, rutrum a diam vitae rhoncus 
  //           donec luctus.
  //           </li>
  //           <li>
  //           Phasellus nibh felis, scelerisque aliquet cursus a, blandit id sem, 
  //           nam aliquet dolor.
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Company",
  //     link: "about:blank",
  //     badges: ["Remote", "React", "TypeScript", "Node.js"],
  //     title: "Job Position",
  //     logo: Logo,
  //     start: "2015",
  //     end: "2021",
  //     description: (
  //       <>
  //         Sed aliquet hendrerit odio, in elementum ante convallis quis.
  //         <ul className="list-inside list-disc">
  //           <li>
  //           Donec blandit nibh at felis vehicula vehicula, nunc semper porttitor malesuada.
  //           </li>
  //           <li>
  //           Etiam rutrum dolor vel elit cursus elementum. 
  //           </li>
  //           <li>
  //           Curabitur urna sem, faucibus auctor dignissim a, eleifend at mauris.
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   }
  // ],
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: []
  //  [{
  //     title: "Project 1",
  //     techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
  //     description:
  //       "Nam aliquet dolor a risus pharetra placerat, praesent congue nulla dolor.",
  //     logo: Logo,
  //     link: {
  //       label: "blank",
  //       href: "about:blank",
  //     },
  //   },
  //   {
  //     title: "Project 2",
  //     techStack: [
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Pellentesque habitant morbi tristique senectus.",
  //     logo: Logo,
  //     link: {
  //       label: "blank",
  //       href: "about:blank",
  //     },
  //   },
  //   {
  //     title: "Project 3",
  //     techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
  //     description:
  //       "Curabitur lectus neque, tempor at tortor non, viverra tempor tellus.",
  //     logo: Logo,
  //     link: {
  //       label: "blank",
  //       href: "about:blank",
  //     },
  //   },
  // ],
} as const;
