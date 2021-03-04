import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as introStyles from "../styles/intro.module.scss"

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
					<p>Hi, I'm</p>
					<h1>Miles Grossenbacher</h1>
					<p>A Web Developer, Software Engineer, and Music Technologist</p>
				</div>
			</div>
		</div>
	);
}
