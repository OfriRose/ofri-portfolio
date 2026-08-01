import { useState } from 'react';
import {
  ArrowRight, BarChart, Brain, BriefcaseBusiness, ChevronDown, Code, Database,
  Download, ExternalLink, Github, Linkedin, Mail, MapPin, Menu,
  PlayCircle, Sparkles, X,
} from 'lucide-react';

const resumePath = '/Ofri_Rozner_Resume.pdf';

const personalInfo = {
  location: 'Tel Aviv, Israel',
  email: 'ofri.rozner@gmail.com',
  github: 'https://github.com/OfriRose',
  linkedin: 'https://www.linkedin.com/in/ofri-rozner/',
};

const skillGroups = [
  {
    title: 'Data & Analytics',
    icon: BarChart,
    skills: ['Python', 'SQL', 'PostgreSQL', 'pandas', 'NumPy', 'EDA', 'Statistical Analysis', 'Cohort Analysis', 'Excel', 'Tableau'],
  },
  {
    title: 'Data Engineering & Quality',
    icon: Database,
    skills: ['dbt', 'Docker', 'Data Validation', 'Data Quality Testing', 'Data Modeling', 'Leakage Prevention', 'Git', 'Linux', 'Streamlit'],
  },
  {
    title: 'Machine Learning & Evaluation',
    icon: Brain,
    skills: ['scikit-learn', 'XGBoost', 'CatBoost', 'Temporal Validation', 'Imbalanced Classification', 'Threshold Analysis', 'SHAP', 'Model Evaluation'],
  },
];

const projects = [
  {
    title: 'Fraud Detection & Operational Model Evaluation',
    tech: ['Python', 'pandas', 'XGBoost', 'SHAP', 'Temporal Validation'],
    description: 'Rebuilt a leakage-safe fraud-detection workflow for more than 2 million transactions. Used chronological train, validation and test splits, strict-past behavioral velocity features, and train-only preprocessing to prevent temporal leakage.',
    result: 'Achieved a PR-AUC of 0.954 on the chronologically held-out test set. At the validation-locked threshold, the system captured 99.18% of fraud at 18.19% precision while flagging 1.77% of transactions for review.',
    icon: Database,
    repository: 'https://github.com/OfriRose/Fraud_Detection',
  },
  {
    title: 'Neuroimaging Cohort Quality Builder',
    tech: ['SQL', 'PostgreSQL', 'dbt', 'Docker', 'Streamlit', 'Data Quality'],
    description: 'Built a reproducible PostgreSQL and dbt pipeline for validating and constructing analysis-ready cohorts from 1,112 multi-site ABIDE I participant records. Implemented missing-value normalization, auditable eligibility rules, automated data-quality tests and a site-held-out evaluation split.',
    result: 'The pipeline confirmed structural readiness while exposing a material analytical limitation: key behavioral measures had 0% coverage in the evaluation cohort, preventing behavioral-enrichment analysis.',
    note: 'Aggregate-only educational demonstration using de-identified ABIDE I outputs. Not a diagnostic or clinical tool.',
    icon: Brain,
    repository: 'https://github.com/OfriRose/neuroimaging-cohort-quality-builder',
    demo: 'https://neuroimaging-cohort-quality.streamlit.app/',
  },
  {
    title: 'AI Crypto Trading Data Pipeline — Team Project',
    tech: ['Python', 'CatBoost', 'XGBoost', 'Time Series', 'Team Project'],
    description: 'Co-developed a real-time market-data pipeline covering five assets and five timeframes and producing more than 90 technical indicators. Contributed to time-series evaluation, model reporting, confidence-based signal filtering, configuration and testing.',
    icon: BarChart,
    repository: 'https://github.com/ayalkh/Crypto-Trading-AI/tree/presentation-ready',
  },
  {
    title: 'LLM-Assisted Weather & Transport Advisor',
    tech: ['Python', 'Streamlit', 'APIs', 'LangChain', 'Structured Outputs'],
    description: 'Built a modular application combining weather, forecast and route APIs to provide contextual travel recommendations. Added validated structured outputs, configuration handling and automated tests.',
    result: 'Deployed an interactive Streamlit demonstration integrating live external data sources.',
    icon: Code,
    repository: 'https://github.com/OfriRose/AIWeatherAdvisor',
    demo: 'https://aiweatheradvisor.streamlit.app/',
  },
];

const experience = [
  { role: 'After-school Program Leader', organization: 'IACC', location: 'Tel Aviv', year: '2025–Present', description: 'Lead the daily operation of a structured program serving autistic participants, coordinating staff priorities, documentation, risk management and real-time issue resolution.' },
  { role: 'Rehabilitation Instructor', organization: 'Chimes Israel', location: 'Tel Aviv', year: '2024–2025', description: 'Delivered individualized rehabilitation and life-skills support for children with developmental disabilities while documenting progress and translating professional plans into daily practice.' },
  { role: 'Rehabilitation Instructor', organization: 'Slav and Sons Ltd.', location: 'Israel', year: '2020–2022', description: 'Implemented structured intervention plans and maintained accurate documentation for youth with autism spectrum disorder.' },
  { role: 'Field Medic', organization: 'Israel Defense Forces', location: 'Israel', year: '2013–2016', description: 'Provided medical support and maintained accurate records in high-pressure environments while following strict operational procedures.' },
];

