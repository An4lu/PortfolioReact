import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Primeiro Nome : ',
    description: 'Ana',
  },

  {
    id: 2,
    title: 'Ultimo Nome : ',
    description: 'Dourado',
  },

  {
    id: 3,
    title: 'Idade : ',
    description: '19 Anos',
  },

  {
    id: 4,
    title: 'Nacionalidade : ',
    description: 'Brasileira',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Ativo',
  },

  {
    id: 6,
    title: 'Endereço : ',
    description: 'Cotia',
  },

  {
    id: 7,
    title: 'Github : ',
    description: 'An4lu',
  },

  {
    id: 8,
    title: 'Celular : ',
    description: '(11) 933604856',
  },

  {
    id: 9,
    title: 'Email : ',
    description: 'anabluoliveira@outlook.com',
  },

  {
    id: 10,
    title: 'Línguas : ',
    description: 'Português, Inglês e Espanhol',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Anos de <br /> Experiência',
  },

  {
    id: 2,
    no: '10+',
    title: 'Projetos <br /> Completos',
  },

  {
    id: 3,
    no: '5+',
    title: 'Cursos <br /> Complementares',
  },

  {
    id: 4,
    no: '5+',
    title: 'Linguagens <br /> Dominadas',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'Web Developer <span> Estágio </span>',
    desc: 'Desenvolvimento e manutenção de soluções Front-end com SAPUI5, JavaScript, TypeScript, ReactJS, Sass, Styled Componentes, Stitches CSS e Radix.',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - 2023',
    title: 'Ensino Médio com Técnico em Desenvolvimento de Sistemas <span> ETEC </span>',
    desc: 'Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017 - 2021',
    title: 'Matemática <span> Kumon </span>',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'ReactJS <span> Rocketseat </span>',
    desc: '',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'SAP UI5 / Fiori <span> freeCodeCamp </span>',
    desc: '',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'JavaScript ES6 <span> Origamid </span>',
    desc: '',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '39',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '55',
  },

  {
    id: 5,
    title: 'MySQL',
    percentage: '90',
  },

  {
    id: 6,
    title: 'React',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '55',
  },

  {
    id: 8,
    title: 'C#',
    percentage: '70',
  },

  {
    id: 9,
    title: 'Typescript',
    percentage: '70',
  },

  {
    id: 10,
    title: 'Python',
    percentage: '20',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Edição de Foto',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Paint Tool Sai',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'No preview',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://portfolio-react-an4lu.vercel.app',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Projeto GreenTech',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aplicativo Reciclagem',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Hackathon',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Prototipagem',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'No preview',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Edição de Video',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'After Effects e Filmora',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'No preview',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Projeto TCC',
    details: [
      {
        title: 'Project : ',
        desc: 'Website para Finanças',
      },
      {
        title: 'Client : ',
        desc: 'Etec',
      },
      {
        title: 'Language : ',
        desc: 'Prototipo, ReactJS',
      },
      {
        title: 'Preview : ',
        desc: 'https://encr.pw/prototipoTCC',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Apps em C#',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Calculadora',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'github.com/An4lu/Projeto-Calc',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
