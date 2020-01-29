import { useStaticQuery, graphql } from "gatsby"

export const useSiteGCMS = type => {
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
            url(transformation: { image: { resize: { width: 700, fit: max } } })
          }
        }
        publications {
          publishedIn
          title
          subtitle
          link
        }
        skills {
          title
        }
        technologies {
          title
        }
        socialLinks {
          title
          link
          logo {
            url(
              transformation: {
                image: { resize: { height: 24, width: 24, fit: scale } }
              }
            )
          }
        }
      }
    }
  `)
  return gcms[type]
}
