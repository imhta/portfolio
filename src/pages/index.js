import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import configUtils from "../utils/configUtils"
import { useSiteGCMS } from "../hooks/use-site-gcms"
const IndexPage = () => {
  const configs = useSiteGCMS("configs")
  const projects = useSiteGCMS("projects")
  console.log(projects)
  return (
    <Layout>
      <SEO title="Projects" />
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
            <Link to="/" className="active">
              Projects
            </Link>
            <Link to="/blogs">Publications</Link>
            <Link to="/about">About</Link>
          </nav>
          {projects.map(project => (
            <article className="card">
              <img src={project.coverPicture.url} alt={project.title} />
              <div className="card-header">
              <h3>
                {project.title}
              </h3>
              <p>{project.subtitle}</p>
              </div>
              {  project.description.html ?  <p
                className="card-body"
                dangerouslySetInnerHTML={{ __html: project.description.html }}
              ></p> : ''}
              <div className="action-bar">
                <a href={project.sourceLink} target="_">Source</a>
                <a href={project.previewLink} target="_" hidden={project.previewLink ? false : true}>Preview</a>
              </div>
            </article>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
