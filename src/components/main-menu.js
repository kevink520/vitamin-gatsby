import { graphql, StaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import gsap, { ScrollToPlugin } from "gsap/all"
import Scrollspy from 'react-scrollspy'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

gsap.registerPlugin(ScrollToPlugin);

const MainMenu = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            items {
              object_id
              title
              url
            }
          }
        }
      }
    }          
  `} render={props => (
    <Navbar fixed="top" expand="md" className="navbar-default navbar-fixed-top" role="navigation">
      <Container>
        <div className="navbar-header">
          <Navbar.Toggle aria-controls="navbar-collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
        </div>
        {window.location.pathname !== '/sinecharta-app-privacy-policy' &&
        <Navbar.Collapse id="navbar-collapse">
          <Scrollspy items={['home', 'services', 'portfolio', 'about', 'contact']} currentClassName="active" offset={-96} className="nav navbar-nav navbar-right">
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(({
              object_id,
              title,
              url,
            }, i) => (
              <li key={object_id} className={`nav-item nav-item-${title.toLowerCase().replace(/\s/g, '-')}`}>
                {url.indexOf('#') === 0 ?
                <a
                  className={`nav-link menu-hash-link menu-hash-link-${i}`}
                  href={url}
                  onClick={e => {
                    e.preventDefault();
                    gsap.to(window, { duration: 1, scrollTo: { y: url, offsetY: 95 } });
                  }}
                >{title}</a> :
                <Link
                  to={url}
                >
                  {title}
                </Link>}
              </li>
            ))}
          </Scrollspy>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
  )} />
);

MainMenu.propTypes = {
  siteTitle: PropTypes.string,
}

MainMenu.defaultProps = {
  siteTitle: ``,
}

export default MainMenu
