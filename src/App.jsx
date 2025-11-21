import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  X, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  User, 
  Code,
  Menu,
  MapPin,
  Sun,
  Moon,
  GraduationCap,
  Award,
  Image as ImageIcon,
  Layers,
  Cpu,
  Globe,
  Terminal,
  Database,
  Server,
  Cloud,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Calendar
} from 'lucide-react';

// --- Custom Brand Icons (SVGs) ---

const ReactLogo = ({ className }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="currentColor">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const PythonLogo = ({ className }) => (
  <svg viewBox="0 0 256 255" className={className} fill="currentColor">
    <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745h-88.23C5.296 66.06.073 94.477.073 94.477s-5.585 57.214 53.296 57.214v-26.548h-27.34s-3.21-34.543 34.125-34.543h45.827V61.47h-5.21c53.815 0 47.79-26.206 47.79-26.206l-.125-27.003H96.512V0h30.404zm-18.932 8.69c4.622 0 8.365 3.746 8.365 8.367 0 4.623-3.743 8.368-8.365 8.368-4.62 0-8.366-3.745-8.366-8.368 0-4.62 3.747-8.366 8.366-8.366zM63.844 115.222h55.015v48.444h6.535c-54.275 0-50.62 29.95-50.62 29.95l.18 21.16h-51.11v-8.26h27.34v30.54c-37.335 0-34.125-34.542-34.125-34.542h-45.828v29.13h5.21c-53.814 0-47.79 26.205-47.79 26.205l.125 27.004h51.977v8.26H95.04c64.833 0 60.783-28.115 60.783-28.115l-.072-29.13H93.883v-8.744h88.23c34.583 0 39.806-28.417 39.806-28.417s5.586-57.213-53.296-57.213v26.548h27.34s3.21 34.543-34.125 34.543H118.86v-30.543zm86.943 113.083c-4.62 0-8.366-3.746-8.366-8.368 0-4.62 3.746-8.366 8.366-8.366 4.623 0 8.368 3.745 8.368 8.366 0 4.622-3.745 8.368-8.368 8.368z"/>
  </svg>
);

const AngularLogo = ({ className }) => (
  <svg viewBox="0 0 250 250" className={className} fill="currentColor">
    <path d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1L125 30zm0 158.2l-9-22.4h-18.2l-9 22.4H69l56-123.3 56 123.3h-19.8l-9.1-22.4H134l-9 22.4zm-32.3-35.9h64.6L125 65.8l32.7 86.5z"/>
  </svg>
);

const NodeLogo = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16 3l-12 7v12l12 7 12-7v-12z"/>
  </svg>
);

// --- Mock Data ---

