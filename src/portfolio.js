import fetchGitHubRepos from './services/githubService';

// Information about the person, including name, role, descriptions, and social media links.
const about = {
  name: 'Rishabh Chouhan', 
  role: 'Software Developer', 
  descriptions: [
    'Software Engineer.',
    'Passionate learner.',
    'Community leader.',
    'Literacy advocate.',
    'Active volunteer.',
    'Resilient entrepreneur.',
    'Open minded.',
  ],
  resume: 'https://docs.google.com/document/d/1SakbgqbsVfTRG0LEvArHYuL_DI5uE335T5cP2TNbZPE/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/chouhanrishabh/', 
    github: 'https://www.github.com/iamrishabruh', 
  },
}

// List of projects - this will be populated dynamically from GitHub
const projects = [];

// Function to fetch and update projects from GitHub
export const updateProjects = async () => {
  try {
    const githubProjects = await fetchGitHubRepos(process.env.REACT_APP_GITHUB_USERNAME || 'iamrishabruh');
    const updatedProjects = [
      // Keep your existing featured projects
      {
        name: 'AI Chatbot SaaS',
        description:
          'Designed customizable AI chatbots using TypeScript, HTML/CSS, and OpenAI API, automating 75% of customer inquiries. Enhanced client acquisition through data scraping (Python) and scalable email automation (Node.js, Docker), boosting response rates with personalized email content and engagement analytics using TensorFlow.',
        stack: ['Node.js', 'React', 'Docker', 'TensorFlow'],
        videoDemo: 'https://vimeo.com/1073437538',
      },
      // Add GitHub projects
      ...githubProjects,
    ];
    // Update the projects array by pushing new items
    projects.length = 0; // Clear the array
    projects.push(...updatedProjects); // Add new items
  } catch (error) {
    console.error('Error updating projects:', error);
  }
};

// List of key technical and soft skills.
const skills = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Flutter (Dart)',
    'HTML/CSS',
    'Tailwind CSS',
    'Bootstrap',
    'PWA'
  ],
  backend: [
    'C++',
    'Python',
    'Node.js',
    'Express.js',
    'Solidity',
    'SQL',
    'JWT',
    'Go',
    'MongoDB',
    'TimescaleDB'
  ],
  tools: [
    'Linux',
    'Git',
    'VS Code',
    'Xcode',
    'Docker',
    'Azure DevOps',
    'Jenkins',
    'Postman',
    'Apache Kafka',
    'Apache Spark'
  ],
  other: [
    'Swift',
    'XCTest',
    'Kotlin',
    'TensorFlow',
    'PyTorch',
    'Pandas',
    'NumPy',
    'Langchain'
  ]
};

// Contact information including email and phone number.
const contact = {
  email: 'rchouhan.network@gmail.com', 
  phoneNumber: '+16786759397', 
}

// Initialize projects
updateProjects();

// Leadership experience, each entry includes a role, description, and related links.
const leaderships = [
  {
    name: 'Community Ambassador',
    description:
      'I organized multiple three-day community events at locations like Patel Brothers, NAACP, Northside Hospital, and senior retirement homes, significantly boosting South Asian & African American participation in Lp(a) pre-screenings. Through effective outreach campaigns and health fairs, I raised awareness about clinical trial opportunities and engaged 1000+ people in vital health initiatives.',
    stack: ['Community Outreach', 'Public Speaking', 'Project Coordination', '2023 - Present'],
    instaDemo: 'https://www.instagram.com/stories/highlights/17855570211205717/',
    livePreview: 'http://friends.careaccess.com/6DzP29',
  },
  {
    name: 'CSA Achievement Award',
    description:
      'National recognition by Future Business Leaders of America for completing over 500 hours of community service during four years as an FBLA member.',
    stack: ['Volunteer', 'MealsByGrace', 'SEWA International', 'Shelters'],
    livePreview: 'https://georgiafbla.org/community-service-awards-csa/',
  },
  {
    name: 'Outlier AI University Coder Push',
    description:
      'Organized and led a 2 1/2 day Outlier AI University Coders event, engaging students in interactive onboarding, live Q&A sessions, and team-based coding challenges. Delivered a prerecorded demo and provided hands-on guidance to ensure over 45 participants successfully completed the program. Demonstrated skills in technical communication, event management, and fostering a collaborative learning environment.',
    stack: ['Leadership', 'Generative AI', 'Organization', 'Communication'],
    livePreview: 'https://outlier.ai/',
  },
  {
    name: 'AI Fintech Club (AIFTC) - GSU',
    description:
      "Founded Georgia State University's first AI-finance club. Secured sponsorships (e.g., Perplexity), hosted industry guest events, and grew the community to 50+ active members in a single semester.",
    stack: ['Leadership', 'Finance', 'AI Education', '2025 – Present'],
    livePreview: 'https://pin.gsu.edu/organization/gsuaiftc/',
  },
  {
    name: 'Perplexity Campus Strategist & AI Business Fellow',
    description:
      "Led strategic student engagement as Georgia's State Lead. Drove 500+ student sign-ups, facilitated growth partnerships impacting 50,000+ students, and collaborated with HQ to execute campus-level activations.",
    stack: ['Growth Strategy', 'Leadership', 'Community Engagement', '2025 – Present'],
    livePreview: 'https://www.perplexity.ai/',
  },
  {
    name: 'Finance & Investment Club - SFHS',
    description:
      "Founded and scaled a 100+ member finance and investment club in high school. Led workshops, organized student panels, and implemented community-focused financial literacy initiatives.",
    stack: ['Finance', 'Leadership', 'Workshop Facilitation', '2020 – 2022'],
    livePreview: 'https://linktr.ee/sfhsfinance/',
  }
]

// Exporting all defined objects so they can be used in other parts of the codebase.
export { about, projects, skills, contact, leaderships }