import { graphql, StaticQuery } from "gatsby"
import React from "react"
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => (
  <StaticQuery query={graphql`
    {
      wordpressPage(slug: {eq: "home"}) {
        acf {
          about_section_content
          about_section_heading
          about_section_subheading
        }
      }
    }          
  `} render={props => (
    <div id="about" className="full-width gray-bg">
      <div className="container about">
        <div className="row">
          <div className="col-md-8 about-animated">
            <h2 className="about-heading">{ReactHtmlParser(props.wordpressPage.acf.about_section_heading)}</h2>
            <p className="lead" itemprop="description">{ReactHtmlParser(props.wordpressPage.acf.about_section_subheading)}</p>
            {ReactHtmlParser(props.wordpressPage.acf.about_section_content)}
            <div className="social-buttons">
              <a className="social-button" href="https://codepen.io/kevink520/" target="_blank"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
              <a className="social-button" href="https://github.com/kevink520" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
          </div>
          <div className="col-md-4 info-sidebar capabilities">
            <h4><span className="orange">Vitamin</span> Digital Media&#8217;s Capabilities</h4>
            <ul>
              <li><span>HTML5/<br/>CSS3/<br/>Sass</span></li>
              <li><span>JavaScript/<br/>React/<br/>React Native</span></li>
              <li><span>Gatsby.js/<br/>Next.js</span></li>
              <li><span>Node.js/<br/>Express.js<br/>MongoDB</span></li>
              <li><span>Greensock Animation Platform</span></li>
              <li><span>ScrollMagic</span></li>
              <li><span>PHP/<br/>MySQL</span></li>
              <li><span>Bootstrap</span></li>
              <li><span>WordPress/<br/>WooCommerce</span></li>
              <li><span>Photoshop/<br/>Design</span></li>
              <li><span>Copywriting/<br/>Copyediting</span></li>
              <li><span>Search Engine Optimization</span></li>
            </ul>
          </div>
        </div>       
      </div>
    </div>
  )} />
)

export default About
