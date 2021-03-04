import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as indexStyles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={indexStyles.bgImageOverlay}/>
    <StaticImage 
      src="../images/jake-hills-mI02K_LxlfU-unsplash.jpg"
      alt="background image"
      layout='fullWidth'
      loading="eager"
      backgroundColor='rgb(0,0,0)'
      quality={30}
      className={indexStyles.bgImage}
    />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
