import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import configUtils from "../utils/configUtils"
import { useSiteConfigs } from "../hooks/use-site-configs"
const IndexPage = () => {
  const configs = useSiteConfigs()
  return(
    <Layout>
      <SEO title="Home" />
      <h1>{configUtils(configs).getValueByType("MAIN_TITLE")}</h1>
      <h1>{configUtils(configs).getValueByType("MAIN_SUBTITLE")}</h1>
    </Layout>
  );
}

export default IndexPage
