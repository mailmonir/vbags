import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Certifications() {
  return (
    <section className="certifications">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Certifications</h2>
      </div>

      <div className="certifications__item-wrapper">
        <div className="certifications__item">
          <StaticImage
            src="../images/certifications/bsci.webp"
            alt="bsci logo"
            className="certifications__image"
          />
        </div>
        <div className="certifications__item">
          <StaticImage
            src="../images/certifications/smeta.webp"
            alt="smeta logo"
            className="certifications__image"
          />
        </div>
        <div className="certifications__item">
          <StaticImage
            src="../images/certifications/oekotex.webp"
            alt="oekotex logo"
            className="certifications__image"
          />
        </div>
        <div className="certifications__item">
          <StaticImage
            src="../images/certifications/accord.webp"
            alt="accord logo"
            className="certifications__image"
          />
        </div>
      </div>
    </section>
  )
}
