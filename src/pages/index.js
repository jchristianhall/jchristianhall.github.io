function Home() {
  return (
    <main className="Home">
      <div className="HomeBackground">
        <div className="HomeBackground-element HomeBackground-top1"></div>
        <div className="HomeBackground-element HomeBackground-top2"></div>
        <div className="HomeBackground-element HomeBackground-bottom1"></div>
        <div className="HomeBackground-element HomeBackground-bottom2"></div>
      </div>

      <div className="Home-content">
        <h1 className="Home-name">Christian Hall</h1>
        <h2 className="Home-byline">Software Engineer</h2>

        <p className="Home-bio">
          Christian is a software engineer who cares deeply for usable designs
          and sustainable development.
        </p>

        <div className="Home-links">
          <a href="/Christian Hall Resume.pdf" className="Home-link">
            Resume
          </a>
          <a href="https://twitter.com/jchristianhall" className="Home-link">
            Twitter
          </a>
          <a href="https://github.com/jchristianhall" className="Home-link">
            GitHub
          </a>
        </div>

        <footer className="Home-footer">
          Crafted in Tennessee. &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  )
}

export default Home
