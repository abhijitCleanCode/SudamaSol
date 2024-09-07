import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "projects++",
      icon: web,
    },
    {
      title: "Happy clients++",
      icon: mobile,
    },
    {
      title: "Experience++",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Development",
      company_name: "Starbucks",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Web Development",
        "App Development",
        "UI/UX Design",
        "Graphics Design",
      ],
    },
    {
      title: "HR Solutions",
      company_name: "Tesla",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [],
    },
    {
      title: "Saas Based Product",
      company_name: "Shopify",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [],
    },
    {
      title: "Software Testing",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [],
    },
    {
      title: "Video Editing",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [],
    },
    {
      title: "Blending",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [],
    },
    {
      title: "Extra Services",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Training",
        "Internship",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Founder and CEO, Sudama Sol Pvt Ltd",
      name: "Sudarshan Nath Mazumdar",
      designation: "+91 99570 52223",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Co-Founder, Sudama Sol Pvt Ltd",
      name: "Suprodip Bhattercharjee",
      designation: "+91 70024 70151",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Co-Founder and CTO, Sudama Sol Pvt Ltd",
      name: "Abhijit Singh",
      designation: "+91 99570 52223",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
      "Co-Founder and CFO, Sudama Sol Pvt Ltd",
      name: "Ayush Roy",
      designation: "+91 94012 10890",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  