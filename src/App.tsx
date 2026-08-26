import { useEffect, useState } from "react";

type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  url?: string;
  theme: "lime" | "blue" | "orange";
};

const projects: Project[] = [
  {
    index: "01",
    title: "4X Digital.AI",
    category: "Ad analytics platform",
    description:
      "A production platform that unifies Google Ads and Meta Ads campaign data, automates reporting, and gives teams a clear view of performance.",
    metrics: [
      { value: "70%", label: "less manual reporting" },
      { value: "15+", label: "REST APIs delivered" },
      { value: "10+", label: "clients supported" },
    ],
    stack: ["React", "TypeScript", ".NET", "Python", "SQL", "Azure"],
    url: "https://4xdigital.ai",
    theme: "lime",
  },
  {
    index: "02",
    title: "VideoWorkers",
    category: "Video recruitment platform",
    description:
      "A multi-role hiring experience connecting candidates and employers through video CVs, intelligent search, and structured recruitment workflows.",
    metrics: [
      { value: "3", label: "role-based experiences" },
      { value: "JWT", label: "secure authentication" },
      { value: "Blob", label: "scalable video storage" },
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Azure Blob"],
    url: "https://www.workineurope.eu/",
    theme: "blue",
  },
  {
    index: "03",
    title: "Learning Platform",
    category: "Full-stack education product",
    description:
      "A responsive learning system with separate student and admin modules, quizzes, content delivery, user activity, and automated daily updates.",
    metrics: [
      { value: "10+", label: "REST APIs built" },
      { value: "2", label: "dedicated modules" },
      { value: "CI/CD", label: "automated deployment" },
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "Trello API"],
    url: "https://fullstacklearning.com",
    theme: "orange",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Front-end systems",
    text: "Responsive interfaces and reusable component systems built with React, TypeScript, JavaScript, and modern CSS.",
  },
  {
    number: "02",
    title: "Back-end engineering",
    text: "REST APIs, authentication, business logic, integrations, and data services using Node.js and C#/.NET.",
  },
  {
    number: "03",
    title: "Cloud delivery",
    text: "Containerized services, CI/CD pipelines, monitoring, and reliable deployments across Azure and AWS.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Akshat Sharma, home">
          AS<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="mailto:sakshat678@gmail.com" onClick={closeMenu}>
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-heading">
          <div className="hero-status reveal">
            <span className="status-dot" /> Available for full-stack opportunities
          </div>
          <h1 id="hero-heading" className="reveal delay-1">
            I build digital products that <em>work hard.</em>
          </h1>
          <div className="hero-bottom reveal delay-2">
            <p>
              Full-stack developer turning complex requirements into clear interfaces, dependable APIs, and production-ready cloud deployments.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="button button-ghost" href="/akshat-sharma-resume.pdf" download>Download résumé</a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <span>React</span><span>APIs</span><span>Cloud</span>
          </div>
        </section>

        <section className="marquee" aria-label="Core technologies">
          <div className="marquee-track">
            <span>React</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Node.js</span><i>✦</i><span>.NET</span><i>✦</i><span>Azure</span><i>✦</i><span>Docker</span><i>✦</i>
            <span aria-hidden="true">React</span><i aria-hidden="true">✦</i><span aria-hidden="true">TypeScript</span><i aria-hidden="true">✦</i><span aria-hidden="true">Node.js</span><i aria-hidden="true">✦</i><span aria-hidden="true">.NET</span><i aria-hidden="true">✦</i><span aria-hidden="true">Azure</span><i aria-hidden="true">✦</i><span aria-hidden="true">Docker</span><i aria-hidden="true">✦</i>
          </div>
        </section>

        <section id="work" className="work-section section-pad" aria-labelledby="work-heading">
          <div className="section-heading">
            <div><span className="eyebrow">Selected work</span><h2 id="work-heading">Proof, not promises.</h2></div>
            <p>Production products where I contributed across the stack—from interface to infrastructure.</p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className={`project-card theme-${project.theme}`} key={project.title}>
                <div className="project-index">({project.index})</div>
                <div className="project-main">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tech-list" aria-label={`${project.title} technologies`}>
                    {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                  ))}
                </div>
                {project.url ? (
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                    <Arrow diagonal />
                  </a>
                ) : <span className="project-link project-link-muted" aria-hidden="true">•</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="expertise-section section-pad" aria-labelledby="expertise-heading">
          <div className="expertise-intro">
            <span className="eyebrow">How I contribute</span>
            <h2 id="expertise-heading">One developer.<br /><em>Full product view.</em></h2>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-pad" aria-labelledby="about-heading">
          <div className="about-kicker">Based in India · Working remotely</div>
          <div className="about-grid">
            <h2 id="about-heading">I care about the gap between <em>“it runs”</em> and <em>“it works well.”</em></h2>
            <div className="about-copy">
              <p>
                I’m Akshat, a full-stack developer with hands-on experience shipping responsive applications, APIs, third-party integrations, and cloud deployments.
              </p>
              <p>
                I enjoy owning the complete journey: understanding the problem, shaping the interface, building the service, and making sure it behaves in production.
              </p>
              <div className="experience-note"><strong>2025—Now</strong><span>Building production full-stack applications</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" aria-labelledby="contact-heading">
          <span className="eyebrow">Have a role or project in mind?</span>
          <h2 id="contact-heading">Let’s build something <em>useful.</em></h2>
          <a className="contact-link" href="mailto:sakshat678@gmail.com">sakshat678@gmail.com <Arrow diagonal /></a>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <div><strong>Akshat Sharma</strong><span>Full-Stack Developer</span></div>
        <div className="footer-links">
          <a href="https://github.com/akshat1803" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="mailto:sakshat678@gmail.com">Email <Arrow diagonal /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p>© {new Date().getFullYear()} Akshat Sharma</p>
      </footer>
    </div>
  );
}

export default App;