const DATA = {
  personal: {
    name: "Elisha Nunana",
    role: "Senior Software Developer",
    tagline: "Crafting digital experiences with code and creativity.",
    location: "Shiashie-Accra, Ghana",
    email: "elishanunana@gmail.com",
    about: "I am a passionate developer with over 8 years of experience in building scalable web applications. I specialize in React, Node.js, and modern cloud architecture. My goal is to bridge the gap between complex engineering and intuitive user design."
  },
  workExperience: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Senior Frontend Engineer",
      period: "2021 - Present",
      location: "Accra, Greater Accra Region, Ghana",
      logoColor: "bg-blue-600",
      description: "In my current role at TechNova Solutions, I serve as the technical lead for the organization's flagship SaaS product, which services over 50,000 active monthly users. I was brought on board to modernize the frontend architecture, which was suffering from significant technical debt and performance bottlenecks. My primary focus has been on migrating a legacy jQuery/Bootstrap codebase to a modern React/Next.js stack, a process that involves meticulous planning to ensure zero downtime for our enterprise clients. Beyond the code, I function as a mentor for the junior engineering team, conducting weekly code reviews, architectural planning sessions, and one-on-one career development meetings. I also work closely with the Product Management team to translate business requirements into technical specifications, ensuring that we deliver features that are not only functional but also scalable and maintainable.",
      responsibilities: [
        "Spearheaded the migration of the legacy dashboard to React 18, improving Time to Interactive (TTI) by 40%.",
        "Designed and implemented a reusable component library using Storybook, reducing UI development time by 30%.",
        "Established a comprehensive CI/CD pipeline using GitHub Actions, automating testing and deployment processes.",
        "Mentored a team of 5 junior developers, helping 2 of them achieve promotion to mid-level roles within 18 months.",
        "Collaborated with the security team to implement OAuth2 and OIDC authentication protocols, enhancing system security."
      ],
      technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Jest", "Cypress", "AWS"]
    },
    {
      id: 2,
      company: "Creative Pulse Agency",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      location: "Tema, Greater Accra Region, Ghana",
      logoColor: "bg-purple-600",
      description: "At Creative Pulse, I thrived in a fast-paced, high-pressure environment delivering digital products for top-tier international brands. My role required extreme versatility; one week I would be optimizing SQL queries for a high-traffic contest landing page, and the next I would be writing WebGL shaders for an immersive brand experience. I was the lead developer for key accounts including several multinational FMCG companies. One of my significant achievements was architecting a headless CMS solution using Strapi and Vue.js that allowed our non-technical marketing team to launch campaign pages in hours rather than days. I also played a crucial role in the agency's shift towards serverless architecture, moving our hosting infrastructure to Netlify and Vercel to handle burst traffic during campaign launches.",
      responsibilities: [
        "Developed high-performance marketing websites and progressive web apps (PWAs) using Vue.js and Nuxt.js.",
        "Architected scalable RESTful APIs using Node.js and Express to support mobile applications and third-party integrations.",
        "Managed database design and optimization for MongoDB and PostgreSQL, ensuring data integrity for high-volume campaigns.",
        "Integrated payment gateways (Stripe, Paystack) and CRM systems (Salesforce, HubSpot) to streamline business operations.",
        "Led the technical discovery phase for new client projects, estimating timelines and defining technology stacks."
      ],
      technologies: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Netlify"]
    },
    {
      id: 3,
      company: "StartUp Inc.",
      role: "Junior Web Developer",
      period: "2016 - 2018",
      location: "Kumasi, Ashanti Region, Ghana",
      logoColor: "bg-emerald-600",
      description: "My journey began at StartUp Inc., a dynamic e-commerce company where I was thrown into the deep end of software development. As one of the first three engineers on the team, I wore many hats, ranging from frontend debugging to server management. I contributed significantly to the development of the company's core e-commerce platform, initially built on a LAMP stack. I took ownership of the customer-facing checkout flow, rewriting it to be more user-friendly and responsive, which resulted in a measurable decrease in cart abandonment rates. This role laid the foundation for my problem-solving skills and taught me the importance of writing clean, documented code in a collaborative environment.",
      responsibilities: [
        "Collaborated with senior engineers to build and maintain the core e-commerce platform using PHP and Laravel.",
        "Optimized complex SQL queries to reduce page load times for product listing pages.",
        "Implemented responsive UI designs using Bootstrap and jQuery, ensuring compatibility across all major browsers.",
        "Assisted in the migration of on-premise servers to AWS EC2 instances, gaining early exposure to cloud infrastructure.",
        "Participated in daily stand-ups and sprint planning meetings, contributing to the agile development process."
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap", "Linux"]
    }
  ],
  jobs: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Dashboard Migration Project",
      period: "2023",
      shortDesc: "Leading the frontend migration to React and mentoring junior developers.",
      description: "In this capacity, I was entrusted with the end-to-end architecture of the client's primary digital interface. This involved a deep-dive analysis of existing legacy codebases, identifying critical bottlenecks in the rendering pipeline, and systematically refactoring the core logic to adhere to modern functional programming paradigms. I facilitated bi-weekly stakeholder meetings to align technical deliverables with shifting business objectives, ensuring that every deployment added tangible value to the user experience. Furthermore, I championed the adoption of a strictly typed codebase using TypeScript, which reduced runtime errors by approximately 30% within the first quarter of implementation. My role extended beyond mere coding; I acted as a bridge between the design team and backend engineers, translating complex visual requirements into performant, responsive frontend components that maintained visual fidelity across a fragmented device landscape.",
      responsibilities: [
        "Architected the micro-frontend strategy using Webpack Module Federation.",
        "Improved CI/CD pipeline efficiency, reducing build times by 50%.",
        "Collaborated with UX researchers to implement accessibility (WCAG 2.1) standards."
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "Tailwind"],
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      company: "Creative Pulse Agency",
      role: "Interactive Campaign Platform",
      period: "2021",
      shortDesc: "Built award-winning marketing sites and internal tools for high-profile clients.",
      description: "At Creative Pulse, I operated in a high-velocity environment where speed and aesthetic perfection were paramount. I was responsible for the full-stack development of interactive marketing campaigns for Fortune 500 clients, often working under tight deadlines to coincide with major product launches. I engineered a bespoke Content Management System (CMS) tailored to the agency's specific workflow, which allowed non-technical staff to update content in real-time, reducing the dependency on engineering resources for minor changes by over 70%. Additionally, I managed complex integrations with third-party APIs, including CRM systems like Salesforce and payment processors like Stripe, ensuring secure and reliable data transmission. My work often required creative problem-solving to overcome browser limitations and deliver 60fps animations on mobile devices.",
      responsibilities: [
        "Developed dynamic, motion-heavy landing pages using GSAP and WebGL.",
        "Managed database migrations and schema designs for high-traffic campaigns.",
        "Led client demos and technical requirement gathering sessions."
      ],
      technologies: ["Vue.js", "Node.js", "MongoDB", "AWS", "SASS"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1508873535684-277a3cb1a498?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      company: "StartUp Inc.",
      role: "E-commerce Core Engine",
      period: "2018",
      shortDesc: "Developed and maintained core features of the main e-commerce platform.",
      description: "Joining as one of the early engineering hires, I played a pivotal role in scaling the platform from a prototype to a robust e-commerce solution handling thousands of daily transactions. My primary focus was on backend optimization and database management. I refactored several critical API endpoints to handle increased concurrency, effectively eliminating timeouts during Black Friday sales events. I also instituted a rigorous automated testing culture, writing hundreds of unit and integration tests that caught critical bugs before they reached production. This period was marked by intense learning and adaptation, as we migrated our monolithic PHP application to a microservices architecture using Docker containers, allowing for independent scaling of different system components.",
      responsibilities: [
        "Implemented payment gateway integrations (PayPal, Stripe).",
        "Wrote unit and integration tests to ensure system stability.",
        "Optimized frontend assets for faster page load speeds."
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      company: "Freelance",
      role: "SME Web Solutions",
      period: "2016",
      shortDesc: "Designed and developed custom websites for local businesses.",
      description: "As a freelance consultant, I managed the complete lifecycle of web development projects for a diverse array of local SMEs. This required a unique blend of technical skill and project management acumen. I conducted initial client consultations to define project scope, created high-fidelity wireframes in Figma to align on visual direction, and executed the development using modern web standards. I placed a strong emphasis on SEO optimization and mobile responsiveness, ensuring that my clients achieved high visibility in local search results. Over the course of two years, I successfully delivered 15+ projects, ranging from simple brochure sites to complex booking systems, maintaining a 100% client satisfaction rate.",
      responsibilities: [
        "Created wireframes and high-fidelity prototypes in Figma.",
        "Developed custom WordPress themes and plugins.",
        "Configured hosting environments and domain management for clients."
      ],
      technologies: ["HTML5", "CSS3", "WordPress", "Figma"],
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      company: "QuantumLeap Systems",
      role: "DeFi Smart Contracts",
      period: "2022 - 2023",
      shortDesc: "Developed decentralized applications (dApps) and smart contracts on Ethereum.",
      description: "Focused on the cutting edge of Web3 technology, I designed and deployed secure smart contracts using Solidity. I audited existing contracts for security vulnerabilities, saving the company from potential exploits worth millions. I integrated frontend applications with blockchain wallets like MetaMask, providing a seamless user experience for interacting with decentralized finance protocols. This role required a deep understanding of cryptography, gas optimization, and distributed ledger technology.",
      responsibilities: [
        "Wrote and optimized Solidity smart contracts.",
        "Integrated Web3.js for frontend wallet connectivity.",
        "Conducted security audits on DeFi protocols."
      ],
      technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"],
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      company: "Nebula AI",
      role: "Customer Behavior Models",
      period: "2021",
      shortDesc: "Built and deployed predictive models for customer behavior analysis.",
      description: "I collaborated with data scientists to productionize machine learning models using Python and TensorFlow. I built scalable API endpoints to serve model predictions in real-time, handling thousands of requests per second. I also implemented MLOps pipelines to automate model retraining and deployment, ensuring that our predictions remained accurate as new data became available. This work directly contributed to a 15% increase in customer retention rates.",
      responsibilities: [
        "Deployed ML models using Docker and Kubernetes.",
        "Built data pipelines with Apache Airflow.",
        "Optimized model inference time by 40%."
      ],
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes", "FastAPI"],
      images: [
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 7,
      company: "CyberGuard",
      role: "Vulnerability Assessment",
      period: "2020",
      shortDesc: "Conducted penetration testing and vulnerability assessments for enterprise clients.",
      description: "My role involved simulating cyberattacks to identify weaknesses in client infrastructure. I performed comprehensive penetration testing on web applications and network systems, documenting findings in detailed reports with actionable remediation steps. I also assisted in the implementation of SIEM solutions to monitor for suspicious activity. This experience gave me a profound understanding of security best practices that I apply to all my development work.",
      responsibilities: [
        "Performed manual and automated penetration testing.",
        "configured firewalls and intrusion detection systems.",
        "Educated staff on phishing and social engineering attacks."
      ],
      technologies: ["Kali Linux", "Burp Suite", "Python", "Wireshark", "Bash"],
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1614064641938-3e8745715e72?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 8,
      company: "PixelPerfect Studios",
      role: "Museum Installations",
      period: "2019",
      shortDesc: "Bridged the gap between art and technology for immersive installations.",
      description: "I worked at the intersection of design and code, creating interactive installations for museums and events. using tools like Three.js and Arduino, I built physical-digital experiences that responded to user movement and touch. This required creative coding skills and the ability to prototype rapidly. My work was featured in several prominent design exhibitions and helped the studio win multiple industry awards.",
      responsibilities: [
        "Developed interactive 3D visuals using Three.js.",
        "Programmed microcontrollers for sensor integration.",
        "Collaborated with artists to realize complex visions."
      ],
      technologies: ["Three.js", "Arduino", "Processing", "C++", "GLSL"],
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1614728853911-006395542322?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "M.Sc. Software Engineering",
      school: "Georgia Institute of Technology",
      period: "2016 - 2018",
      description: "Focused on Advanced Operating Systems, Distributed Computing, and Machine Learning. Thesis on optimizing container orchestration."
    },
    {
      id: 2,
      degree: "B.Sc. Computer Science",
      school: "University of Ghana",
      period: "2011 - 2015",
      description: "Graduated with First Class Honors. Specialized in Software Engineering and Distributed Systems. President of the Computer Science Student Association."
    },
    {
      id: 3,
      degree: "Certification in Cloud Computing",
      school: "AWS Academy",
      period: "2019",
      description: "Intensive coursework focusing on serverless architectures, cloud security, and scalable infrastructure deployment."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Issued Nov 2022",
      link: "#"
    },
    {
      id: 2,
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "Issued Mar 2022",
      link: "#"
    },
    {
      id: 3,
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "Issued Aug 2021",
      link: "#"
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "Issued Jun 2021",
      link: "#"
    },
    {
      id: 5,
      title: "Meta Frontend Developer Professional",
      issuer: "Coursera",
      date: "Issued Jan 2020",
      link: "#"
    },
    {
      id: 6,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Issued Feb 2023",
      link: "#"
    },
    {
      id: 7,
      title: "React Native Specialist",
      issuer: "Udemy",
      date: "Issued Dec 2022",
      link: "#"
    },
    {
      id: 8,
      title: "Professional UI/UX Design Master",
      issuer: "Google",
      date: "Issued Oct 2022",
      link: "#"
    },
    {
      id: 9,
      title: "Cyber Security Essentials",
      issuer: "Cisco",
      date: "Issued Sep 2022",
      link: "#"
    }
  ]
};

