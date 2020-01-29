import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

Navbar = ({ active }) => {
  const path = ["/", "/blogs", "/about"] 
  return (
    <nav>
      <Link to="/" className="active">
        Projects
      </Link>
      <Link to="/blogs">Publications</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

Navbar.propTypes = {
    active: PropTypes.string.isRequired,
}
export default Navbar
̥