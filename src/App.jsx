import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Brain,
  Database,
  Code,
  BarChart,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  PlayCircle,
  ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  // Content Data
  const personalInfo = {
    name: "Ofri Rozner",
    title: "Data Scientist | B.Sc. Cognitive Neuroscience",
    location: "Tel Aviv, Israel",
    email: "ofri.rozner@gmail.com",
    phone: "050-743-3539",
    github: "https://github.com/OfriRose",
    linkedin: "https://www.linkedin.com/in/ofri-rozner/",
    summary: "Leveraging a background in Cognitive Neuroscience to build predictive models that understand behavior, not just numbers. I specialize in translating high-dimensional datasets into actionable logic, with a focus on fraud detection and algorithmic decision-making."
  };

  const skills = {
    languages: ["Python", "R", "SQL", "MATLAB", "C", "Bash/Linux"],
    ml: ["XGBoost", "CatBoost", "Scikit-Learn", "Pandas", "SHAP", "Optuna", "Neural Networks"],
    tools: ["Tableau", "Streamlit", "Git", "Google Gemini API", "Excel"],
    domains: ["Predictive Modeling", "Algorithmic Trading", "Behavioral Analysis", "Fraud Detection"]
  };

  const projects = [
    {
      title: "Fraud Detection System",
      tech: ["Python", "XGBoost", "SHAP"],
      description: "Architected an ML pipeline for a 2M+ transaction dataset with severe class imbalance (0.54%). Engineered behavioral features and implemented a 5-model consensus feature selection.",
      metrics: "Achieved 97.7% Recall and 0.9977 AUC on unseen test set.",
      icon: <Database className="w-6 h-6 text-teal-400" />,
      link: "https://github.com/OfriRose/Fraud_Detection"
    },
    {
      title: "Autonomous AI Crypto Trading Agent",
      tech: ["Python", "CatBoost", "Tech Analysis"],
      description: "Engineered a self-correcting algorithmic trading system using an ensemble of ML models. Built a real-time pipeline processing 90+ indicators with a 'Smart Consensus' engine.",
      metrics: "Filtered out 96% of low-confidence signals, optimizing entry points.",
      icon: <BarChart className="w-6 h-6 text-teal-400" />,
      link: "https://github.com/ayalkh/Crypto-Trading-AI/tree/presentation-ready"
    },
    {
      title: "Optimized Random Forest Regressor",
      tech: ["Scikit-Learn", "Target Encoding"],
      description: "Developed an end-to-end pipeline to predict equipment prices using a large-scale dataset (400k+ samples). Implemented cross-validated target encoding to minimize memory usage.",
      metrics: "Maximized accuracy while optimizing computational efficiency.",
      icon: <Code className="w-6 h-6 text-teal-400" />,
      link: "https://github.com/OfriRose" // Kept profile link as fallback since no specific repo provided
    },
    {
      title: "AI Weather Advisor Agent",
      tech: ["LangChain", "Gemini API", "Google Maps"],
      description: "Built an autonomous agent providing personalized weather insights and real-time transport optimization based on user location and preferences.",
      metrics: "Live Demo deployed.",
      icon: <Brain className="w-6 h-6 text-teal-400" />,
      link: "https://github.com/OfriRose/AIWeatherAdvisor",
      demo: "https://aiweatheradvisor.streamlit.app/"
    }
  ];

  const education = [
    {
      school: "Bar-Ilan University",
      degree: "Certified Data Scientist",
      details: "Specialization in Generative AI, Deep Learning, SQL, and Neural Networks.",
      year: "2025 – 2026"
    },
    {
      school: "Ben-Gurion University",
      degree: "B.Sc. Cognitive Neuroscience & B.A. Psychology",
      details: "Focus on Computational Modeling, Neural Data Analysis, and Multivariate Statistics.",
      year: "2018 – 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="text-xl font-bold text-teal-400">Ofri<span className="text-slate-100">Rozner</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="/Ofri Rozner CV.docx"
                  className="bg-teal-500 hover:bg-teal-600 text-slate-900 px-4 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-2"
                >
                  <FileText size={16} /> Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned & Rewritten */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[85vh] text-center">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none -z-10"></div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-semibold tracking-wider text-teal-300 uppercase bg-teal-500/10 rounded-full border border-teal-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Open to Opportunities
        </div>

        {/* Main Headlines */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 tracking-tight leading-tight">
          Cognitive-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Data Science</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto">
          {personalInfo.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-teal-500/20 transform hover:-translate-y-1">
            <Linkedin size={20} /> LinkedIn
          </a>
          <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-all hover:-translate-y-1">
            View Projects <ArrowRight size={18} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-slate-600">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Technical Arsenal</h2>
              <div className="h-1 w-20 bg-teal-500 rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all hover:bg-slate-800/50 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-teal-500/10 group-hover:text-teal-400 transition-colors">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-200">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 text-teal-300 text-sm font-medium rounded-md border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ML Stack */}
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all hover:bg-slate-800/50 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-teal-500/10 group-hover:text-teal-400 transition-colors">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-200">Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 text-teal-300 text-sm font-medium rounded-md border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all hover:bg-slate-800/50 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-teal-500/10 group-hover:text-teal-400 transition-colors">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-200">Deployment & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 text-teal-300 text-sm font-medium rounded-md border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Updated Links */}
      <section id="projects" className="py-24 bg-slate-800/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-teal-500 rounded mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real-world applications of predictive modeling and data analysis. <br />
              Check GitHub for the source code or try the live demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-teal-500 group-hover:text-slate-900 transition-all duration-300">
                      {project.icon}
                    </div>

                    <div className="flex gap-2">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-teal-400 hover:text-teal-300 bg-teal-400/10 hover:bg-teal-400/20 px-3 py-1.5 rounded-full text-xs font-bold transition-all">
                          <PlayCircle size={14} /> Live Demo
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" title="View Code">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-teal-400" />
                      <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Key Result</span>
                    </div>
                    <span className="text-slate-200 font-medium">{project.metrics}</span>
                  </div>
                </div>

                <div className="px-8 py-5 bg-slate-950/30 border-t border-slate-800 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs font-mono text-slate-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-full mb-4">
              <Brain className="text-teal-400" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-slate-100 mb-2">Education</h2>
            <p className="text-slate-400">The academic foundation behind the models.</p>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline line for mobile */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-800 md:hidden"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-colors">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                    <div className="text-teal-400 font-medium text-lg mb-2">{edu.school}</div>
                    <p className="text-slate-400">{edu.details}</p>
                  </div>
                  <div className="md:text-right flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-slate-900 rounded-lg border border-slate-700 text-teal-400 font-mono font-bold">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Let's Connect</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            I'm currently looking for Data Scientist roles where I can leverage my experience in predictive modeling and behavioral analysis.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group">
              <div className="p-3 bg-slate-900 rounded-full border border-slate-800 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-all">
                <Mail size={20} />
              </div>
              <span className="text-lg">{personalInfo.email}</span>
            </a>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
                <Linkedin size={20} />
              </div>
              <span className="text-lg">{personalInfo.location}</span>
            </div>
          </div>

          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Ofri Rozner. Built with React & Tailwind.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
