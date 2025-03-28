import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Projects from './pages/Projects';

function Home() {
  return (
    <div className="App">
      <header className="header">
        <h1>David Job</h1>
        <p className="tagline">Web Developer & Designer</p>
      </header>

      <div className="media">
        <div className="media-content">
          <h1>Media</h1>
          <img src="/game.png" alt="game"/>
        </div>
      </div>

      <main className="main-content">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Hello! I'm David Job, a passionate web developer with a keen interest in creating
            beautiful and functional web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Senior Web Developer</h3>
            <p className="company">Company Name</p>
            <p className="date">2020 - Present</p>
            <ul>
              <li>Led development of key features</li>
              <li>Mentored junior developers</li>
              <li>Improved application performance</li>
            </ul>
          </div>
        </section>

        <section className="contact-section">
          <h2>Contact Me</h2>
          <div className="contact-info">
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' }
  ];
  
  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <nav className="navigation">
      <button 
        className="nav-button" 
        onClick={() => prevPage && navigate(prevPage.path)}
        disabled={!prevPage}
      >
        Previous
      </button>
      {pages.map(page => {
        const isActive = location.pathname === page.path;
        return (
          <Link
            key={page.path}
            to={page.path}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            {page.label}
          </Link>
        );
      })}
      <button 
        className="nav-button" 
        onClick={() => nextPage && navigate(nextPage.path)}
        disabled={!nextPage}
      >
        Next
      </button>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
