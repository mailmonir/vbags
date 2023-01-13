import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import ContactForm from "../components/contactform"
import Breadcrumb from "../components/breadcrumb"
import GMap from "../components/gmap"
import { graphql } from "gatsby"

const Contact = ({ data }) => {
  const featuredImage = data?.wpPage?.featuredImage?.node
  const title = data?.wpPage?.title
  const contact = data?.wpPage?.contactPage
  console.log(data)

  const styles = {
    init: `linear-gradient(
          to right,
          rgba(255,255,255, 0.9) 0%,
          rgba(255,255,255, 0.9) 100%),
        url(${contact?.contactFormImage?.sourceUrl})`,

    upto900: `linear-gradient(
        105deg,
        rgba(255,255,255, 0.9) 0%,
        rgba(255,255,255, 0.9) 65%,
        transparent 65%
      ),
      url(${contact?.contactFormImage?.sourceUrl})`,

    upto1200: `linear-gradient(
      105deg,
      rgba(255,255,255, 0.9) 0%,
      rgba(255,255,255, 0.9) 50%,
      transparent 50%
    ),
    url(${contact?.contactFormImage?.sourceUrl})`,
  }

  return (
    <Layout>
      <Banner title={title} image={featuredImage} />
      <Breadcrumb bcitems={[{ text: "Contact", link: "" }]} />
      <main className="u-offset-x contact">
        <h2 className="heading-secondary">{contact?.contactHeading}</h2>
        <p className="paragraph">{contact?.contactDescription}</p>
        <div className="address-box-wrapper">
          <div className="address-box">
            {contact?.addr1Heading && (
              <h3 className="heading-tertiary u-margin-bottom-small">
                {contact?.addr1Heading}
              </h3>
            )}
            {contact?.addr1Line1 && (
              <p className="address-box__text">{contact?.addr1Line1}</p>
            )}
            {contact?.addr1Line2 && (
              <p className="address-box__text">{contact?.addr1Line2}</p>
            )}
            {contact?.addr1Email && (
              <p className="address-box__text">Email:{contact?.addr1Email}</p>
            )}
            {contact?.addr1Mobile && (
              <p className="address-box__text">Mobile:{contact?.addr1Mobile}</p>
            )}
            {contact?.addr1Web && (
              <p className="address-box__text">Web:{contact?.addr1Web}</p>
            )}
          </div>

          <div className="address-box">
            {contact?.addr2Heading && (
              <h3 className="heading-tertiary u-margin-bottom-small">
                {contact?.addr2Heading}
              </h3>
            )}
            {contact?.addr2Line1 && (
              <p className="address-box__text">{contact?.addr2Line1}</p>
            )}
            {contact?.addr2Line2 && (
              <p className="address-box__text">{contact?.addr2Line2}</p>
            )}
            {contact?.addr2Email && (
              <p className="address-box__text">Email:{contact?.addr2Email}</p>
            )}
            {contact?.addr2Mobile && (
              <p className="address-box__text">Mobile:{contact?.addr2Mobile}</p>
            )}
            {contact?.addr2Web && (
              <p className="address-box__text">Web:{contact?.addr2Web}</p>
            )}
          </div>

          <div className="address-box">
            {contact?.addr3Heading && (
              <h3 className="heading-tertiary u-margin-bottom-small">
                {contact?.addr3Heading}
              </h3>
            )}
            {contact?.addr3Line1 && (
              <p className="address-box__text">{contact?.addr3Line1}</p>
            )}
            {contact?.addr3Line2 && (
              <p className="address-box__text">{contact?.addr3Line2}</p>
            )}
            {contact?.addr3Line3 && (
              <p className="address-box__text">{contact?.addr3Line3}</p>
            )}
            {contact?.addr3Email && (
              <p className="address-box__text">Email:{contact?.addr3Email}</p>
            )}
            {contact?.addr3Mobile && (
              <p className="address-box__text">Mobile:{contact?.addr3Mobile}</p>
            )}
            {contact?.addr3Web && (
              <p className="address-box__text">Web:{contact?.addr3Web}</p>
            )}
          </div>
        </div>

        <div className="contact-form u-margin-top-huge">
          <h2 className="heading-secondary">{contact?.messageHeading}</h2>
          <p className="paragraph">{contact?.messageDescription}</p>

          <div
            className="book upto1200"
            style={{ backgroundImage: styles.upto1200 }}
          >
            <ContactForm />
          </div>
          <div
            className="book upto900"
            style={{ backgroundImage: styles.upto900 }}
          >
            <ContactForm />
          </div>
          <div className="book init" style={{ backgroundImage: styles.init }}>
            <ContactForm />
          </div>
        </div>
        <div className="gmap u-margin-top-huge" id="gmap">
          <h2 className="heading-secondary" style={{ marginBottom: "2rem" }}>
            Location
          </h2>
          <GMap lat={contact?.latitude} lng={contact?.longitude} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(databaseId: { eq: 39 }) {
      title
      contactPage {
        addr1Email
        addr1Fax
        addr1Heading
        addr1Line1
        addr1Line2
        addr1Mobile
        addr1Web
        addr2Email
        addr2Fax
        addr2Heading
        addr2Line1
        addr2Line2
        addr2Mobile
        addr3Fax
        addr3Heading
        addr3Line1
        addr3Line2
        addr3Mobile
        addr2Web
        contactDescription
        contactHeading
        latitude
        longitude
        messageDescription
        messageHeading
        addr3Line3
        contactFormImage {
          altText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          sourceUrl
          title
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

export default Contact