// --- Utility Components ---

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Lightbox = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300" 
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full" 
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <img
        src={imageSrc}
        alt="Full screen project"
        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
      />
    </div>
  );
};

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center hidden lg:flex">
      {/* Central Core */}
      <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)] animate-bounce" style={{ animationDuration: '4s' }}>
         <Code size={40} className="text-white" />
      </div>

      {/* Inner Orbit - React & Python */}
      <div className="absolute w-[220px] h-[220px] border border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-[spin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md text-blue-500">
          <ReactLogo className="w-8 h-8 animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md text-yellow-500">
          <PythonLogo className="w-8 h-8" />
        </div>
      </div>

      {/* Middle Orbit - Angular & Node */}
      <div className="absolute w-[380px] h-[380px] border border-slate-200 dark:border-slate-800 rounded-full animate-[spin_30s_linear_infinite_reverse]">
         <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg text-red-500">
          <AngularLogo className="w-8 h-8" />
        </div>
         <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg text-green-600">
          <NodeLogo className="w-8 h-8" />
        </div>
      </div>

      {/* Outer Orbit - Generic Tech */}
      <div className="absolute w-[540px] h-[540px] border border-slate-100 dark:border-slate-800/50 rounded-full animate-[spin_40s_linear_infinite]">
        <div className="absolute bottom-[15%] left-[15%] bg-white dark:bg-slate-800 p-4 rounded-full shadow-xl text-purple-500">
          <Database size={28} />
        </div>
         <div className="absolute top-[15%] right-[15%] bg-white dark:bg-slate-800 p-4 rounded-full shadow-xl text-sky-500">
          <Cloud size={28} />
        </div>
      </div>
      
      {/* Floating Elements Background */}
      <div className="absolute top-10 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

