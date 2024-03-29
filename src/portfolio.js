﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Ikram Hasan",
  title: "Hello everyone, I'm Ikram",
  subTitle: emoji(
    "An aspiring engineer 🚀 with an immense thirst for learning new technologies 👌"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fDyNcJTpZihq5FeE5Dae8pQPApkVpiiA/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ikramhasan",
  linkedin: "https://www.linkedin.com/in/ikramhasan/",
  gmail: "ikramhasan.dev@gmail.com",
  //gitlab: 'https://gitlab.com/saadpasta',
  facebook: "https://www.facebook.com/ihni7",
  twitter: "https://twitter.com/ikramhasandev",
  fiverr: "https://www.fiverr.com/ikramhasan_dev",
  android: "https://play.google.com/store/search?q=pub%3AIkram%20Hasan&c=apps",
  //medium: 'https://medium.com/@saadpasta',
  //stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULL STACK APPLICATION DEVELOPER WHO WANTS TO EXPLORE EVERY TECH OUT THERE",
  skills: [
    emoji(
      "⚡ Develop highly attractive front end / user interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Create highly scalable servers and backend using nodejs and express"
    ),
    emoji("⚡ Database integration using mongodb, aws, postgresql etc."),
    emoji("⚡ Integration of APIs"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-dove",
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "node-js",
      fontAwesomeClassname: "fab fa-node-js",
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "teachable-machine",
      fontAwesomeClassname: "fas fa-chalkboard",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BRAC University",
      logo: require("./assets/images/bracu_logo_white.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "January 2019 - Present",
      //desc: 'Participated in the research of XXX and published 3 papers.',
      //descBullets: [
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //],
    },
    {
      schoolName: "Dhaka Residential Model College",
      logo: require("./assets/images/drmc.png"),
      subHeader: "HSC",
      duration: "January 2017 - December 2018",
      //desc:
      //  'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      //descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / App UI", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "Ricciwawa, HongKong",
      companylogo: require("./assets/images/ricciwawa.png"),
      date: "October, 2021 – Present",
      desc: "Ricciwawa believes learning should be a journey filled with joy and laughter.",
      descBullets: [
        "Optimized the app and turned the sluggish 35 fps screens into smooth 60 fps.",
        "Integrated a machine learning based recommendation engine to the app.",
      ],
    },
    {
      role: "Application Developer",
      company: "Babycare",
      companylogo: require("./assets/images/babycare.jpeg"),
      date: "November, 2021 – June, 2022",
      desc: "Babycare is the first ever Bangladeshi website specialized in baby care products",
      descBullets: [
        "Implementer a payment gateway.",
        "Added automatic anonymous crash reporting.",
        "Followed a domain driven design.",
      ],
    },
    {
      role: "Flutter Instructor",
      company: "ICT Divsion, Government of Bangladesh",
      companylogo: require("./assets/images/sdmga.png"),
      date: "September, 2021 – January, 2022",
      desc: "Cross Platform App Development Training session organized by the ICT division, Government of Bangladesh for celebrating Mujib100.",
      descBullets: [
        "Taught more than 250 students.",
        "Provided hands on training.",
        "Many students have their apps launched on play store after 3 months of training.",
      ],
    },
    {
      role: "Application Developer",
      company: "NeedIn",
      companylogo: require("./assets/images/needin.png"),
      date: "March, 2020 – Present",
      desc: "NeedIn is a startup specializing in the ecommerce field.",
      descBullets: [
        "Developed the frontend of the application",
        "Integrated the MapBox api (Now using Google Maps) for Geocoding and Reverse Geocoding",
        "Used a nodejs backend with mongodb as database",
      ],
    },
    {
      role: "Fullstack Application Developer",
      company: "Nerdy Andaa",
      companylogo: require("./assets/images/nerdy_andaa.png"),
      date: "August 2019 – March 2020",
      desc: "Nerdy Andaa is an online learning platform that specializes in providing university lecture.",
      descBullets: [
        "Developed the complete application",
        "Integrated Firestore backend",
        "Integrated Youtube Data Api v3",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ikramhasan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IEEE Computer Society App Development Contest Champion",
      subtitle:
        "Champion of the 2020 flagship application development contest organized by IEEE Computer Society",
      image: require("./assets/images/ieee_bracu_600.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AGfhKjK8FKhy9iVMM7q0Qk_tu_ZjAcLD/view?usp=sharing",
        },
        //{
        //  name: 'Award Letter',
        //  url:
        //    'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        //},
        {
          name: "Result Link",
          url: "http://ieeebracu.com/ieee-computer-society-brac-university-student-branch-chapter-organizes-its-first-flagship-bootcamp-on-native-application-development-using-flutter/",
        },
      ],
    },
    {
      title: "Project Tech Tussle 1st Runners Up",
      subtitle:
        "1st runners up on the 2021 project tech tussle organized by IEEE Computer Society BRACU Student branch chapter",
      image: require("./assets/images/techTussle.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1igmbWY-ao56j0vUWIA6v3UD9YP9yavTF/view?usp=sharing",
        },
        //{
        //  name: 'Award Letter',
        //  url:
        //    'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        //},
        {
          name: "Result Link",
          url: "https://www.facebook.com/ieeebracuCS/photos/a.458626104924976/887282245392691/",
        },
      ],
    },
    {
      title: "Social Entrepreneurship Challenge 2022",
      subtitle:
        "My startup stood 3rd among other startups worldwide on Social Entrepreneurship Challenge 2022.",
      image: require("./assets/images/sec2022.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17BerAxLbhwWAeZ3OkTVQSwBWnK2C_pwP/view?usp=sharing",
        },
        {
          name: "Result Link",
          url: "https://www.facebook.com/Vubsocialentrepreneurship/photos/a.1367425286662768/7605321502873084/",
        },
      ],
    },
    {
      title:
        "Blockchain Olympiad Bangladesh 2022 Finalist, People's Choice Award",
      subtitle:
        "My team - Let There Be Light became one of the finalists of Blockchain Olympiad Bangladesh and won the People's Choice Award for day 3.",
      image: require("./assets/images/bcolbd.jpg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/17BerAxLbhwWAeZ3OkTVQSwBWnK2C_pwP/view?usp=sharing",
        // },
        {
          name: "Result Link",
          url: "https://bcolbd.org/uploads/pdf/BCOLBD%202022%20Finalist%20Team%20Student%20Category_Published.pdf",
        },
      ],
    },
    {
      title: "NSU YES! Entrepret Season 2 Finalist",
      subtitle: "Finalist of Entrepret Season 2 organized by NSU YES!",
      image: require("./assets/images/nsu_yes_s2_600.jpg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/1igmbWY-ao56j0vUWIA6v3UD9YP9yavTF/view?usp=sharing",
        // },
        //{
        //  name: 'Award Letter',
        //  url:
        //    'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        //},
        {
          name: "Result Link",
          url: "https://www.facebook.com/nsuyes/photos/pcb.10159377599900768/10159377577500768",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.ikramhasan.com/how-i-made-a-tictactoe-game-that-you-cannot-beat",
      title: "How I Made a TicTacToe Game That You Cannot Beat 🙅‍♂️",
      description:
        "A cross-platform app development framework + a 30 lines algorithm = Impossible Ai 😎",
    },
    {
      url: "https://blog.ikramhasan.com/best-vscode-settings-for-flutter-developers",
      title: "BEST VSCode Settings for Flutter Developers 🚀",
      description:
        "Settings that will help you in your app development journey. Enable these settings and take your flutter productivity to the next level.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/thanda-goru/embed/episodes/02--Does-Free-Will-Exist-e109g0m/a-a5fg025",
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880 01867697951",
  emailAddress: "ikramhasan.dev@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "ikramhasandev", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
