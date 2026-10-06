import fisioboxMobile from '../assets/projects/fisiobox/mobile.jpeg';
import fisioboxDesktop from '../assets/projects/fisiobox/desktop.png';
import fisioboxScreenshot03 from '../assets/projects/fisiobox/03.png';
import luminaMobile from '../assets/projects/lumina/mobile.png';
import luminaDesktop from '../assets/projects/lumina/desktop.png';
import luminaScreenshot03 from '../assets/projects/lumina/03.png';
import jangeirasMobile from '../assets/projects/jangeiras/mobile.jpeg';
import jangeirasDesktop from '../assets/projects/jangeiras/desktop.png';
import jangeirasScreenshot03 from '../assets/projects/jangeiras/03.png';

export const projects = [
  {
    number: '01',
    slug: 'fisiobox',
    name: 'FISIOBOX',
    category: 'Website',
    year: '2026',

    description: 'Design, desenvolvimento e estratégia digital para apresentar a FISIOBOX numa experiência web clara e funcional.',

    services: [
      'Website design',
      'Development',
      'Digital strategy',
    ],

    website: '',
    instagram: '',

    images: [
      fisioboxMobile,
      fisioboxDesktop,
      fisioboxScreenshot03,
    ],
  },

  {
    number: '02',
    slug: 'gymnafiel',
    name: 'GYMNAFIEL',
    category: 'Digital presence',
    year: '2026',

    description: 'Direção de conteúdo e presença digital para comunicar a identidade da GYMNAFIEL nas redes sociais.',

    services: [
      'Social media',
      'Content direction',
      'Digital presence',
    ],

    website: '',
    instagram: '',

    images: [
      '/projects/gymnafiel/mobile.jpg',
      '/projects/gymnafiel/desktop.jpg',
      '/projects/gymnafiel/screenshot-01.jpg',
      '/projects/gymnafiel/screenshot-02.jpg',
    ],
  },

  {
    number: '03',
    slug: 'luminabemestar',
    name: 'LUMINABEMESTAR',
    category: 'Website',
    year: '2026',

    description: 'Design e desenvolvimento de uma experiência web com foco na identidade da Lumina Bem-Estar.',

    services: [
      'Website design',
      'Development',
      'Brand experience',
    ],

    website: '',
    instagram: '',

    images: [
      luminaMobile,
      luminaDesktop,
      luminaScreenshot03,
    ],
  },

  {
    number: '04',
    slug: 'barbearia-joao-angeiras',
    name: 'BARBEARIA JOÃO ANGEIRAS',
    category: 'Website',
    year: '2026',

    description: 'Design e desenvolvimento de uma experiência digital para a Barbearia João Angeiras.',

    services: [
      'Website design',
      'Development',
      'Digital experience',
    ],

    website: '',
    instagram: '',

    images: [
      jangeirasMobile,
      jangeirasDesktop,
      jangeirasScreenshot03,
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);