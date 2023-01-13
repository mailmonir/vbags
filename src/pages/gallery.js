import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Breadcrumb from "../components/breadcrumb"
import LightGallery from "lightgallery/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

const Gallery = ({ data }) => {
  const gImgs = data?.wpPage?.galleryPage?.galleryImages
  const featuredImage = data?.wpPage?.featuredImage?.node

  return (
    <Layout>
      <Banner title={data?.wpPage?.title} image={featuredImage} />
      <Breadcrumb bcitems={[{ text: "Gallery", link: "" }]} />
      <main className="gallery u-offset-x">
        <LightGallery
          elementClassNames="gallery__light-gallery"
          plugins={[lgZoom, lgThumbnail]}
          exThumbImage="data-external-thumb-image"
        >
          {gImgs.map((img, index) => {
            return (
              <a
                href={img.sourceUrl}
                key={index}
                data-external-thumb-image={img.sourceUrl}
              >
                <GatsbyImage
                  alt="img1"
                  image={getImage(img?.localFile)}
                  className="gallery__image"
                />
              </a>
            )
          })}
        </LightGallery>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(databaseId: { eq: 10 }) {
      title
      galleryPage {
        galleryImages {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
          sourceUrl
          title
          caption
        }
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

export default Gallery
