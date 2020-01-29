import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import configUtils from "../utils/configUtils"
import { useSiteGCMS } from "../hooks/use-site-gcms"
const AboutPage = () => {
  const configs = useSiteGCMS("configs")
  const technologies = useSiteGCMS("technologies")
  const skills = useSiteGCMS("skills")
  const socialLinks = useSiteGCMS("socialLinks")
  return (
    <Layout>
      <SEO title="About" />
      <div className="app">
        <header>
          <p>{configUtils(configs).getValueByType("MAIN_TITLE")}</p>
          <h1>{configUtils(configs).getValueByType("MAIN_SUBTITLE")}</h1>
          <p>
            {configUtils(configs).getValueByType("MAIN_MINI_DESCRIPTION")}{" "}
            <span role="img" aria-label="heart emoji">
              💖
            </span>
          </p>
        </header>
        <main>
          <nav>
            <Link to="/">Projects</Link>
            <Link to="/blogs">Publications</Link>
            <Link to="/about" className="active">
              About
            </Link>
          </nav>
          <section className="skill-section">
            <strong>
              <p>Skills</p>
            </strong>
            <p>{skills.map(skill => skill.title).join(" | ")}</p>
          </section>
          <section className="tech-section">
            <strong>
              <p>Technologies</p>
            </strong>
            <p>{technologies.map(tech => tech.title).join(" | ")}</p>
          </section>
          <section className="social-section">
            <strong>
              <p>To know more</p>
            </strong>
            {socialLinks.map(socialLink => 
              <a href={socialLink.title === 'email' ? 'mailto:' + socialLink.link : socialLink.link}>
                {socialLink.title} <br/>
              </a>)}
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default AboutPage
