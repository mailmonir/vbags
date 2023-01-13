import Image from "next/image";

import logo from "../public/img/logo.png";
import logow from "../public/img/logo-f-white.png";

import luggage from "../public/img/bags/Luggage1.png";
import laptop from "../public/img/bags/Laptop-Bag4.png";
import hiking from "../public/img/bags/Hiking-Bag4.png";
import duffle from "../public/img/bags/Duffle-Bag2.png";

const Categories = () => {
  return (
    <section className="categories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Categories</h2>
      </div>

      <div className="categories__items">
        {/* <div className="categories__item">
          <Image src={logo} alt="logo" />
        </div> */}
        <div className="categories__item">
          <div className="categories__overlay1">tset</div>
          <Image src={luggage} alt="test" className="categories__image" />
        </div>

        <div className="categories__item">
          <Image src={laptop} alt="test" className="categories__image" />
        </div>
        <div className="categories__item">
          <Image src={duffle} alt="test" className="categories__image" />
        </div>
        <div className="categories__item">
          <Image src={hiking} alt="test" className="categories__image" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
