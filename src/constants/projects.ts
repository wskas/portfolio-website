import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        name: 'Sentiment Analysis Dashboard',
        technologies: ['React', 'TypeScript', 'CSS'],
        description: "A user-friendly dashboard aimed at solving every gamer's need to manually browse game reviews for decision making. Automated data analysis pipeline from scraping game review to displaying review analytics",
        link: 'https://github.com/Lucid-H2O/Final-Year-Project',
    },
    {
        id: 2,
        name: 'Project Two',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        description: 'A brief description of Project Two.',
        link: '#',
    },
    {
        id: 3,
        name: 'Big Two Card Game',
        technologies: ['Java', 'JavaGUI'],
        description: 'A interactive Big Two card game built using Java and JavaGUI. The game features a user-friendly interface, allowing players to enjoy the classic card game with friends.',
        link: 'https://github.com/wskas/OOP-BigTwo',
    },

];