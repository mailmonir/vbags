import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Isotope from "isotope-layout"

const IsoProducts = ({ products }) => {
  const categoriesSet = new Set()
  products.forEach(product => {
    categoriesSet.add(product.productName)
  })

  // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*")

  //   initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".cards", {
      itemSelector: ".card",
      layoutMode: "fitRows",
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  //   handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
      <ul className="filter-list">
        <li className="filter-list__item">
          <a
            href="/#"
            className="btn btn--red btn--small"
            onClick={handleFilterKeyChange("*")}
          >
            All
          </a>
        </li>
        {[...categoriesSet] &&
          [...categoriesSet].map((category, index) => (
            <li className="filter-list__item" key={index}>
              <a
                href="/#"
                className="btn btn--red btn--small"
                onClick={handleFilterKeyChange(
                  category.replace(/\s/g, "").toLowerCase()
                )}
              >
                {category}
              </a>
            </li>
          ))}
      </ul>

      <div className="cards">
        {products &&
          products.map((product, index) => (
            <div
              className={`card ${product?.productName
                .replace(/\s/g, "")
                .toLowerCase()}`}
              key={index}
            >
              <div className="card__side card__side--front">
                <GatsbyImage
                  className="card__image"
                  image={getImage(product?.productImage?.localFile)}
                  alt={`${product?.productImage?.altText}`}
                />
              </div>
              <div className="card__side card__side--back">
                <h1 className="heading-tertiary">{product?.productName}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.productDescription,
                  }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default IsoProducts
