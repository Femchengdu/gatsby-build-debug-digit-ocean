import * as React from "react"
import useGetShowList from "../../hooks/useGetShowList"
// Import Swiper React components
import { Navigation, A11y, Lazy } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/lazy"
import { Link } from "gatsby"
//import { GatsbyImage } from "gatsby-plugin-image"

const Shows = () => {
  const showData = useGetShowList()

  const params = {
    swiper: "show-swiper",
    // Add modules you need
    modules: [Navigation, A11y, Lazy],
    navigation: {
      nextEl: ".show-next",
      prevEl: ".show-prev",
    },
    spaceBetween: 12,
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
    },
    speed: 800,
    lazy: true,
  }

  return (
    <section className="slider-section margin-md">
      <Swiper {...params} className="show-swiper" id="show-swiper">
        {showData.map(showObj => {
          return (
            <SwiperSlide key={showObj.title}>
              <Link to={showObj.showsAcf.ledgerMediaUrl}>
                {showObj.featuredImage && (
                  <img
                    alt={showObj.title}
                    src={
                      showObj.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData.images.fallback.src
                    }
                    className="margin-xxs swiper-lazy"
                  />
                )}
              </Link>
            </SwiperSlide>
          )
        })}
        <div className="flexbox align-items-center margin-s">
          <div className="hover-link-display">
            <h2>
              <a href="/shows/index.html" title="See all shows">
                Show
              </a>
            </h2>{" "}
            &nbsp;&nbsp;&nbsp;
            <div className="link-display">
              <a href="/shows/index.html" title="See all shows">
                See all
              </a>
              <i className="icon icon-chevron-right" />
            </div>
          </div>
          <div className="swiper-controls">
            <div className="show-prev icon icon-arrow-left" />
            <div className="show-next icon icon-arrow-right" />
          </div>
        </div>
      </Swiper>
    </section>
  )
}

export default Shows