import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <About />
    </div>
    <Fade bottom distance={"100px"}>
      <Experience />
    </Fade>
    <Fade bottom distance={"100px"}>
      <Projects />
    </Fade>
    <Fade bottom distance={"100px"}>
      <Contact />
    </Fade>
  </Layout>
)

export default IndexPage
