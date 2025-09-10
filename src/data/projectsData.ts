export const projectsData = [
  {
    id: "rick-and-morty",
    title: "Rick and Morty Character Viewer",
    shortDescription:
      "A web application for searching and viewing characters from the series.",
    image: "/images/projects/rickandmorty-desk-1.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "Rick and Morty API",
    ],
    githubLink: "https://github.com/nbryk/rick-and-morty-app",
    demoLink: "https://rick-and-morty-app-omega-nine.vercel.app/",
    longDescription: `
      A dynamic web application for searching and displaying information about 'Rick and Morty' characters with a unique interface.

      The project was built using Next.js, with React and TypeScript for efficient server-side routing and rendering.

      Key features include dynamic search, filtering by status, gender, and location, as well as pagination for convenient navigation. Data is fetched via asynchronous API requests, with client-side optimization.

      Styling was implemented using CSS Modules, with Flexbox and CSS Grid to create a fully responsive and intuitive user interface.`,
    detailedImages: [
      "/images/projects/rickandmorty-desk-1.webp",
      "/images/projects/rickandmorty-tablet-1.webp",
      "/images/projects/rickandmorty-mobile-1.webp",
      "/images/projects/rickandmorty-desk-2.webp",
      "/images/projects/rickandmorty-tablet-2.webp",
      "/images/projects/rickandmorty-mobile-2.webp",
    ],
  },
  {
    id: "nice-gadgets",
    title: "Nice Gadgets Store",
    shortDescription:
      "Fully responsive e-commerce platform with unique UI/UX, team-based frontend development.",
    image: "/images/projects/ng/ng-store-desk-1-light.webp",
    technologies: ["React", "TypeScript", "TailwindCSS", "Radix UI"],
    githubLink: "https://github.com/fs-apr25-girlpower/nice-gadgets-frontend",
    demoLink: "https://fs-apr25-girlpower.github.io/nice-gadgets-frontend/#/",
    longDescription: `
    This project is a fully functional e-commerce application built to demonstrate core front-end development skills in a team environment.
      
    Key features include:
      - Dynamic Product Catalog: Users can browse products across three categories with advanced filtering and sorting.
      - Interactive UI/UX: The interface features custom product sliders and unique, user-friendly empty states for the shopping cart and favorites page.
      - State Management: The shopping cart and favorites list persist locally, allowing users to return to their selections after closing the browser.
      - Unique Features: The application includes a distinctive, draggable UnicornAssistant for an engaging user experience.
      - Responsive Design: A mobile-first approach ensures a seamless experience on all devices.

    Technical Stack & Implementation:
      - The project features a complete API layer with dedicated functions and async data fetching with loading states.
      - For robust routing and navigation, it uses React Router DOM for dynamic routes, protected navigation with breadcrumbs, and custom 404 error handling.
      - Code quality is maintained through TypeScript strict mode and a pre-commit hook setup with Husky, ESLint, and Prettier.`,
    detailedImages: [
      "/images/projects/ng/ng-store-all-1.webp",
      "/images/projects/ng/ng-store-desk-1.webp",
      "/images/projects/ng/ng-store-desk-2.webp",
      "/images/projects/ng/ng-store-desk-3.webp",
      "/images/projects/ng/ng-store-desk-details.webp",
      "/images/projects/ng/ng-store-desk-cart.webp",
    ],
  },
  {
    id: "todo-app",
    title: "Todo App",
    shortDescription:
      "A simple and intuitive task management application, demonstrating core CRUD functionality.",
    image: "/images/projects/todo/todo-desk-1.webp",
    technologies: ["React", "Typescript", "RESTful API (fetch)"],
    githubLink: "https://github.com/nbryk/todo-app",
    demoLink: "https://nbryk.github.io/todo-app/",
    longDescription: `
    This is a classic task management application focused on implementing core CRUD (Create, Read, Update, Delete) functionality.

    The application supports a range of features for efficient task handling, including adding, deleting, and updating tasks.

    Users can edit task titles with a double-click, toggle individual task status, and perform bulk actions via a "Toggle All" button.

    The app also features keyboard shortcuts for saving and canceling edits, providing a seamless user experience.`,
    detailedImages: [
      "/images/projects/todo/todo-desk-1.webp",
      "/images/projects/todo/todo-desk-2.webp",
      "/images/projects/todo/todo-desk-3.webp",
      "/images/projects/todo/todo-desk-4.webp",
    ],
  },
  {
    id: "bang-olufsen",
    title: "Bang & Olufsen landing page",
    shortDescription:
      "A responsive landing page based on a clean and elegant Figma design, showcasing a pixel-perfect layout and smooth CSS animations",
    image: "/images/projects/bang-olufsen/bang-olufsen-tablet-1.webp",
    technologies: ["HTML5", "SCSS (Sass)", "Parcel"],
    githubLink: "https://github.com/nbryk/bang_and_olufsen_landing_page",
    demoLink: "https://nbryk.github.io/bang_and_olufsen_landing_page/",
    longDescription: `
    This single-page landing site was built from a Figma design mockup, with a focus on achieving pixel-perfect implementation.

    I developed a fully responsive layout that provides a seamless user experience on all devices - from desktop to mobile.

    The page also features smooth CSS animations to enhance visual appeal and user interaction.`,
    detailedImages: [
      "/images/projects/bang-olufsen/bang-olufsen-desk-mobile-1.webp",
      "/images/projects/bang-olufsen/bang-olufsen-desk-2.webp",
      "/images/projects/bang-olufsen/bang-olufsen-tablet-2.webp",
      "/images/projects/bang-olufsen/bang-olufsen-tablet-3.webp",
      "/images/projects/bang-olufsen/bang-olufsen-desk-3.webp",
    ],
  },
  {
    id: "interactive-user-table",
    title: "Interactive User Table",
    shortDescription: " Interactive User Table: Sort & Filter",
    image: "/images/projects/interactive-user-table/user-table-desk-1.webp",
    technologies: ["Rect", "TypeScript", "RESTfull API", "SCSS Sass"],
    githubLink: "https://github.com/nbryk/interactive-user-table",
    demoLink: "https://nbryk.github.io/interactive-user-table/",
    longDescription: `
    Implemented URL search parameters to persist all applied filters and sorting options, ensuring shareable and savable views.

    Developed a Century Filter, allowing users to select multiple or all centuries.

    Enabled table sorting by name, gender, birth year, and death year via clickable TH arrows.`,
    detailedImages: [
      "/images/projects/interactive-user-table/user-table-desk-1.webp",
      "/images/projects/interactive-user-table/user-table-tablet-mobile-1.webp",
      "/images/projects/interactive-user-table/user-table-desk-2.webp",
      "/images/projects/interactive-user-table/user-table-desk-3.webp",
      "/images/projects/interactive-user-table/user-table-desk-4.webp",
    ],
  },
];
