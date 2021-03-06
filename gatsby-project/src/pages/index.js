import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
  </Layout>
)

export default IndexPage
