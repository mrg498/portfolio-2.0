import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro id="intro"/>
    <About id="about"/>
    <Experience id="experience"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
  </Layout>
)

export default IndexPage
