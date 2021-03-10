import React from "react";

import SocialLinks from "./socialLinks";

import * as aboutStyles from "../styles/about.module.scss";

export default function about() {
	return (
		<div id="about" className={aboutStyles.container}>
			<h2 className={aboutStyles.title}>
				<span>Hello!</span>
			</h2>
			<div className={aboutStyles.wrapper}>
				<div className={aboutStyles.section}>
					<h3>
						<span>Work Bio</span>
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Ullamcorper
						dignissim cras tincidunt lobortis feugiat. Quis auctor elit sed vulputate mi sit. Tincidunt
						ornare massa eget egestas purus. In cursus turpis massa tincidunt dui. Tincidunt tortor aliquam
						nulla facilisi cras fermentum. Volutpat blandit aliquam etiam erat velit scelerisque in. Non
						nisi est sit amet. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Et magnis dis
						parturient montes. Felis eget nunc lobortis mattis aliquam faucibus purus in.
					</p>
					<SocialLinks />
				</div>
				<div className={aboutStyles.section}>
					<h3>
						<span>Skills</span>
					</h3>
					<div className={aboutStyles.skillsWrapper}>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>html5/css3</span>
							<span className={aboutStyles.skill}>javascript</span>
							<span className={aboutStyles.skill}>react</span>
							<span className={aboutStyles.skill}>jQuery</span>
							<span className={aboutStyles.skill}>sass</span>
							<span className={aboutStyles.skill}>CRA/gatsby</span>
						</div>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>node/express</span>
							<span className={aboutStyles.skill}>MySQL</span>
							<span className={aboutStyles.skill}>MongoDB</span>
							<span className={aboutStyles.skill}>REST API</span>
							<span className={aboutStyles.skill}>graphql</span>
							<span className={aboutStyles.skill}>MVC design pattern</span>
							<span className={aboutStyles.skill}>python/flask</span>
							
						</div>
						<div className={aboutStyles.skillGroup}>
							<span className={aboutStyles.skill}>git/github</span>
							<span className={aboutStyles.skill}>java/c++/swift</span>
							<span className={aboutStyles.skill}>VS Code</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
