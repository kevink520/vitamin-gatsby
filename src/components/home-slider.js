import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const HomeSlider = (props) => (
  <StaticQuery query={graphql`
    {
      wordpressPage(slug: {eq: "home"}) {
        acf {
          slider_images {
            alt_text
            source_url
            wordpress_id
          }
        }
      }
    }        
  `} render={props => (
    <Slider className="slides" { ...settings }>
      {props.wordpressPage.acf.slider_images.map(({
        alt_text,
        source_url,
        wordpress_id,
      }) => (
        <div key={wordpress_id}>
          <img
            src={source_url}
            alt={alt_text}
          />
        </div>
      ))}
    </Slider>
  )} />
)

export default HomeSlider
