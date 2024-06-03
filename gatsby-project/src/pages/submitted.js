import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"

import "../components/layout.scss"
import * as submittedStyles from "../styles/submitted.module.scss"

const Submitted = () => (
  <div className={submittedStyles.container}>
    <SEO title="Form Submission" />
    <Header />
    <div className={submittedStyles.wrapper}>
      <h1 className={submittedStyles.title}>
        <span>Thanks!</span>
        <p className={submittedStyles.subTitle}>Form submission successful</p>
      </h1>
      <Link to="/" className={submittedStyles.btn}>
        Take Me Back
      </Link>
    </div>
  </div>
)

export default Submitted
