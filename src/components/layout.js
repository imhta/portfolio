/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
        <a href="https://ponmuthuselvam.xyz">ponmuthuselvam.xyz</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
