import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Breadcrumb from "../components/breadcrumb"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const featuredImage = data?.wpPage?.featuredImage?.node
  const title = data?.wpPage?.title
  const mdSpeech = data?.wpPage?.aboutPage?.mdSpeech
  const aboutUs = data?.wpPage?.aboutPage?.aboutUs
  return (
    <Layout>
      <Banner title={title} image={featuredImage} />
      <Breadcrumb bcitems={[{ text: "About", link: "" }]} />
      <main className="about u-offset-x">
        <div className="story">
          <div className="story__text">
            <h3 className="heading-secondary u-margin-bottom-small">
              Our Story
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: aboutUs,
              }}
            ></div>
          </div>
        </div>
        <div className="story">
          <div className="story__text">
            <h3 className="heading-secondary u-margin-bottom-small">
              Speech from MD
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: mdSpeech,
              }}
            ></div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(databaseId: { eq: 37 }) {
      title
      aboutPage {
        aboutUs
        mdSpeech
      }
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default About
