import React from "react"
import { Link } from "gatsby"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { StaticImage } from "gatsby-plugin-image"

export default function BgSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      duration: 5000,
      dragStart: () => {
        // autoplay(false)
      },
      dragEnd: () => {
        // autoplay(true)
      },
    },
    [
      slider => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <StaticImage
          src="../images/carousel/slider-one.jpg"
          alt="slider image one"
          className="slider-image"
        />
        <div className="overlay">
          <div className="overlay__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Victor Bags Limited</span>
              <span className="heading-primary--sub">
                is where expedition starts
              </span>
            </h1>

            <Link href="/products" className="btn btn--white btn--animated">
              Discover our products
            </Link>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <StaticImage
          src="../images/carousel/slider-two.jpg"
          alt="slider image two"
          className="slider-image"
        />
        <div className="overlay">
          <div className="overlay__text-box">
            <h1 className="heading-primary">
              <span
                className="heading-primary--main"
                // style={{
                //   fontSize: "3rem",
                //   letterSpacing: "1.1rem",
                //   maxWidth: "100rem",
                // }}
              >
                A bag manufacturer, we have served more than ten well known
                brands and have passed ISO9001, BSCI, SEDEX and other
                certifications
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <StaticImage
          src="../images/carousel/slider-three.jpg"
          alt="slider image three"
          className="slider-image"
        />
        <div className="overlay">
          <div className="overlay__text-box">
            <h1 className="heading-primary">
              <span
                className="heading-primary--main"
                // style={{ letterSpacing: 1 }}
              >
                Design & Developement
              </span>
              <span
                className="heading-primary--sub"
                // style={{ maxWidth: "100rem", letterSpacing: 1 }}
              >
                According to trend of developent, continue to develop new styles
                and new features to product
              </span>
            </h1>

            <Link href="/about" className="btn btn--white btn--animated">
              More about us
            </Link>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <StaticImage
          src="../images/carousel/slider-four.jpg"
          alt="slider image four"
          className="slider-image"
        />
        <div className="overlay"></div>
      </div>
    </div>
  )
}
