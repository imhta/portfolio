import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        <div className="theme-toggle">
          <button className="light active">
            <span role="img" aria-label="light mode">
              ☀️
            </span>
          </button>
          <button className="dark">
            <span role="img" aria-label="dark mode">
              🌙
            </span>
          </button>
        </div>
        © {new Date().getFullYear()},{` `}
        <a href="https://npms.dev">npms.dev</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
