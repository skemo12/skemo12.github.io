const basePath = process.env.BASE_PATH || "";

export default function Page() {
  return (
    <div className="page" id="top">
      <header className="hero">
        <nav className="nav">
          <a className="logo" href="#top" aria-label="Back to top">
            <img
              src={`${basePath}/DapIT_Logo_perfect.png`}
              alt="DapIT logo"
              width={120}
              height={32}
            />
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Let's talk
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Product-minded engineer</p>
            <h1>
              I design performant, scalable, efficient digital products that feel crafted,
              not assembled.
            </h1>
            <p className="lede">
              I'm Alex Darius Paunoiu, a full-stack builder, CEO of DAP IT Solutions
              SRL with a passion for creating performant, efficient, state of the art solutions.
              This page is a simple, scrollable snapshot of how I think, build, and collaborate.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work
              </a>
              <a className="text-link" href="https://github.com/skemo12">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="badge">Currently</p>
              <h2>Building human-first SaaS experiences.</h2>
              <div className="facts">
                <div>
                  <span className="fact-number">6+</span>
                  <span className="fact-label">Launches led</span>
                </div>
                <div>
                  <span className="fact-number">3</span>
                  <span className="fact-label">Teams partnered</span>
                </div>
                <div>
                  <span className="fact-number">2</span>
                  <span className="fact-label">Products in flight</span>
                </div>
              </div>
              <p className="mini">
                Based in Romania · Available for selective collaborations
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-hint">Scroll for the story</div>
      </header>

      <main className="main">
        <section id="about" className="section reveal">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2>Design, engineering, and empathy in one workflow.</h2>
          </div>
          <div className="split">
            <p>
              I like to sit where product strategy, visual design, and code
              overlap. That means research that feels human, prototypes that feel
              real, and interfaces that stay thoughtful at scale. I keep
              everything calm, legible, and a little bit warm.
            </p>
            <ul className="bullets">
              <li>Product discovery and roadmap shaping</li>
              <li>Design systems that stay expressive</li>
              <li>Full-stack delivery with a frontend bias</li>
              <li>Metrics, feedback loops, and continuous iteration</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-header">
            <p className="eyebrow">Specialties</p>
            <h2>Recent work that blends utility with character.</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <p className="badge">SaaS Platform</p>
              <h3>Cloud Storage engineer and designer</h3>
              <p>
                Managing cloud storage solution using S3 object storage, ensuring
                high availability, scalability, and performance for enterprise clients.
              </p>
              <p className="card-meta">Role: Engineer, Designer</p>
            </article>
            <article className="card">
              <p className="badge">Customer Experience</p>
              <h3>AI developer and integration specialist</h3>
              <p>
                Building AI-powered customer support tools that leverage natural
                language processing to enhance user interactions and automate
                responses, improving efficiency and customer satisfaction.
              </p>
              <p className="card-meta">Role: Team Leader, Developer</p>
            </article>
            <article className="card">
              <p className="badge">Internal Tooling</p>
              <h3>Microservices</h3>
              <p>
                Designing and implementing microservices architecture to improve
                scalability and maintainability of internal applications, enabling
                faster development cycles and easier integration with third-party
                services.
              </p>
              <p className="card-meta">Role: Engineer, Architect</p>
            </article>
          </div>
        </section>

        <section id="focus" className="section reveal">
          <div className="section-header">
            <p className="eyebrow">Focus</p>
            <h2>What I optimize for when I build.</h2>
          </div>
          <div className="pillars">
            <div>
              <h3>Clarity over clutter</h3>
              <p>
                Interfaces should remove uncertainty, not add to it. I keep
                hierarchy visible and systems understandable.
              </p>
            </div>
            <div>
              <h3>Momentum with care</h3>
              <p>
                Move quickly, but not carelessly. Shipping fast is easiest when
                the foundations are tidy.
              </p>
            </div>
            <div>
              <h3>Performance and efficiency</h3>
              <p>
                I build with an eye for speed and resourcefulness, ensuring that
                products not only look good but also run smoothly and efficiently.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Let's build something that fits perfectly.</h2>
          </div>
          <div className="contact-card">
            <p>
              Want to chat about a product idea ? I'm happy to collaborate.
            </p>
            <div className="contact-actions">
              <a className="button" href="mailto:dariuspaunoiu@gmail.com">
                dariuspaunoiu@gmail.com
              </a>
              <a className="text-link" href="https://www.linkedin.com/in/dariuspaunoiu/">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Alex Darius Paunoiu. Built with Next.js and a lot of coffee.</p>
      </footer>
    </div>
  );
}
