import "./index.css"
import React from "react"

const ComingSoon = () => (
  <section className="ComingSoon">
    <div className="logo" />
    <p>I'm working on something for you.</p>
    <ul className="social">
      <li>
        <a href="http://twitter.com/jchristianhall" data-icon="&#xe000;">
          <span className="hidden">Twitter</span>
        </a>
      </li>
      <li>
        <a href="http://github.com/jchristianhall" data-icon="&#xe001;">
          <span className="hidden">Github</span>
        </a>
      </li>
      <li>
        <a href="mailto:hello@christianhall.me" data-icon="&#xe002;">
          <span className="hidden">Mail</span>
        </a>
      </li>
    </ul>
  </section>
)

export default ComingSoon
