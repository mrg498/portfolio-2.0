import React from "react"
import { Link } from "gatsby"

import * as projectStyles from "../styles/projects.module.scss"

export default function projects() {
  return (
    <div id="projects" className={projectStyles.container}>
      <h2 className={projectStyles.title}>
        <span>Featured Projects</span>
      </h2>
      <div className={projectStyles.postContainer}>
        <div className={projectStyles.row}>
          <div className={projectStyles.post}>
            <h3>
              <span>Rock Robot</span>
            </h3>
            <p>
              A text based app that sends users daily local rock show
              recommendations.
            </p>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <a
                  href="https://rockrobotmusic.com/"
                  className={projectStyles.btn}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <span className={projectStyles.skill}>AWS</span>
                <span className={projectStyles.skill}>Twilio</span>
                <span className={projectStyles.skill}>Lambda functions</span>
                <span className={projectStyles.skill}>DynamoDB</span>
                <span className={projectStyles.skill}>API Gateway</span>
                <span className={projectStyles.skill}>Event Bridge</span>
              </div>
            </div>
          </div>
          <div className={projectStyles.post}>
            <h3>
              <span>Union Webclip</span>
            </h3>
            <p>
              web version of the Union mobile platform. Handles thousands of
              transactions everyday. It is intended to be used on a mobile
              device.
            </p>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <a
                  href="https://webclip.getunion.com/?venue_uuid=1b452e0c-33f6-4d7a-a2b3-4263befe7640"
                  className={projectStyles.btn}
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <span className={projectStyles.skill}>react</span>
                <span className={projectStyles.skill}>next.js</span>
                <span className={projectStyles.skill}>python</span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles.row}>
          <div className={projectStyles.post}>
            <h3>
              <span>Chandrika Tandon Website</span>
            </h3>
            <p>
              Personal website for Chandrika Tandon. Design guided by client
              aesthetics. Integrated with Netlify CMS for client content
              updates.
            </p>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <a
                  href="https://mrg498.github.io/chandrika-tandon/"
                  className={projectStyles.btn}
                >
                  Live
                </a>
              </div>
            </div>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <span className={projectStyles.skill}>react</span>
                <span className={projectStyles.skill}>gatsby</span>
                <span className={projectStyles.skill}>scss</span>
              </div>
            </div>
          </div>
          <div className={projectStyles.post}>
            <h3>
              <span>Analog Collective Web App</span>
            </h3>
            <p>
              A web app that interfaces with the Spotify API. Allows independent
              music curators to advertise their playlists and musicians to
              submit to playlists for track placement. Over 6,000 users signed
              up and ~$2000 monthly revenue generated.
            </p>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <a
                  href="https://www.youtube.com/watch?v=3F7orkRbcC0"
                  className={projectStyles.btn}
                >
                  Demo
                </a>
              </div>
            </div>
            <div className={projectStyles.sectionWrapper}>
              <div className={projectStyles.sectionGroup}>
                <span className={projectStyles.skill}>python/flask</span>
                <span className={projectStyles.skill}>jQuery</span>
                <span className={projectStyles.skill}>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
