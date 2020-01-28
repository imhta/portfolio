import { useStaticQuery, graphql } from "gatsby"

export const useSiteConfigs = () => {
  const { gcms } = useStaticQuery(graphql`
    query {
      gcms {
        configs {
          type
          value
        }
      }
    }
  `)
  return gcms.configs
}
