import React from 'react';
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";


import * as socialLinksStyles from "../styles/socialLinks.module.scss";

export default function socialLinks() {
    return (
        <div className={socialLinksStyles.container}> 
            <ul className={socialLinksStyles.wrapper}>
                <li>
                    <FaLinkedin className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaGithub className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaTwitter className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaYoutube className={socialLinksStyles.icon}/>
                </li>
            </ul>
        </div>
    )
}
