import { CompanyInfo, Service } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Dynamic Recruitment and Management Consultancy Limited (DRMC Ltd)",
  tagline: "Your trusted partner in workforce development and organizational excellence.",
  about: `Dynamic Recruitment and Management Consultancy Limited (DRMC Ltd.) is a Lagos-based human resource and management consultancy firm committed to bridging the gap between job seekers and employers.

We provide customized recruitment, training, and advisory solutions that help organizations attract, develop, and retain top talents.

Our team of seasoned professionals brings years of experience across multiple industries, ensuring that every client receives practical, innovative, and sustainable solutions to workforce and organizational challenges.

Whether you are a growing business seeking the right talent or an individual aiming to advance your career, we provide the tools, guidance, and opportunities to help you succeed.`,
  vision: "To be Nigeria’s most trusted and result-driven recruitment and management consultancy firm, empowering people and organizations to achieve excellence through strategic talent and capacity development.",
  mission: "To provide innovative recruitment, training, and management solutions that foster productivity, growth, and long-term success for our clients, while creating meaningful employment and development opportunities for professionals across Nigeria and beyond.",
  values: [
    {
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical standards in all our dealings — building trust with clients, partners, and candidates alike."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering outstanding services and measurable results through continuous improvement and innovation."
    },
    {
      title: "Professionalism",
      description: "We conduct our business with the highest level of competence, responsibility, and respect for every individual and organization we serve."
    },
    {
      title: "Innovation",
      description: "We embrace creativity and technology-driven approaches to recruitment, management, and training — ensuring relevance in an ever-changing business environment."
    },
    {
      title: "Collaboration",
      description: "We foster strong partnerships with clients and stakeholders, working together to achieve sustainable goals and shared success."
    },
    {
      title: "Empowerment",
      description: "We empower job seekers, employees, and organizations with knowledge, skills, and opportunities to reach their full potential."
    }
  ],
  contact: {
    address: "No 2, Martins Street, off Teju Osho Market, Oju-Elegba Road, Surulere, Lagos State, Nigeria.",
    emails: ["info.dynamicrmcltd@gmail.com", "hr@dynamicrmcltd.com.ng", "operations@dynamicrmcltd.com.ng"],
    phones: ["08034012264", "08138090286", "09060234049"],
    whatsapp: "09136073791"
  }
};

