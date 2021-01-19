module.exports = {
	siteMetadata: {
		title: `Miles Grossenbacher's Portfolio`,
		description: `A portfolio showcasing the work and skills of Miles Grossenbacher`,
		author: `@sandymilesg`
	},
	plugins: [
		{
			resolve: "@chakra-ui/gatsby-plugin",
			options: {
				/**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
				isResettingCSS: true,
				/**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
				isUsingColorMode: true
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Miles Grossenbacher's Portfolio`,
				short_name: `Miles G`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#ffffff`,
				display: `minimal-ui`,
				icon: `src/images/portfolio-icon-512x512.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
