import fetchGitHubRepos from './services/githubService';

// Header information for the website, including homepage URL and title.
const header = {
    homepage: 'https://rishabhchouhan.netlify.app',
    title: 'RC',
  }
  
  // Information about the person, including name, role, descriptions, and social media links.
  const about = {
    name: 'Rishabh Chouhan', 
    role: 'Software Developer', 
    descriptions: [
      'Software Engineer',
      'Lifelong curious learner',
      'Community leader',
      'Literacy advocate',
      'Active volunteer',
      'Resilient innovator',
      'Intellectual',

    ],
    resume: 'https://docs.google.com/document/d/1SakbgqbsVfTRG0LEvArHYuL_DI5uE335T5cP2TNbZPE/edit?usp=sharing', // URL to resume.
    social: {
      linkedin: 'https://www.linkedin.com/in/chouhanrishabh/', 
      github: 'https://github.com/iamrishabruh', 
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
            'Designed customizable AI chatbots using TypeScript, HTML/CSS, and OpenAI API, automating 75% of customer inquiries. Enhanced client acquisition through data scraping (Python) and scalable email automation (Node.js, Docker), boosting response rates with personalized email content and engagement analytics using TensorFlow.', // Brief description of the project and impact.
          stack: ['Node.js', 'TypeScript', 'Docker', 'TensorFlow'], 
          videoDemo: 'https://www.youtube.com/watch?v=0WnG67pE9GE', 
          livePreview: 'https://reachmindllc.com', 
        },
        {
          name: 'Drug Interaction Checker',
          description:
            'Integrated the NIH Drug Interaction API into the flagship Kaiser Permanente iOS app, providing real-time drug interaction insights for 9 million daily users. Developed a proof-of-concept UI/UX using Swift and Xcode, adhering to Kaisers CSS guidelines for a seamless experience.', // Brief description of the project and impact.
          stack: ['Swift', 'RESTful API', 'Xcode', 'XCTest'], 
          videoDemo: 'https://drive.google.com/file/d/1JxK2rb48zOS-sHqvnYMG1pluhMhzchWg/view', 
          sourceCode: 'https://github.com/iamrishabruh/drug_interaction_checker', 
          livePreview: 'https://drive.google.com/file/d/1JxK2rb48zOS-sHqvnYMG1pluhMhzchWg/view', 
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
  }
  
  // List of key technical and soft skills.
  const skills = [
    'C', 
    'C++',
    'Python',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Swift',
    'React.js',
    'Bootstrap',
    'Tailwind.css',
    'Pandas',
    'NumPy',
    'Django',
    'XCTest',
    'Git',
    'Shell',
    'Node.js',
    'Postman',
    'Jenkins',
    'Kubernetes',
    'Qiskit',
    'Docker'
  ]
  
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
        'I organized multiple three-day community events at locations like Patel Brothers and senior retirement homes, significantly boosting South Asian participation in health pre-screenings. Through effective outreach campaigns and health fairs, I raised awareness about clinical trial opportunities and engaged the public in vital health initiatives.', // Brief description of leadership experience and impact.
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
        'Organized and led a 2.5 day Outlier AI University Coders event, engaging students in interactive onboarding, live Q&A sessions, and team-based coding challenges. Delivered a prerecorded demo and provided hands-on guidance to ensure over 25 participants successfully completed the program. Demonstrated skills in technical communication, event management, and fostering a collaborative learning environment.', 
      stack: ['Leadership', 'Generative AI', 'Organization', 'Communication'], 
      livePreview: 'https://www.linkedin.com/feed/update/urn:li:activity:7263324912482758656/', 
    },
  ]
  
  // Exporting all defined objects so they can be used in other parts of the codebase.
  export { header, about, projects, skills, contact, leaderships }