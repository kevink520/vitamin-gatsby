import { graphql, StaticQuery } from "gatsby"
import React from "react"

const stripTagsAndNewlines = str => (
  str.replace(/(<([^>]+)>)|\n/ig,'')
)

const Portfolio = props => (
  <StaticQuery query={graphql`
    {
      wordpressPage(slug: {eq: "home"}) {
        acf {
          portfolio_images {
            caption
            description
            source_url
            title
            wordpress_id
          }
        }
      }
    }          
  `} render={props => {
    const images = props.wordpressPage.acf.portfolio_images;
    return images.map((rowImg, i) => (
      i % 3 === 0 && (
        <div key={`r${rowImg.wordpress_id}`} className={`row p-row${i / 3 + 1}`}>
          {images.slice(i, i + 3).map(({
            caption,
            description,
            source_url,
            title,
            wordpress_id,
          }) => (
            <div key={`c${wordpress_id}`} className="col-sm-4">
              <div className={`item item${i + 1}`} itemscope itemtype="http://schema.org/WebPage">
                <a className="link-to-client-site" href={stripTagsAndNewlines(caption)} target="_blank" rel="noopener noreferrer">
                  <img src={source_url} alt={title} />
                  <div className="description">
                    <h4 itemprop="name">{title}</h4>
                    <p className="hidden-sm">{stripTagsAndNewlines(description)}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      )
    ));
  }} />
)

export default Portfolio
