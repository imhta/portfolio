import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { StaticQuery } from "gatsby"
const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          configs {
            type
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <h1>Hello, I'm Pon Muthu Selvam</h1>{" "}
        <h1> a web developer {JSON.stringify(data.gcms.configs)}</h1>
      </Layout>
    )}
  />
)

export default IndexPage
