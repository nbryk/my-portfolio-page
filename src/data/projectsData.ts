export const projectsData = [
  {
    id: "rick-and-morty",
    title: "Rick and Morty Character Viewer",
    shortDescription:
      "Веб-додаток для пошуку та перегляду персонажів із серіалу.",
    image: "/images/projects/rickandmorty-desk-1.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "External API",
    ],
    githubLink: "https://github.com/nbryk/rick-and-morty-app",
    demoLink: "https://rick-and-morty-app-omega-nine.vercel.app/",
    longDescription:
      "Цей проєкт був створений для відпрацювання навичок роботи з React, Next.js та асинхронними запитами. Основна мета — реалізувати динамічний пошук, фільтрацію та пагінацію персонажів, а також відобразити детальну інформацію про кожного з них.",
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
    shortDescription: "online gadget store",
    image: "/images/projects/ng/ng-store-desk-1-light.webp",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "TailwindCSS",
      "Swiper",
      "radix-ui/react",
    ],
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
          The project features a complete API layer with dedicated functions and async data fetching with loading states. For robust routing and navigation, it uses React Router DOM for dynamic routes, protected navigation with breadcrumbs, and custom 404 error handling. Code quality is maintained through TypeScript strict mode and a pre-commit hook setup with Husky, ESLint, and Prettier.`,
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
    id: "another-project",
    title: "Another Project Title",
    shortDescription: "short description",
    image: "/images/projects/rickandmorty-desk-1.webp",
    technologies: ["Технологія 1", "Технологія 2", "Технологія 3"],
    githubLink: "https://github.com/...",
    demoLink: "https://another-project.vercel.app/",
    longDescription: "detailed description",
    detailedImages: ["/images/rickandmorty-mobile-1.webp"],
  },
];
