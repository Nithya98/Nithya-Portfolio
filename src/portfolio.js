/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nithya's Portfolio",
  description:
    "A passionate front-end developer seeking a challenging environment to explore my skills in the most efficient way for the advancement of the organization and my career.",
  og: {
    title: "Nithya Shanmugam Portfolio",
    type: "website",
    url: "https://nithyashanmugam.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: `Nithya`,
  logo_name: "Nithya Shanmugam",
  nickname: "Frontend Developer",
  subTitle: `I'm a passionate Front-end developer developer seeking for a challenging environment to explore my skills to build an amazing stuffs in the most efficient way for the advancement of the organization and of my career.`,
  resumeLink:
    /* 'https://drive.google.com/file/d/1y1eHnA-IvXZTNCjk22GCd_9nzN57SBKc/view?usp=sharing'*/
    "https://github.com/Nithya98/Nithya-Portfolio",
  portfolio_repository: "https://github.com/Nithya98/Nithya-Portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Nithya98",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/nithya-shanmugam-311b2a133/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto: nithyashanmugam03@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/nithya_nithiiii/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title:
        "A Passionate and crazy FRONTEND DEVELOPER who wants to explore every Tech stack",
      fileName: "Skills",
      skills: [
        "⚡ Making UI fully responsive across all browsers & devices using HTML, CSS/SASS, Flexbox & Bootstrap and Javascript",
        "⚡ Experience building on reusable components for future use and optimized web pages using react.js",
        "⚡ Employed variety of styles using styled components to create a user friendly websites ",
        `⚡ Moreover, React is fun 💃🏼 and I've  enjoyed a lot throughout the learning process as well as in the working perspective.`,
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#8e44ad",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "simple-icons:styledcomponents",
          style: {
            color: "#f1c40f",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#2c3e50",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#16a085",
          },
        },
        {
          skillName: "Auth0",
          fontAwesomeClassname: "simple-icons:auth0",
          style: {
            color: "#e67e22",
          },
        },
        //
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Sri Manakula Vinayagar Engineering College",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "SMVEC",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on ReactJS, Advanced Javascript, Web development and Web Design",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://smvec.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React JS",
      subtitle: "- Hitesh Choudary",
      logo_path: "lco_logo.png",
      certificate_link:
        "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/53635/1733837_53635.pdf?1619177795",
      alt_name: "LearCodeOnline",
      color_code: "#d35400",
    },
    {
      title: "Javascript ES6",
      subtitle: "- Mark Lassoff",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5f30f83f-5fbd-4fc3-9707-b5a746627c77.pdf",
      alt_name: "javascript",
      color_code: "#00000099",
    },
    {
      title: "The Complete Web developer course",
      subtitle: "- Andrei Neagoie",
      logo_path: "udemybus.jpg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b46a364a-4fa8-4d91-91a0-75e72fe26dbd.pdf",
      alt_name: "webdev",
      color_code: "#0C9D5899",
    },

    {
      title: "Bootstrap 4",
      subtitle: "- Brad Traversy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a76e4701-3476-45ce-bcc9-db4cb8fdf984.pdf",
      alt_name: "bootstrap",
      color_code: "#4285F499",
    },
    {
      title: "IoT",
      subtitle: "- Anupam Basu",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DBwDy5EdUO8g8SSR4z0UTUUHy5b_GDoa/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "HTML",
      subtitle: "- Sololearn",
      logo_path: "sololearn.png",
      certificate_link:
        "https://www.sololearn.com/Certificate/1014-3382951/pdf/",
      alt_name: "sololearn",
      color_code: "#FFA17F",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nithya_profile.png",
    description: `I look forward to connecting with you. If you have any questions, Please feel free to reach me out and I'll connect with you soon.`,
  },
  blogSection: {
    title: "Hobbies",
    subtitle:
      "In my leisure time, I like to make fun projects and cool little things with javascript 🚀.  When I’m not in front of a computer screen, I am probably trying out a new recipe in the kitchen.",
    link: "https://github.com/Nithya98",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "No: 25, Ilavarsan nagar, Thavalakuppam, Puducherry - 605007",
    location_map_link:
      "https://www.google.com/maps/place/Thavalakuppam,+Puducherry+605007/@11.8618081,79.7894726,1824m/data=!3m1!1e3!4m5!3m4!1s0x3a549e49ad704c4b:0x8fa3a71887ee2134!8m2!3d11.8619488!4d79.792115",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9789521055",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  contactPageData,
};
