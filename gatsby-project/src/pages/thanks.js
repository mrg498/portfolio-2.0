import React from "react";
import { Link } from "gatsby-link";
import Layout from "../components/layout";

export default function thanks() {
	return (
		<Layout>
			<h1>Thank you!</h1>
			<p>This is a custom thank you page for form submissions</p>
            <Link to="/">Back to site</Link>
		</Layout>
	);
}
