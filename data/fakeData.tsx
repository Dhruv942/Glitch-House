// Define the User type
export interface User {
  id: string;
  name: string;
  image: string;
  bio: string;
  projects: string[];
  topic: string;
  game: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Full Stack Developer from NYC',
    projects: ['Project A', 'Project B'],
    topic: 'Web Development',
    game: 'Valorant',
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'UI/UX Designer from LA',
    projects: ['Design 101', 'UI/UX Prototype'],
    topic: 'Design',
    game: 'Among Us',
  },
  {
    id: '3',
    name: 'Amit Patel',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Mobile Dev from Ahmedabad',
    projects: ['Mobile App A', 'E-Commerce App'],
    topic: 'Mobile Development',
    game: 'PUBG',
  },
  {
    id: '4',
    name: 'Liam Johnson',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    bio: 'Data Scientist from Boston',
    projects: ['ML Model for Predictions', 'Data Analysis Dashboard'],
    topic: 'Data Science',
    game: 'Minecraft',
  },
  {
    id: '5',
    name: 'Olivia Williams',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    bio: 'Product Manager from London',
    projects: ['Product Roadmap', 'Market Analysis Report'],
    topic: 'Product Management',
    game: 'Fortnite',
  },
  {
    id: '6',
    name: 'Ethan Brown',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    bio: 'Cloud Architect from Toronto',
    projects: ['Cloud Infrastructure Setup', 'Kubernetes Deployment'],
    topic: 'Cloud Computing',
    game: 'Call of Duty',
  },
  {
    id: '7',
    name: 'Sophia Davis',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    bio: 'Blockchain Developer from Sydney',
    projects: ['Blockchain for Finance', 'Smart Contract Development'],
    topic: 'Blockchain Technology',
    game: 'Apex Legends',
  },
  {
    id: '8',
    name: 'James Miller',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    bio: 'Cybersecurity Specialist from Berlin',
    projects: ['Security Audit', 'Penetration Testing'],
    topic: 'Cybersecurity',
    game: 'Overwatch',
  },
  {
    id: '9',
    name: 'Isabella Moore',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    bio: 'Machine Learning Engineer from Paris',
    projects: ['AI Model for Recommendation System', 'Natural Language Processing'],
    topic: 'AI & Machine Learning',
    game: 'Rocket League',
  },
  {
    id: '10',
    name: 'Benjamin Taylor',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    bio: 'Frontend Developer from Chicago',
    projects: ['Website Redesign', 'E-commerce Platform'],
    topic: 'Frontend Development',
    game: 'League of Legends',
  },
  {
    id: '11',
    name: 'Charlotte Harris',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    bio: 'Digital Marketing Specialist from Vancouver',
    projects: ['SEO Strategy', 'Social Media Campaign'],
    topic: 'Digital Marketing',
    game: 'The Witcher 3',
  },
  {
    id: '12',
    name: 'Daniel Walker',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    bio: 'Game Developer from Tokyo',
    projects: ['3D Game Engine', 'Multiplayer Shooter Game'],
    topic: 'Game Development',
    game: 'Valorant',
  },
  {
    id: '13',
    name: 'Ava King',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    bio: 'Software Engineer from Seattle',
    projects: ['Web Scraping Tool', 'API Integration'],
    topic: 'Software Engineering',
    game: 'Minecraft',
  },
  {
    id: '14',
    name: 'William Scott',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    bio: 'DevOps Engineer from Sydney',
    projects: ['CI/CD Pipeline Setup', 'Containerization'],
    topic: 'DevOps',
    game: 'CS:GO',
  },
  {
    id: '15',
    name: 'Lily Carter',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Product Designer from Melbourne',
    projects: ['Wireframing', 'Prototyping for New App'],
    topic: 'Product Design',
    game: 'Stardew Valley',
  }
];
