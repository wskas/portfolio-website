import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        name: 'Sentiment Analysis Dashboard',
        technologies: ['React', 'TypeScript', 'CSS'],
        description: "A user-friendly dashboard aimed at solving every gamer's need to manually browse game reviews for decision making. Automated data analysis pipeline from scraping game review to displaying review analytics",
        githubLink: 'https://github.com/Lucid-H2O/Final-Year-Project',
    },
    {
        id: 2,
        name: 'Portfolio Website',
        technologies: ['Node.js', 'React', 'Tailwind CSS'],
        description: 'A single page portfolio website built using React and Tailwind CSS. The website features a clean and modern design, showcasing my projects, skills, experiences and contact information in an organized manner.',
        githubLink: 'https://github.com/wskas/portfolio-website',
        liveLink: 'https://wskas.github.io/portfolio-website/',
    },
    {
        id: 3,
        name: 'Big Two Card Game',
        technologies: ['Java', 'JavaGUI'],
        description: 'A interactive Big Two card game built using Java and JavaGUI. The game features a user-friendly interface, allowing players to enjoy the classic card game with friends.',
        githubLink: 'https://github.com/wskas/OOP-BigTwo',
    },

];