import React from "react"

import SocialLinks from "./socialLinks"

import * as aboutStyles from "../styles/about.module.scss"

export default function about() {
  return (
    <div id="about" className={aboutStyles.container}>
      <h2 className={aboutStyles.title}>
        <span>Miles Grossenbacher</span>
      </h2>
      <div className={aboutStyles.wrapper}>
        <div className={aboutStyles.section}>
          <h3>
            <span>About</span>
          </h3>
          <p>
            I am a full-stack software engineer with years of experience
            building and maintaining production-level software. Skilled in both
            front-end and back-end development, I deliver scalable and
            maintainable software solutions across the stack. I'm passionate
            about writing code, architecting technical solutions, and
            collaborating with teams to create innovative software.
          </p>
          <SocialLinks />
        </div>
        <div className={aboutStyles.section}>
          <h3>
            <span>Skills</span>
          </h3>
          <div className={aboutStyles.skillsWrapper}>
            <div className={aboutStyles.skillGroup}>
              <span className={aboutStyles.skill}>Typescript/Javascript</span>
              <span className={aboutStyles.skill}>React</span>
              <span className={aboutStyles.skill}>Next.js</span>
              <span className={aboutStyles.skill}>Tailwind</span>
              <span className={aboutStyles.skill}>React Query</span>
              <span className={aboutStyles.skill}>State Management</span>
            </div>
            <div className={aboutStyles.skillGroup}>
              <span className={aboutStyles.skill}>Node/Express/Nest.js</span>
              <span className={aboutStyles.skill}>Python/Flask/Django</span>
              <span className={aboutStyles.skill}>MySQL/PostgreSQL</span>
              <span className={aboutStyles.skill}>REST/GraphQL</span>
            </div>
            <div className={aboutStyles.skillGroup}>
              <span className={aboutStyles.skill}>AWS</span>
              <span className={aboutStyles.skill}>Docker/Kubernetes</span>
              <span className={aboutStyles.skill}>New Relic</span>
              <span className={aboutStyles.skill}>CI/CD</span>
              <span className={aboutStyles.skill}>Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
