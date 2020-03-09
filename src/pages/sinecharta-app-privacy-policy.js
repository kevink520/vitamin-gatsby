import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ReactHtmlParser from 'react-html-parser';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SinechartaAppPrivacyPolicy = () => (
  <Layout>
    <SEO title="Sinecharta App Privacy Policy" />
    <StaticQuery query={graphql`
      {
        wordpressPage(slug: {eq: "sinecharta-app-privacy-policy"}) {
          content
          title
        }
      }          
    `} render={props => {
      return (
        <div id="primary" class="content-area">
          <main id="main" class="site-main" role="main">
            <article
              class="page type-page"
            >
              <header class="entry-header">
                <h1 class="entry-title">{props.wordpressPage.title}</h1>
              </header>

              <div class="entry-content">
                {ReactHtmlParser(props.wordpressPage.content)}
              </div>
            </article>
          </main>
        </div>
      )
    }} />
  </Layout>
)

export default SinechartaAppPrivacyPolicy
