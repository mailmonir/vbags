import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FaSearch } from "react-icons/fa"

const Navbar = () => {
  const [navUp, setNavUp] = React.useState(false)
  const [rotateBars, setRotateBars] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = event => {
      window.scrollY > 10 ? setNavUp(true) : setNavUp(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handlClick = () => {
    setRotateBars(state => !state)
    setOpenMenu(state => !state)
  }

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      setRotateBars(state => !state)
      setOpenMenu(state => !state)
    }
  }

  return (
    <nav className={`navbar ${navUp ? "float-nav" : ""}`}>
      <Link to="/">
        <StaticImage
          className="logo-white"
          src="../images/logo-white.png"
          alt="Victor Bags BD Logo White"
          layout="fullWidth"
        />
        <StaticImage
          className="logo"
          src="../images/logo.png"
          alt="Victor Bags BD Logo"
          layout="fullWidth"
        />
      </Link>

      <div
        className={`nav__button ${rotateBars ? "rotate-bars" : ""}`}
        onClick={handlClick}
        // onKeyUp={handleKeyUp}
      >
        <span className="nav__icon">&nbsp;</span>
      </div>

      <div className={`nav-wrapper ${openMenu ? "open" : ""}`}>
        {/* <a href="#" className="closebtn">
          &times;
        </a> */}
        <ul className="nav">
          <li className="nav__list-item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/products" className="nav__link">
              Products
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/gallery" className="nav__link">
              Gallery
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <button className="search">
        <FaSearch />
      </button>
    </nav>
  )
}

export default Navbar
