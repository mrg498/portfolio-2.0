import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import scrollTo from "gatsby-plugin-smoothscroll"
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown"

import Reveal from "react-reveal/Reveal"
import * as introStyles from "../styles/intro.module.scss"

export default function intro() {
  return (
    <div id="intro">
      {/* <StaticImage
        src="../images/michal-kmet-M9O6GRrEEDY-unsplash.jpg"
        alt="background image"
        layout="fullWidth"
        loading="eager"
        placeholder="blurred"
        quality={50}
        className={introStyles.bgImage}
        imgStyle={{ objectPosition: `50% 20%` }}
      /> */}
      <div className={introStyles.container}>
        <div className={introStyles.textWrapper}>
          <p className="fadeInUp" style={{ animationDelay: `0.7s` }}>
            Hi, I'm
          </p>
          <h1 className="fadeInUp" style={{ animationDelay: `0.9s` }}>
            Miles Grossenbacher
          </h1>
          <p className="fadeInUp" style={{ animationDelay: `1.1s` }}>
            Web Developer, Software Engineer, and Music Technologist
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="fadeInUp"
            style={{ animationDelay: `1.3s` }}
          >
            Message Me
          </button>
          <div
            className={introStyles.iconWrapper}
            onClick={() => scrollTo("#about")}
          >
            <HiOutlineChevronDown
              className={`${introStyles.icon} fadeIn`}
              style={{ animationDelay: `1.7s` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
