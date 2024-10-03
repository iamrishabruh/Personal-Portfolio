// Header information for the website, including homepage URL and title.
const header = {
    homepage: 'https://rishabhchouhan.netlify.app', // Personal portfolio homepage URL.
    title: 'RC', // Title or abbreviation for display on the website header.
  }
  
  // Information about the person, including name, role, descriptions, and social media links.
  const about = {
    name: 'Rishabh Chouhan', // Full name.
    role: 'Software Developer', // Professional role or title.
    descriptions: [
      'CEO of Reachmind',
      'Passionate software developer', // Series of brief descriptions about the person.
      'Lifelong learner',
      '$DADDY holder',
      'Financial literacy advocate',
      'Active community participant',
      'Challenge-driven problem solver',

    ],
    resume: 'https://drive.google.com/file/d/1yU0CnZKHAxkysUGdmzFYlrkrDagtS0bC/view?usp=sharing', // URL to resume.
    social: {
      linkedin: 'https://www.linkedin.com/in/chouhanrishabh/', // LinkedIn profile link.
      github: 'https://github.com/iamrishabruh', // GitHub profile link.
    },
  }
  
  // List of projects showcasing skills and experience. Each project includes name, description, technologies used, and links to demos or live previews.
  const projects = [
    {
      name: 'Reachmind - Startup AI Chatbot SaaS', // Project name.
      description:
        'Designed customizable AI chatbots using TypeScript, HTML/CSS, and OpenAI API, automating 75% of customer inquiries. Enhanced client acquisition through data scraping (Python) and scalable email automation (Node.js, Docker), boosting response rates with personalized email content and engagement analytics using TensorFlow.', // Brief description of the project and impact.
      stack: ['Node.js', 'TypeScript', 'Docker', 'TensorFlow'], // Technologies used in the project.
      videoDemo: 'https://www.youtube.com/watch?v=0WnG67pE9GE', // Link to a video demo.
      livePreview: 'https://reachmindllc.com', // Live preview link.
    },
    {
      name: 'Drug Interaction Proof of Concept', // Project name.
      description:
        'Integrated the NIH Drug Interaction API into the flagship Kaiser Permanente iOS app, providing real-time drug interaction insights for 9 million daily users. Developed a proof-of-concept UI/UX using Swift and Xcode, adhering to Kaisers CSS guidelines for a seamless experience.', // Brief description of the project and impact.
      stack: ['Swift', 'RESTful API', 'Xcode', 'XCTest'], // Technologies used in the project.
      videoDemo: 'https://drive.google.com/file/d/1JxK2rb48zOS-sHqvnYMG1pluhMhzchWg/view', // Link to a video demo.
      sourceCode: 'https://github.com/iamrishabruh/DrugInteractionFeature', // Link to the source code repository.
      livePreview: 'https://drive.google.com/file/d/1JxK2rb48zOS-sHqvnYMG1pluhMhzchWg/view', // Live preview link.
    },
    {
      name: 'Personal Portfolio Website', // Project name.
      description:
        'I built a personal portfolio website using JavaScript, CSS, HTML, and React to effectively showcase my skills and projects. By utilizing modern web development practices, I focused on clean code and maintainability, demonstrating my expertise in front-end technologies and ability to create visually appealing user interfaces.', // Brief description of the project and impact.
      stack: ['React', 'Node.js', 'Git', 'JavaScript'], // Technologies used in the project.
      sourceCode: 'https://github.com/iamrishabruh/portfolio', // Link to the source code repository.
      livePreview: 'https://rishabhchouhan.netlify.app/', // Live preview link.
    },
  ]
  
  // Leadership experience, each entry includes a role, description, and related links.
  const leaderships = [
    {
      name: 'Community Ambassador', // Leadership role.
      description:
        'I organized multiple three-day community events at locations like Patel Brothers and retirement homes, significantly boosting South Asian participation in health pre-screenings. Through effective outreach campaigns and health fairs, I raised awareness about clinical trial opportunities and engaged the public in vital health initiatives.', // Brief description of leadership experience and impact.
      stack: ['Community Outreach', 'Public Speaking', 'Project Coordination', '2023 - Present'], // Key skills and time period for the role.
      instaDemo: 'https://www.instagram.com/stories/highlights/17855570211205717/', // Instagram link related to this role.
      livePreview: 'http://friends.careaccess.com/6DzP29', // External preview link.
    },
    {
      name: 'CSA Achievement Award', // Leadership role.
      description:
        'National recognition by Future Business Leaders of America for completing over 500 hours of community service during four years as an FBLA member.', // Brief description of the award.
      stack: ['Volunteer', 'MealsByGrace', 'Sewa International', 'Shelters'], // Key skills and organizations involved.
      livePreview: 'https://georgiafbla.org/community-service-awards-csa/', // External link to more information.
    },
    {
      name: 'Founder of Finance & Investment Club', // Leadership role.
      description:
        'I founded and led the Finance and Investment Club at South Forsyth High School, growing membership to over 100 students and organizing events with prominent speakers, including the former CEO of Stackfolio. I fostered sustainability by mentoring successors, ensuring a lasting impact on financial literacy and investment education.', // Brief description of the role and impact.
      stack: ['Leadership', 'Teamwork', 'Organization', '2020-2022'], // Key skills and time period for the role.
      livePreview: 'https://linktr.ee/sfhsfinance/', // External preview link.
    },
  ]
  
  // List of key technical and soft skills.
  const skills = [
    'C', // Programming language skill.
    'C++',
    'Python',
    'JavaScript',
    'React',
    'SQL',
    'Git',
    'CI/CD',
    'Shell',
    'Swift',
    'XCTest',
    'HTML',
    'Agile',
    'Kubernetes',
    'Pandas',
    'NumPy',
    'Node.js',
    'Bash',
    'Jenkins',
    'TensorFlow',
    'Teamwork', // Soft skill.
  ]
  
  // Contact information including email and phone number.
  const contact = {
    email: 'rchouhan2@student.gsu.edu', // Contact email address.
    phoneNumber: '+16786759397', // Contact phone number.
  }
  
  // Exporting all defined objects so they can be used in other parts of the codebase.
  export { header, about, projects, skills, contact, leaderships }