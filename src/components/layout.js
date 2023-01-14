/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import LoadingSpinner from "./LoadingSpinner"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={loading ? { display: "none" } : { display: "block" }}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
