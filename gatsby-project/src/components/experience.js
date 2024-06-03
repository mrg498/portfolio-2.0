import React from "react"

import * as expStyles from "../styles/experience.module.scss"

export default function experience() {
  return (
    <div id="experience" className={expStyles.container}>
      <h2 className={expStyles.title}>
        <span>Experience</span>
      </h2>
      <div className={expStyles.postContainer}>
        <div className={expStyles.row}>
          <div className={expStyles.post}>
            <h3>
              <span>Union POS</span>
            </h3>
            <p>
              I work as a full-stack software engineer building out solutions
              for our entire suite of applications for the bar and restaurant
              hospitality industry. I've contributed extensively to
              architecting, designing, and mainting our APIs and front-end
              clients and have lead features and applications from design to
              deployment. I am a key member and contributor in maintaining and
              monitoring our systems as we handle thousands of transactions
              worth millions of dollars daily.
            </p>
          </div>
          <div className={expStyles.post}>
            <h3>
              <span>Handoff</span>
            </h3>
            <p>
              I worked as a full-stack software engineer building out the API
              and Management Portal for direct to consumer alchohol delivery and
              pickup. I lead the implementation of a whitelabel platform to
              connect liquor stores to consumers.
            </p>
          </div>
          <div className={expStyles.post}>
            <h3>
              <span>Analog Collective</span>
            </h3>
            <p>
              I worked as a front-end developer and built a web application to
              connect musicians to spotify playlist curators.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
