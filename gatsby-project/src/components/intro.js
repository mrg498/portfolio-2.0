import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { HiOutlineChevronDown } from "@react-icons/all-files/Hi/HiOutlineChevronDown";

import Reveal from "react-reveal/Reveal";
import * as introStyles from "../styles/intro.module.scss";

export default function intro() {
	return (
		<div>
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
					<button className="fadeInUp" style={{ animationDelay: `1.3s` }}>
						Message Me
					</button>
				</div>
                <HiOutlineChevronDown  className={`${introStyles.icon} fadeIn`} style={{animationDelay: `2.5s`}}/>
			</div>
		</div>
	);
}
