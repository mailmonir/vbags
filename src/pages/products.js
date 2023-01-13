import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import Banner from "../components/banner"
import IsoProducts from "../components/isoproducts"
import { graphql } from "gatsby"

const Products = ({ data }) => {
  const featuredImage = data?.wpPage?.featuredImage?.node
  const title = data?.wpPage?.title
  const products = data?.wpPage?.productsPage?.products
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout>
      <Banner title={title} image={featuredImage} />
      <Breadcrumb bcitems={[{ text: "Products", link: "" }]} />
      <main className="products u-offset-x">
        {isBrowser && <IsoProducts products={products} />}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(databaseId: { eq: 41 }) {
      title
      productsPage {
        products {
          productDescription
          productName
          productImage {
            altText
            caption
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            sourceUrl
          }
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

export default Products
