import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <header className="header">
        <h1>My Projects</h1>
        <p className="tagline">A collection of my work</p>
      </header>

      <main className="main-content">
        <section className="projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <h4><li>About Me Website</li></h4>
              <p>The website was my first completed coding project. I built it using React and deployed it using Vercel. 
                I used HTML, CSS, and JavaScript to build the website. I used React to build the website. I used Vercel to deploy the website.
                I used GitHub to store the code for the website. I used the Cursor IDE to build the website. 
                This website is a simple portfolio website that I built to showcase my skills and projects.
              </p>
              <div className="project-links">
                <a href="https://about-me-website-davidj280.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                <a href="https://github.com/DavidJ280/about-me-website" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project goes here.</p>
              <div className="project-links">
                <button className="project-link" disabled>Coming Soon</button>
                <button className="project-link" disabled>Coming Soon</button>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your third project goes here.</p>
              <div className="project-links">
                <button className="project-link" disabled>Coming Soon</button>
                <button className="project-link" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects; 