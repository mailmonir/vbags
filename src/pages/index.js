import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Certifications from "../components/certifications"
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <Slider />
    <Certifications />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
