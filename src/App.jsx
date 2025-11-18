import React, { useState, useEffect } from 'react';
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
  Calendar,
  Moon,
  Sun
} from 'lucide-react';

// --- Mock Data ---

const DATA = {
  personal: {
    name: "Brian Colby",
    role: "Senior Software Engineer",
    tagline: "Crafting digital experiences with code and creativity.",
    location: "Shiashi- Accra, Ghana",
    email: "briancolby@gmail.com",
    about: "I am a passionate developer with over 10 years of experience in building scalable web applications. I specialize in React, Node.js, and modern cloud architecture. My goal is to bridge the gap between complex engineering and intuitive user design."
  },
  jobs: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Senior Frontend Engineer",
      period: "2021 - Present",
      shortDesc: "Leading the frontend migration to React and mentoring junior developers.",
      description: "Spearheaded the complete overhaul of the legacy dashboard, reducing load times by 40%. Implemented a comprehensive design system used across 5 different products. Mentored a team of 4 junior developers, conducting code reviews and technical workshops.",
      technologies: ["React", "TypeScript", "GraphQL", "Jest", "Tailwind"],
      logoColor: "bg-blue-500"
    },
    {
      id: 2,
      company: "Creative Pulse Agency",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      shortDesc: "Built award-winning marketing sites and internal tools for high-profile clients.",
      description: "Collaborated with designers to deliver pixel-perfect websites for Fortune 500 clients. Built a custom CMS using Node.js and MongoDB that improved content update efficiency by 200%. Managed API integrations with third-party services like Stripe and Salesforce.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "AWS", "SASS"],
      logoColor: "bg-purple-500"
    },
    {
      id: 3,
      company: "StartUp Inc.",
      role: "Junior Web Developer",
      period: "2016 - 2018",
      shortDesc: "Developed and maintained core features of the main e-commerce platform.",
      description: "Worked in an agile environment to deliver features in two-week sprints. Assisted in the migration from a monolith architecture to microservices. Optimized database queries which decreased server load during peak traffic.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
      logoColor: "bg-emerald-500"
    },
    {
      id: 4,
      company: "Freelance",
      role: "UI/UX Developer",
      period: "2015 - 2016",
      shortDesc: "Designed and developed custom websites for local businesses.",
      description: "Managed the entire project lifecycle from client consultation to deployment. Focused on creating responsive, accessible, and SEO-friendly websites. Delivered over 15 successful projects within strict deadlines.",
      technologies: ["HTML5", "CSS3", "WordPress", "Figma"],
      logoColor: "bg-orange-500"
    }
  ]
};

// --- Components ---

const Modal = ({ isOpen, onClose, job }) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 border-b border-slate-100 dark:border-slate-600 flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className={`w-12 h-12 ${job.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md`}>
              {job.company.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{job.role}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
                {job.company}
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="text-sm">{job.period}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">Overview</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {job.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job, onClick }) => {
  return (
    <div
      onClick={() => onClick(job)}
      className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-blue-500 transition-all duration-300"></div>

      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-bold shadow-sm`}>
          {job.company.charAt(0)}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-full">
          <ChevronRight size={20} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 transition-colors">{job.role}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-4 flex items-center gap-2">
        <Briefcase size={14} /> {job.company}
        <span className="text-slate-300 dark:text-slate-600">|</span>
        <span className="text-slate-400 dark:text-slate-500">{job.period}</span>
      </p>

      <p className="text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
        {job.shortDesc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {job.technologies.slice(0, 3).map(t => (
          <span key={t} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
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

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Generate a simple text CV for download
  const handleDownloadCV = () => {
    const cvContent = `
${DATA.personal.name}
${DATA.personal.role}
${DATA.personal.location} | ${DATA.personal.email}

SUMMARY
--------------------------------------------------
${DATA.personal.about}

EXPERIENCE
--------------------------------------------------
${DATA.jobs.map(job => `
${job.role} at ${job.company}
${job.period}
${job.description}
Technologies: ${job.technologies.join(', ')}
`).join('\n')}

Generated from Portfolio Website
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${DATA.personal.name.replace(' ', '_')}_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            BC<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all active:scale-95"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900 dark:text-slate-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-lg border-t border-slate-100 dark:border-slate-700 md:hidden py-4 px-6 flex flex-col gap-4">
             {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 dark:text-slate-300"
              >
                {link.name}
              </a>
            ))}
             <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium w-full"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
             <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium w-full"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {DATA.personal.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {DATA.personal.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-center hover:bg-slate-800 transition-colors">
                View My Work
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-full font-semibold text-center hover:border-slate-400 dark:hover:border-slate-600 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Decorative background blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-700 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="/1.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-600 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100">8+ Years</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {DATA.personal.about}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <MapPin size={20} className="text-blue-500"/>
                  {DATA.personal.location}
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Mail size={20} className="text-blue-500"/>
                  {DATA.personal.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section id="work" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Recent Experience</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                A collection of roles where I've contributed to engineering excellence and product growth. Click a card to see full details.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {DATA.jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={setSelectedJob}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href={`mailto:${DATA.personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 dark:bg-slate-900 text-center text-slate-400 dark:text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {DATA.personal.name}. All rights reserved.</p>
      </footer>

      {/* Job Details Modal */}
      <Modal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        job={selectedJob} 
      />

      <style>{`
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