const education = [
  { school: 'Bar-Ilan University', degree: 'Data Science Certificate Program', details: 'Coursework in SQL, statistics, machine learning, deep learning, neural networks and generative AI.', year: '2025–2026' },
  { school: 'Ben-Gurion University', degree: 'B.Sc. Cognitive Neuroscience & B.A. Psychology', details: 'Coursework in computational modeling, neural data analysis and multivariate statistics.', year: '2018–2022' },
];

const navigation = ['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];
const externalProps = { target: '_blank', rel: 'noopener noreferrer' };

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-slate-300 selection:bg-teal-500 selection:text-white">
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600 opacity-10 blur-[120px]" />
      </div>

      <nav className="fixed z-50 w-full border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-md" aria-label="Primary navigation">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => scrollTo('home')} className="rounded-md p-2 text-xl font-bold text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400" aria-label="Go to home">
              Ofri<span className="text-slate-100">Rozner</span>
            </button>
            <div className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="rounded-md px-2 py-2 text-sm font-medium transition-colors hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 lg:px-3">{item}</button>)}
              <a href={resumePath} download className="ml-2 flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Download size={16} /> Resume PDF</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400 md:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        {isMenuOpen && <div id="mobile-menu" className="border-b border-slate-700 bg-slate-900 px-4 pb-4 md:hidden">
          {navigation.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400">{item}</button>)}
          <a href={resumePath} download className="mt-2 flex items-center gap-2 rounded-md bg-teal-500 px-3 py-2 font-bold text-slate-950"><Download size={16} /> Download Resume (PDF)</a>
        </div>}
      </nav>

      <main>
        <section id="home" className="relative mx-auto flex min-h-[85vh] max-w-6xl scroll-mt-16 flex-col items-center justify-center px-4 pb-20 pt-32 text-center md:pb-28 md:pt-40">
          <div className="group relative mb-8"><div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-25 blur transition duration-1000 group-hover:opacity-75" /><img src="/profile.jpg" alt="Portrait of Ofri Rozner" className="relative h-52 w-52 rounded-full border-4 border-slate-900 object-cover object-[60%_20%] shadow-2xl" /></div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300"><span className="h-2 w-2 rounded-full bg-teal-500" />Open to Opportunities</div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-100 md:text-6xl">Data Analyst <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">| Data Science, ML & Data Quality</span></h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">I build reproducible analytics and machine-learning workflows that turn complex behavioral, transactional and multi-site data into validated, decision-ready insights. My background in Cognitive Neuroscience and Psychology brings an additional perspective to data quality, human behavior and model evaluation.</p>
          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => scrollTo('projects')} className="flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">View Projects <ArrowRight size={18} /></button>
            <a href={resumePath} download className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"><Download size={18} /> Download Resume</a>
            <a href={personalInfo.linkedin} {...externalProps} className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"><Linkedin size={18} /> LinkedIn</a>
            <a href={personalInfo.github} {...externalProps} className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"><Github size={18} /> GitHub</a>
          </div>
          <ChevronDown className="absolute bottom-8 hidden animate-bounce text-slate-600 md:block" size={28} aria-hidden="true" />
        </section>

        <section id="skills" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-4"><h2 className="mb-2 text-3xl font-bold text-slate-100">Technical Skills</h2><div className="mb-12 h-1 w-20 rounded bg-teal-500" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{skillGroups.map((group) => { const SkillIcon = group.icon; return <article key={group.title} className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 transition hover:border-teal-500/50"><div className="mb-6 flex items-center gap-3"><div className="rounded-lg bg-slate-800 p-3 text-teal-400"><SkillIcon size={24} /></div><h3 className="text-xl font-bold text-slate-100">{group.title}</h3></div><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm font-medium text-teal-300">{skill}</span>)}</div></article>; })}</div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-400"><span className="font-semibold text-slate-300">Additional Languages:</span>{['R', 'MATLAB', 'C'].map((skill) => <span key={skill} className="rounded border border-slate-700 bg-slate-900 px-2.5 py-1">{skill}</span>)}</div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 bg-slate-800/20 py-24"><div className="mx-auto max-w-6xl px-4"><div className="mb-16 text-center"><h2 className="mb-4 text-4xl font-bold text-slate-100">Featured Projects</h2><div className="mx-auto mb-6 h-1 w-20 rounded bg-teal-500" /><p className="mx-auto max-w-2xl text-slate-300">Reproducible analytics, data-quality and machine-learning work focused on reliable evaluation and decision-ready outputs.</p></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{projects.map((project) => { const Icon = project.icon; return <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/10"><div className="flex-1 p-6 sm:p-8"><div className="mb-6 flex items-start justify-between gap-4"><div className="rounded-xl bg-slate-800 p-3 text-teal-400"><Icon size={24} /></div><div className="flex flex-wrap justify-end gap-2">{project.demo && <a href={project.demo} {...externalProps} className="flex items-center gap-1 rounded-full bg-teal-400/10 px-3 py-1.5 text-xs font-bold text-teal-300 transition hover:bg-teal-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"><PlayCircle size={14} /> Live Demo</a>}<a href={project.repository} {...externalProps} className="flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-200 transition hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400" aria-label={`View ${project.title} repository`}><Github size={15} /> Repository <ExternalLink size={12} /></a></div></div><h3 className="mb-3 text-2xl font-bold text-slate-100">{project.title}</h3><p className="mb-6 leading-relaxed text-slate-300">{project.description}</p>{project.result && <div className="rounded-xl border border-slate-700/50 bg-slate-800 p-4"><div className="mb-1 flex items-center gap-2"><Sparkles size={14} className="text-teal-400" /><span className="text-xs font-bold uppercase tracking-wider text-teal-300">Key Result</span></div><p className="font-medium text-slate-200">{project.result}</p></div>}{project.note && <p className="mt-4 text-sm italic text-slate-400">{project.note}</p>}</div><div className="flex flex-wrap gap-2 border-t border-slate-800 bg-slate-950/30 px-6 py-5 sm:px-8">{project.tech.map((tag) => <span key={tag} className="rounded border border-slate-700 bg-slate-800 px-2 py-1 font-mono text-xs text-slate-300">{tag}</span>)}</div></article>; })}</div></div></section>

        <section id="experience" className="scroll-mt-16 py-24"><div className="mx-auto max-w-5xl px-4"><div className="mb-14 text-center"><BriefcaseBusiness className="mx-auto mb-4 text-teal-400" size={34} /><h2 className="mb-3 text-4xl font-bold text-slate-100">Experience</h2><p className="mx-auto max-w-2xl text-slate-300">Leadership, structured documentation and operational responsibility across community, rehabilitation and healthcare settings.</p></div><div className="grid gap-5 md:grid-cols-2">{experience.map((item) => <article key={`${item.role}-${item.organization}`} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6"><div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-xl font-bold text-slate-100">{item.role}</h3><p className="font-medium text-teal-300">{item.organization} <span className="text-slate-500">|</span> {item.location}</p></div><span className="h-fit whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-sm font-bold text-teal-300">{item.year}</span></div><p className="leading-relaxed text-slate-300">{item.description}</p></article>)}</div></div></section>

        <section id="education" className="scroll-mt-16 bg-slate-800/20 py-24"><div className="mx-auto max-w-4xl px-4"><div className="mb-14 text-center"><Brain className="mx-auto mb-4 text-teal-400" size={34} /><h2 className="mb-2 text-4xl font-bold text-slate-100">Education</h2><p className="text-slate-300">Academic training in data science, human behavior and quantitative analysis.</p></div><div className="space-y-6">{education.map((item) => <article key={item.degree} className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 md:flex-row md:items-center md:p-8"><div><h3 className="mb-1 text-2xl font-bold text-slate-100">{item.degree}</h3><p className="mb-2 text-lg font-medium text-teal-300">{item.school}</p><p className="text-slate-300">{item.details}</p></div><span className="h-fit whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 font-mono font-bold text-teal-300">{item.year}</span></article>)}</div></div></section>
      </main>

      <footer id="contact" className="scroll-mt-16 border-t border-slate-800 bg-slate-950 py-14"><div className="mx-auto max-w-6xl px-4 text-center"><h2 className="mb-6 text-3xl font-bold text-slate-100">Let&apos;s Connect</h2><p className="mx-auto mb-9 max-w-3xl text-slate-300">I&apos;m open to Data Analyst, Data Quality, AI/ML Evaluation and Junior Data Science opportunities where I can combine analytical thinking, reliable data workflows and an understanding of human behavior.</p><div className="mb-10 flex flex-wrap justify-center gap-4"><a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 hover:text-teal-300"><Mail size={19} /> {personalInfo.email}</a><a href={personalInfo.linkedin} {...externalProps} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 hover:text-teal-300"><Linkedin size={19} /> LinkedIn</a><a href={personalInfo.github} {...externalProps} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 hover:text-teal-300"><Github size={19} /> GitHub</a><span className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200"><MapPin size={19} /> {personalInfo.location}</span></div><p className="text-sm text-slate-500">© {new Date().getFullYear()} Ofri Rozner. Built with React &amp; Tailwind.</p></div></footer>
    </div>
  );
}

export default App;