export const SERVICES: Service[] = [
  {
    id: "recruitment",
    title: "Recruitment & Staffing",
    shortDescription: "Connecting top talent with leading organizations.",
    fullDescription: "Our Recruitment & Staffing solution is designed to take the guesswork out of hiring. We leverage deep market insights and a robust network of professionals to connect your organization with candidates who possess not just the right skills, but the right cultural fit. From entry-level positions to C-suite executives, our rigorous screening process ensures you only see the best.",
    details: [
      "Permanent, temporary, and contract staffing solutions",
      "Executive search and headhunting",
      "Comprehensive background checks and verification",
      "Strategic talent acquisition planning"
    ],
    benefits: [
      "Reduce time-to-hire by up to 40%",
      "Minimize hiring risks with thorough vetting",
      "Access a hidden market of passive candidates",
      "Scale your workforce on demand"
    ],
    iconName: "Users",
    image: "https://i.ibb.co/JWmD4X2P/Dynamic-RMC-2-1.jpg"
  },
  {
    id: "hr-consultancy",
    title: "HR Consultancy",
    shortDescription: "Expert advice on HR policies and structures.",
    fullDescription: "Navigate the complexities of human resource management with confidence. Our consultancy services provide the architectural framework for a thriving workplace. We analyze your current HR health, identify gaps, and implement compliant, effective policies that drive employee engagement and operational efficiency.",
    details: [
      "Custom HR policy development and handbook creation",
      "Performance management system design",
      "Organizational restructuring and change management",
      "Compliance audits (Labor Law & Regulations)"
    ],
    benefits: [
      "Ensure full legal compliance",
      "Boost employee retention and satisfaction",
      "Streamline internal processes",
      "Create a performance-driven culture"
    ],
    iconName: "Briefcase",
    image: "https://i.ibb.co/rGp42nFs/Dynamic-RMC-3-1.jpg"
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    shortDescription: "Upskilling your workforce for better results.",
    fullDescription: "In a rapidly evolving business landscape, continuous learning is the key to competitiveness. Our training programs are bespoke, practical, and results-oriented. We don't just teach theory; we provide actionable tools that your teams can apply immediately to improve productivity and innovation.",
    details: [
      "Corporate training and retreats",
      "Soft skills workshops (Communication, Teamwork, EI)",
      "Employee onboarding and induction programs",
      "Leadership and management development"
    ],
    benefits: [
      "Bridge skill gaps effectively",
      "Increase employee motivation and loyalty",
      "Foster a culture of innovation",
      "Measurable ROI on training investment"
    ],
    iconName: "GraduationCap",
    image: "https://i.ibb.co/Kc1JgMFH/Dynamic-RMC-4-1.jpg"
  },
  {
    id: "career-dev",
    title: "Career Development",
    shortDescription: "Helping individuals achieve their career goals.",
    fullDescription: "For ambitious professionals, we offer more than just job placement. Our Career Development services act as a personal accelerator for your professional journey. Whether you are a fresh graduate or a seasoned manager looking to pivot, we provide the tools and coaching necessary to stand out in a crowded marketplace.",
    details: [
      "Professional CV and Cover Letter writing",
      "Mock interviews and preparation sessions",
      "Personalized job placement assistance",
      "One-on-one career coaching"
    ],
    benefits: [
      "Stand out to recruiters immediately",
      "Navigate career transitions smoothly",
      "Negotiate better compensation packages",
      "Build a long-term career roadmap"
    ],
    iconName: "TrendingUp",
    image: "https://i.ibb.co/dsKFZngH/Dynamic-RMC-5-1.jpg"
  },
  {
    id: "management-consulting",
    title: "Management Consulting",
    shortDescription: "Optimizing business processes and strategy.",
    fullDescription: "Drive sustainable growth with our strategic management consulting. We partner with leadership teams to solve complex business challenges. By analyzing your operations, strategy, and market position, we help you make data-driven decisions that improve profitability and operational resilience.",
    details: [
      "Business process improvement and optimization",
      "Strategic planning and execution",
      "Team optimization and role definition",
      "Change management and transformation"
    ],
    benefits: [
      "Identify and eliminate operational bottlenecks",
      "Align resources with strategic goals",
      "Improve decision-making speed",
      "Enhance overall business agility"
    ],
    iconName: "BarChart",
    image: "https://i.ibb.co/Kp5DbWY0/Dynamic-RMC-6-1.jpg"
  }
];

export const SYSTEM_PROMPT = `
You are DRMC-Bot, the intelligent Customer Care agent for Dynamic Recruitment and Management Consultancy Limited (DRMC Ltd).
Your tone should be professional, corporate, yet approachable and helpful.
Use the following company knowledge base to answer user queries:

Company Name: ${COMPANY_INFO.name}
Tagline: ${COMPANY_INFO.tagline}
About: ${COMPANY_INFO.about}
Mission: ${COMPANY_INFO.mission}
Vision: ${COMPANY_INFO.vision}
Values: ${COMPANY_INFO.values.map(v => v.title).join(", ")}
Location: ${COMPANY_INFO.contact.address}
Contact: Phones: ${COMPANY_INFO.contact.phones.join(", ")}, Email: ${COMPANY_INFO.contact.emails[0]}

Services Offered:
${SERVICES.map(s => `- ${s.title}: ${s.shortDescription} (Details: ${s.details.join(", ")})`).join("\n")}

Rules:
1. Always be polite and professional.
2. Keep answers concise but informative.
3. If the user signifies interest in any service, asks to book, or asks how to proceed, YOU MUST provide the direct booking link using exactly this format: [Book This Service](/book-service).
4. If a user asks about job applications, submitting a CV, or looking for work, direct them using this link format: [Job Application Portal](/apply/job-application).
5. If they want to register for training, use: [Training Registration](/apply/training-registration).
6. If they need to contact support or find the office location, you can direct them to: [Contact Us](/contact).
7. If you don't know the answer based on the provided info, politely suggest they contact the support team.
`;