// --- Main Components ---

const Modal = ({ isOpen, onClose, job }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Use Effect to reset tab when modal opens/closes
  useEffect(() => {
    if(isOpen) setActiveTab('overview');
  }, [isOpen]);

  if (!isOpen || !job) return null;

  // Determine if we should show the Gallery tab
  const hasImages = job.images && job.images.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-300 border border-slate-100 dark:border-slate-800">
        
        {/* Header */}
        <div className="bg-slate-50 dark:bg-slate-950 p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start shrink-0">
          <div className="flex gap-4 items-center">
            <div className={`w-14 h-14 ${job.logoColor || 'bg-blue-600'} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
              {job.company.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
                {job.company} 
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="text-sm">{job.period}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 dark:text-slate-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs - Conditionally render Gallery tab */}
        <div className="flex px-6 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'overview' 
                ? 'border-blue-600 text-blue-600 dark:text-blue-400' 
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Overview & Skills
          </button>
          {hasImages && (
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'gallery' 
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              Project Gallery
            </button>
          )}
        </div>

        {/* Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-white dark:bg-slate-900 custom-scrollbar">
          {activeTab === 'overview' ? (
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-3 flex items-center gap-2">
                   <Briefcase size={16} /> Role Description
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                  {job.description}
                </p>
              </div>
              
              {job.responsibilities && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-3 flex items-center gap-2">
                     <Layers size={16} /> Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span className="leading-relaxed">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.technologies && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-3 flex items-center gap-2">
                     <Code size={16} /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-4 duration-300">
               <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold mb-6 flex items-center gap-2">
                   <ImageIcon size={16} /> Project Snapshots <span className="text-xs font-normal normal-case ml-auto text-blue-500">(Click to enlarge)</span>
                </h4>
              {hasImages ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="group relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800 cursor-zoom-in"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Project screenshot ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                         <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={32} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                  <ImageIcon size={48} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
                  <p className="text-slate-500 dark:text-slate-400">No images available for this project yet.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>

      {/* Lightbox Component Rendered inside Modal context but visually on top */}
      <Lightbox 
        isOpen={!!lightboxImage} 
        imageSrc={lightboxImage} 
        onClose={() => setLightboxImage(null)} 
      />
    </div>
  );
};

const JobCard = ({ job, onClick }) => {
  return (
    <div 
      onClick={() => onClick(job)}
      className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
          {job.company.charAt(0)}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-full">
          <ChevronRight size={20} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{job.role}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-4 flex items-center gap-2">
        <Briefcase size={14} /> {job.company}
        <span className="text-slate-300 dark:text-slate-600">|</span>
        <span className="text-slate-400 dark:text-slate-500">{job.period}</span>
      </p>
      
      <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-5 text-sm leading-relaxed">
        {job.shortDesc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50 dark:border-slate-800/50">
        {job.technologies.slice(0, 3).map(t => (
          <span key={t} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
        {job.technologies.length > 3 && (
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 px-1 py-1">
            +{job.technologies.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
};

const WorkExperienceCard = ({ work, onClick }) => (
  <div 
    onClick={() => onClick(work)}
    className="relative flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 border-l-blue-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group items-start cursor-pointer"
  >
    <div className="mt-1">
       <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <Briefcase size={20} />
       </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{work.role}</h4>
        <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
      </div>
      <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-1">
        {work.company} 
      </p>
      <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
         <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><Calendar size={12}/> {work.period}</span>
         <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><MapPin size={12}/> {work.location}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 pl-3 line-clamp-3">
        {work.description}
      </p>
    </div>
  </div>
);

const EducationCard = ({ edu }) => (
  <div className="relative flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 border-l-emerald-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group items-start">
    <div className="mt-1">
       <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <GraduationCap size={20} />
       </div>
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{edu.degree}</h4>
      <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-1">
        {edu.school}
      </p>
      <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
         <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"><Calendar size={12}/> {edu.period}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 pl-3">
        {edu.description}
      </p>
    </div>
  </div>
);

const CertificationCard = ({ cert }) => (
  <a 
    href={cert.link}
    className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-full"
  >
    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
      <Award size={24} />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-sm line-clamp-2 leading-tight mb-1">{cert.title}</h4>
      <div className="flex flex-col">
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{cert.issuer}</p>
        <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">{cert.date}</p>
      </div>
    </div>
  </a>
);

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, DATA.jobs.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(prev => Math.max(prev - 4, 4));
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group">
            EN<span className="text-blue-600 group-hover:text-blue-500 transition-colors">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="/Elisha_Nunana_CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-900 dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-slate-900 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 md:hidden py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
             {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 py-2 border-b border-slate-50 dark:border-slate-800"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="/Elisha_Nunana_CV.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-base font-bold w-full mt-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Hello, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {DATA.personal.name}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                {DATA.personal.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-center hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  View My Work
                </a>
                <a 
                  href="/Elisha_Nunana_CV.pdf"
                  download
                  className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold text-center hover:border-slate-400 dark:hover:border-slate-500 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Hero Animation */}
          <FadeIn delay={500} className="hidden lg:block">
            <HeroAnimation />
          </FadeIn>
        </div>
        
        {/* Decorative background blobs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl relative z-10">
                  {/* Professional Profile Image */}
                   <img 
                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                     alt="Brian Colby" 
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                      <Code size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">8+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  About Me <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {DATA.personal.about}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                    <MapPin size={20} className="text-blue-500"/>
                    {DATA.personal.location}
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                    <Mail size={20} className="text-blue-500"/>
                    {DATA.personal.email}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section (Moved Up) */}
      <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  A selection of recent projects showcasing technical expertise and successful delivery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {DATA.jobs.slice(0, visibleProjects).map((job, index) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onClick={setSelectedJob} 
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center gap-4">
                {visibleProjects < DATA.jobs.length && (
                  <button 
                    onClick={handleShowMore}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 dark:bg-slate-800 text-white dark:text-white rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-1"
                  >
                    Show More Projects
                    <ChevronDown size={18} />
                  </button>
                )}
                
                {visibleProjects > 4 && (
                  <button 
                    onClick={handleShowLess}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 rounded-full font-bold hover:bg-slate-100 dark:hover:bg-slate-600 transition-all shadow-lg hover:-translate-y-1"
                  >
                    Show Less Projects
                    <ChevronUp size={18} />
                  </button>
                )}
              </div>
           </FadeIn>
        </div>
      </section>

      {/* Resume Section: Education (Left) & Work Experience (Right) */}
      <section id="resume" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* LEFT COLUMN: Education */}
            <div>
              <FadeIn>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="text-emerald-600" /> Education
                </h2>
                <div className="space-y-6">
                  {DATA.education.map((edu) => (
                    <EducationCard key={edu.id} edu={edu} />
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* RIGHT COLUMN: Work Experience (New Section) */}
            <div>
              <FadeIn delay={200}>
                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <Briefcase className="text-blue-600" /> Work Experience
                </h2>
                <div className="space-y-6">
                  {DATA.workExperience.map((work) => (
                    <WorkExperienceCard 
                      key={work.id} 
                      work={work} 
                      onClick={setSelectedJob} // Reusing setSelectedJob to trigger the modal
                    />
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section (Full Width) */}
      <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
           <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Certifications</h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {DATA.certifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
           </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a 
              href={`mailto:${DATA.personal.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/50 hover:-translate-y-1"
            >
              <Mail size={20} />
              Say Hello
            </a>
            
            <div className="mt-16 flex justify-center gap-8">
              <a href="#" className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full">
                <Github size={28} />
              </a>
              <a href="#" className="p-3 text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full">
                <Linkedin size={28} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 dark:bg-slate-950 text-center text-slate-400 text-sm border-t border-slate-100 dark:border-slate-800">
        <p>© {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.</p>
      </footer>

      {/* Job Details Modal */}
      <Modal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        job={selectedJob} 
      />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default App;
