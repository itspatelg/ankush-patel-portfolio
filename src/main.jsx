import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Layers3,
  Menu,
  X
} from "lucide-react";
import "./styles.css";

const github = "https://github.com/itspatelg";
const linkedin = "https://www.linkedin.com/in/ankush-patel-1157b8265/";
const liveInstagram = "https://instagram-clone-fullstack-pi.vercel.app";
const email = "mailto:ankushpatel7744@gmail.com";
const phone = "tel:+917747998646";

const skills = [
  "Java", "JavaScript", "Spring Boot", "REST APIs", "React.js", "MySQL",
  "WebSocket", "OOP", "Collections", "SQL", "HTML", "CSS", "Bootstrap",
  "Git", "GitHub", "Postman", "Railway", "Vercel", "Cloudinary"
];

function App() {
  const [open, setOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("home")}>AP<span>.</span></button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <button onClick={() => go("about")}>About</button>
            <button onClick={() => go("skills")}>Skills</button>
            <button onClick={() => go("projects")}>Projects</button>
            <button onClick={() => go("education")}>Education</button>
            <button onClick={() => go("contact")}>Contact</button>
          </nav>
          <a className="nav-cta" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Available for opportunities</div>
            <h1>Java Full Stack<br/><em>Developer.</em></h1>
            <p className="hero-text">
              I build backend-focused web applications with Java, Spring Boot,
              REST APIs and MySQL, while creating responsive interfaces with React.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go("projects")}>View my work <ArrowUpRight size={18}/></button>
              <a className="secondary" href={email}>Let's connect <Mail size={17}/></a>
            </div>
            <div className="socials">
              <a href={github} target="_blank" rel="noreferrer"> GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer"> LinkedIn</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="photo-ring">
              <img src="/profile.jpg" alt="Ankush Patel" className="hero-photo"/>
            </div>
            <div className="floating-card">
              <Code2 size={19}/>
              <div><strong>150+</strong><span>DSA Problems</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Building practical software,<br/><span>one project at a time.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I'm Ankush Patel, a Computer Science graduate focused on Java
                full-stack development. My hands-on work includes Spring Boot,
                REST APIs, MySQL, React and real-time communication with WebSocket.
              </p>
              <p>
                I completed an Advance Java mentorship and built a full-stack
                Instagram Clone with authentication, posts, comments, likes,
                stories and real-time messaging.
              </p>
              <div className="mini-stats">
                <div><strong>7.12</strong><span>CGPA</span></div>
                <div><strong>150+</strong><span>DSA Problems</span></div>
                <div><strong>1</strong><span>Deployed Full-Stack App</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">02 / SKILLS</div>
          <h2>Tools I work with.</h2>
          <div className="skill-grid">
            <div className="skill-card"><Server/><h3>Backend</h3><p>Java · Spring Boot · REST APIs · WebSocket · OOP · Collections</p></div>
            <div className="skill-card"><Layers3/><h3>Frontend</h3><p>React.js · JavaScript · HTML · CSS · Bootstrap</p></div>
            <div className="skill-card"><Database/><h3>Database</h3><p>MySQL · SQL · CRUD · Database connectivity</p></div>
            <div className="skill-card"><Code2/><h3>Tools</h3><p>Git · GitHub · Postman · Railway · Vercel · Cloudinary</p></div>
          </div>
          <div className="chips">{skills.map(s => <span key={s}>{s}</span>)}</div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 / PROJECTS</div>
          <div className="project-heading">
            <h2>Selected work.</h2>
            <span>Built while learning and shipping.</span>
          </div>
          <article className="project-card featured">
            <div className="project-number">01</div>
            <div className="project-content">
              <div className="project-top"><span>2026 · FULL STACK</span><a href={liveInstagram} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a></div>
              <h3>Instagram Clone</h3>
              <p>
                A full-stack social media application with authentication, posts,
                comments, likes, stories and real-time messaging between users.
              </p>
              <ul>
                <li>REST APIs with Spring Boot and React frontend integration.</li>
                <li>Real-time chat using WebSocket/SockJS.</li>
                <li>MySQL data management with Cloudinary media handling.</li>
                <li>Frontend deployed on Vercel and backend on Railway.</li>
              </ul>
              <div className="project-tags"><span>React</span><span>Spring Boot</span><span>MySQL</span><span>WebSocket</span></div>
              <a className="project-github" href={github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15}/></a>
            </div>
          </article>

          <article className="project-card upcoming">
            <div className="project-number">02</div>
            <div className="project-content">
              <div className="project-top"><span>IN PROGRESS</span><span className="muted">JAVA + MYSQL</span></div>
              <h3>Library Management System</h3>
              <p>
                A compact Java/MySQL project for managing books, users and
                transactions with CRUD operations, validation and database connectivity.
              </p>
              <div className="project-tags"><span>Java</span><span>MySQL</span><span>CRUD</span></div>
              <span className="status">Currently building · Demo coming soon</span>
            </div>
          </article>
        </section>

        <section id="education" className="section">
          <div className="section-label">04 / EDUCATION</div>
          <div className="timeline">
            <div className="timeline-item">
              <div><span>2022 — 2026</span></div>
              <div><h3>Bachelor of Technology — Computer Science</h3><p>Lakshmi Narain College of Technology Excellence, Bhopal</p><strong>CGPA: 7.12</strong></div>
            </div>
            <div className="timeline-item">
              <div><span>May — Aug 2024</span></div>
              <div><h3>Advance Java Mentorship</h3><p>Pregrad · 3-month hands-on program covering Core Java, OOP, Spring Boot and REST APIs.</p><strong>Course Completion Certificate</strong></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-label">05 / CONTACT</div>
          <h2>Let's build something<br/><em>useful.</em></h2>
          <p>I'm open to Java backend and full-stack developer opportunities.</p>
          <a className="primary big" href={email}>Send me an email <ArrowUpRight size={19}/></a>
          <div className="contact-links">
            <a href={email}><Mail/> ankushpatel7744@gmail.com</a>
            <a href={phone}><Phone/> +91 77479 98646</a>
            <span><MapPin/> Rewa, Madhya Pradesh, India</span>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Ankush Patel</span>
        <span>Java Full Stack Developer</span>
        <div><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
