import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import scrollTo from 'gatsby-plugin-smoothscroll';
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";

import Reveal from "react-reveal/Reveal";
import * as introStyles from "../styles/intro.module.scss";

export default function intro() {
	return (
		<div id="intro">
			<StaticImage
				src="../images/jake-hills-mI02K_LxlfU-unsplash.jpg"
				alt="background image"
				layout="fullWidth"
				loading="eager"
				backgroundColor="rgb(0,0,0)"
				quality={30}
				className={introStyles.bgImage}
			/>
			<div className={introStyles.container}>
				<div className={introStyles.textWrapper}>
					<p className="fadeInUp" style={{ animationDelay: `0.7s` }}>
						Hi, I'm
					</p>
					<h1 className="fadeInUp" style={{ animationDelay: `0.9s` }}>
						Miles Grossenbacher
					</h1>
					<p className="fadeInUp" style={{ animationDelay: `1.1s` }}>
						A Web Developer, Software Engineer, and Music Technologist
					</p>
					<button onClick={() => scrollTo('#contact')} className="fadeInUp" style={{ animationDelay: `1.3s` }}>
						Message Me
					</button>
				</div>
				<div className={introStyles.iconWrapper} onClick={() => scrollTo('#about')}>
                	<HiOutlineChevronDown  className={`${introStyles.icon} fadeIn`} style={{animationDelay: `1.7s`}}/>
				</div>
			</div>
		</div>
	);
}
