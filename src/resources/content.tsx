import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chidiere",
  lastName: "Oluoma",
  name: `Chidiere Oluoma`,
  role: "Data & Business Analyst",
  avatar: "/images/Chidi.jpg",
  email: "chidiereoluoma+portfolio@gmail.com",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German", "Igbo", "French"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Blog</>,
//   description: <>My weekly blog about life, creativity and computing ^-^</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CheedTriad",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chidiere-oluoma/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/chidiere_o",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Analytical mind. Business instinct.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Chidiere Oluoma</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/carbon-footprint-tracker",
  },
  subline: (
    <>
      Hi, I'm Chidiere, a{" "}
      <Text as="span" size="xl" weight="strong">
        Data / Business Analyst
      </Text>
      . I help businesses understand what their numbers are actually saying.
      <br />
      Away from work, I build and break things in Python until they do something
      interesting.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Chidiere is a final-year Computer Science student at De Montfort
        University, genuinely excited about data, strategy, and the overlap
        between them. His background spans data analysis, machine learning, and
        stakeholder engagement, and he's at his best when a problem requires
        both technical rigour and clear communication to solve.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Grosvenor Casino",
        timeframe: "2025 - Present",
        role: "Electronic Gaming Host",
        achievements: [
          <>
            Managed player data for 3,000+ active customers on the NEON
            platform, maintaining 100% audit-ready compliance records across
            GDPR-aligned access controls and incident logs.
          </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Shipley Estates",
        timeframe: "2023 - 2025",
        role: "Team Supervisor",
        achievements: [
          <>
            Onboarded and trained 15 new staff on internal CRM and database
            systems, cutting average training time by consolidating technical
            guidance into a structured onboarding process.
          </>,
          <>
            Maintained operational database records across daily workflows,
            reducing data entry errors and improving resolution time on
            customer-facing system issues.
          </>,
        ],
        images: [],
      },
      {
        company: "Ubisoft",
        timeframe: "2024 - 2025",
        role: "Player Support (English/German)",
        achievements: [
          <>
            Delivered Tier 1 bilingual support using ticketing systems to
            troubleshoot in-game bugs, connectivity issues, and
            platform-specific errors.{" "}
          </>,
          <>
            Resolved 40–70 Tier-1 tickets weekly (account/security: 2FA,
            recovery, linking); escalated ~10% of complex cases to engineering.
          </>,
        ],
        images: [],
      },
      {
        company: "Goethe-Institut",
        timeframe: "2018 - 2022",
        role: "Administrative Assistant",
        achievements: [
          <>
            Administered digital systems and internal platforms; coordinated
            event logistics, scheduling, and stakeholder communications using
            Microsoft Office and internal tools.
          </>,
          <>
            Produced bilingual (English/German) documentation and managed
            internal communications in a multicultural, high-volume environment.
          </>,
        ],
        images: [],
      },
      {
        company: "De Montfort University, Leicester",
        timeframe: "2025 - Present",
        role: "UG Faculty Lead Representative (Volunteer)",
        achievements: [
          <>
            Represent student voice at senior faculty meetings, influencing
            decisions on curriculum and student support across 6 departments.
          </>,
          <>
            Led a feedback initiative that gathered over 200+ student responses,
            resulting in tangible improvements to lab scheduling and course
            content delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "De Montfort University, Leicester",
        timeframe: "2025 - Present",
        role: "Academic Board Student Representative (Volunteer)",
        achievements: [
          <>
            Reviewed and challenged 100% of academic proposals brought to board
            level, ensuring every policy change was stress-tested against
            student impact before approval.
          </>,
          <>
            Contributed to quality assurance discussions on assessment standards
            and curriculum design, representing undergraduate interests at the
            highest governance level in the university.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "De Montfort University, Leicester, UK",
        description: <>Computer Science B.Sc.(Hons).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: (
          <>
            Built machine learning pipelines and analysed datasets using
            Scikit-learn and Pandas, producing actionable insights from
            real-world sustainability data.
          </>
        ),
      },
      {
        title: "Java",
        description: (
          <>
            Developed object-oriented applications with JavaFX interfaces and
            RESTful API integration.
          </>
        ),
      },
      {
        title: "SQL",
        description: (
          <>
            Designed and queried relational databases across academic projects
            and live systems, including customer data management at Grosvenor
            Casino.
          </>
        ),
      },
      {
        title: "Machine Learning",
        description: (
          <>
            Implemented predictive models and pattern recognition algorithms
            using Scikit-learn, trained on real user behaviour data to generate
            personalised sustainability recommendations.
          </>
        ),
      },
      {
        title: "Data Analysis",
        description: (
          <>
            Extracted trends from complex datasets and translated findings into
            clear recommendations, presented to senior faculty and non-technical
            stakeholders at De Montfort University.
          </>
        ),
      },
    ],
  },
  interests: {
    display: true,
    title: "Interests & Hobbies",
    items: [
      "Classical music & organ performance",
      "Machine learning & data projects",
      "Photography",
      "Videography",
      "Cooking",
      "Cycling",
      "Travelling",
      "Gaming",
      "Drone Piloting",
      "3D Design",
      "Languages",
      "Fitness & table tennis",
      "Chess",
      "Smooth Jazz",
      "Entrepreneurship",
      "Faith & church ministry",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about my life, tech, and everything in-between...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const organist = {
  path: "/organist",
  label: "Organist",
  title: `Organist – ${person.name}`,
  description: `Music for weddings, funerals, and concerts by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  
  images: [
    {
      src: "/images/gallery/Image041.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image031.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image011.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image081.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image101.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image091.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image111.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image051.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image061.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image071.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image121.webp",
      alt: "image",
      orientation: "vertical",
    },


    {
      src: "/images/gallery/Image10.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image35.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image58.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image59.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image51.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image52.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image45.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image46.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image29.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image31.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image64.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image60.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image01.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image05.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image53.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image54.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image62.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image66.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image32.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image33.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image50.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image55.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image08.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image09.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image63.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image65.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image49.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Image56.webp",
      alt: "image",
      orientation: "vertical",
    },


    {
       src: "/images/gallery/Image17.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image18.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image19.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image20.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image21.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image22.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image24.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image25.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image21.webp",
       alt: "image",
       orientation: "horizontal",
    },
    {
       src: "/images/gallery/Image12.webp",
       alt: "image",
       orientation: "vertical",
    },


    // {
    //   src: "/images/gallery/image__.webp",
    //   alt: "image",
    //   orientation: "vertical",
    // },

    // {
    //   src: "/images/gallery/image__.webp",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    
  ],
};

export { person, social, home, about, blog, work, gallery, organist };
