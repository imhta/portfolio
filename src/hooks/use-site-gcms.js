import { useStaticQuery, graphql } from "gatsby"

export const useSiteGCMS = (type) => {
  const { gcms } = useStaticQuery(graphql`
    query {
      gcms {
        configs {
          type
          value
        }
        projects {
          title
          subtitle
          sourceLink
          previewLink
          projectStatus
          description {
            html
            text
          }
          coverPicture {
            id
            url(transformation: {image: {resize: {width: 700, fit: max}}})
          }
        }
      }
    }
  `)
  return gcms[type]
}
