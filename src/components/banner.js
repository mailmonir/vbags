import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <GatsbyImage
        image={getImage(image?.localFile)}
        alt={image.altText}
        className="banner__image"
      />
      <div className="banner__overlay">
        <h2 className="banner__title">{title}</h2>
      </div>
    </div>
  )
}

export default Banner
