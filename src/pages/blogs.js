import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import configUtils from "../utils/configUtils"
import { useSiteConfigs } from "../hooks/use-site-configs"
const BlogsPage = () => {
  const configs = useSiteConfigs()
  return (  
    <Layout>
      <SEO title="Blogs" />
        <div className="app">
          <header>
            <p>{configUtils(configs).getValueByType("MAIN_TITLE")}</p>
            <h1>{configUtils(configs).getValueByType("MAIN_SUBTITLE")}</h1>
            <p>{configUtils(configs).getValueByType("MAIN_MINI_DESCRIPTION")} <span role="img" aria-label="heart emoji">💖</span></p>
          </header>
          <main>
            <nav>
              <Link to="/">Back to Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blogs">Publications</Link>
            </nav>
          </main>
        </div>

    </Layout>
  )
}


export default BlogsPage