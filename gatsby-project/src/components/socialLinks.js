import React from "react"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"

import * as socialLinksStyles from "../styles/socialLinks.module.scss"

export default function socialLinks() {
  return (
    <div className={socialLinksStyles.container}>
      <ul className={socialLinksStyles.wrapper}>
        <li>
          <a href="https://www.linkedin.com/in/miles-grossenbacher-908b171a3/">
            <FaLinkedin className={socialLinksStyles.icon} />
          </a>
        </li>
        {/* <li>
                    <a href="https://github.com/mrg498"><FaGithub className={socialLinksStyles.icon}/></a>
                </li> */}
        {/* <li>
                    <a href="https://twitter.com/sandymilesg"><FaTwitter className={socialLinksStyles.icon}/></a>
                </li> */}
      </ul>
    </div>
  )
}
