function Home() {
  return (
    <main className="Home">
      <div className="HomeBackground">
        <div className="HomeBackground-element HomeBackground-top1"></div>
        <div className="HomeBackground-element HomeBackground-top2"></div>
        <div className="HomeBackground-element HomeBackground-bottom1"></div>
        <div className="HomeBackground-element HomeBackground-bottom2"></div>
      </div>

      <h1 className="Home-name">Christian Hall</h1>
      <h2 className="Home-byline">Software Engineer</h2>

      <p className="Home-bio">
        Christian is a software engineer who cares deeply for usable designs and
        sustainable development.
      </p>

      <footer className="Home-footer">
        Crafted in Tennessee. &copy; {new Date().getFullYear()}
      </footer>
    </main>
  )
}

export default Home
