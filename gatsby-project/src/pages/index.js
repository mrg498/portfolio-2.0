import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
  </Layout>
)

export default IndexPage
