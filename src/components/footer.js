import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logobox">
        <Link to="/">
          <StaticImage
            src="../images/logo-white.png"
            alt="victor bags logo"
            className="footer__logo"
          />
        </Link>
      </div>

      <div className="footer__middle">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/products" className="footer__link">
                Products
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/gallery" className="footer__link">
                Gallery
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__text">
          <p className="footer__info">
            Victor Leather Bags Factory Ltd. is a Bangladeshi manufacturing and
            exporting unit of backpack, laptop bag, hiking bag, luggage and
            ladies bag.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyright">
          © {new Date().getFullYear()} &middot; Victor Bags BD Ltd. All right
          reserved.
        </div>
        <ul className="footer__list-social">
          <li className="footer__item-social">
            <a className="footer__link-social" href="https://facebook.com">
              <FaFacebookF />
            </a>
          </li>
          <li className="footer__item-social">
            <a className="footer__link-social" href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li className="footer__item-social">
            <a className="footer__link-social" href="https://linkedin.com">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
