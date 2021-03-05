import React from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import * as socialLinksStyles from "../styles/socialLinks.module.scss";

export default function socialLinks() {
    return (
        <div className={socialLinksStyles.container}> 
            <ul className={socialLinksStyles.wrapper}>
                <li>
                    <FaBeer className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaBeer className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaBeer className={socialLinksStyles.icon}/>
                </li>
                <li>
                    <FaBeer className={socialLinksStyles.icon}/>
                </li>
            </ul>
        </div>
    )
}
