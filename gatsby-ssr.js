/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === "production") {
    const snippet = `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
 arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
 d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
 insertBefore(d,q)}(window,document,'script','_gs');

_gs('GSN-329410-F');
_gs('set', 'anonymizeIP', true);`

    setHeadComponents([
      <script key="gosquared" dangerouslySetInnerHTML={{ __html: snippet }} />,
    ])
  }
}
