import { useStaticQuery, graphql } from 'gatsby';
export const useServicesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityServices {
          edges {
            node {
              heroDescription
              heroHeading
              id
              slug {
                current
              }
              parentPage {
                slug {
                  current
                }
              }
            }
          }
        }
        sanityOurServicesPage {
          description
          heading
          pageDescription
          pageTitle
          section7link {
            slug {
              current
            }
            heroHeading
          }
          section6link {
            heroHeading
            slug {
              current
            }
          }
          section5link {
            slug {
              current
            }
            heroHeading
          }
          section4link {
            slug {
              current
            }
            heroHeading
          }
          section3link {
            slug {
              current
            }
            heroHeading
          }
          section3description
          section2Title
          section2Eyebrow
          section2ImageText
          section7description
          section6description
          mainImage {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          section1Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section4Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section5Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section7Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          _rawSection2Block
          _rawSection4Block
          _rawSection5Block
        }
      }
    `
  );
  return data;
};
