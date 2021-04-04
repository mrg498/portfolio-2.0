import React from "react";

import * as expStyles from "../styles/experience.module.scss";

export default function experience() {
	return (
		<div id="experience" className={expStyles.container}>
			<h2 className={expStyles.title}>
				<span>Experience</span>
				<h5 className={expStyles.subTitle}>Professional and Educational</h5>
			</h2>
			<div className={expStyles.postContainer}>
				<div className={expStyles.row}>
					<div className={expStyles.post}>
						<h3>
							<span>Analog Collective</span>
						</h3>
						<p>
							Analog collective is a spotify-playlist curating platform where independent curators can
							monetize their spotify following by charging a fee to review and place songs submitted by
							artists to their playlists. Built alongside two other developers, I designed and implemented
							the UI, as well as assisted with some backend funcitonality. I now handle discovered bugs
							and site updates as requested by the client.
						</p>
					</div>
					<div className={expStyles.post}>
						<h3>
							<span>Handoff Tech</span>
						</h3>
						<p>
							Handoff is an alcohol delivery platform based out of Colorado. I worked with the lead
							backend engineer to implement a retailer portal for independent liquor stores to mange their
							inventory and process customer orders on the Handoff platform.
						</p>
					</div>
				</div>
				<div className={expStyles.row}>
					<div className={expStyles.post}>
						<h3>
							<span>Chandrika Tandon</span>
						</h3>
						<p>
							I was hired by Ms. Tandon’s personal team to create her a new website. I now handle any updates needed for the site and other tech related needs.  
						</p>
					</div>
					<div className={expStyles.post}>
						<h3>
							<span>NYU Computer Science</span>
						</h3>
						<p>
							I received a double major in Computer Science and Music Technology from New York University.
							I had a focus on software development and digital signal processing and completed courses in
							Applied Internet Technology, Agile Software Development, Computer Graphics, Audio
							programming, and iOS development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
