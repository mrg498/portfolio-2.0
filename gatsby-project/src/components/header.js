import * as React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.container}>
    <div className={headerStyles.iconWrapper}>
        Site Logo
    </div>
    <div className={headerStyles.largeLinksWrapper}>
      <ul className={headerStyles.largeLinks}>
          <li className={headerStyles.largeLink}>
            Home
          </li>
          <li className={headerStyles.largeLink}>
            About
          </li>
          <li className={headerStyles.largeLink}>
            Projects
          </li>
          <li className={headerStyles.largeLink}>
            Contact
          </li>
      </ul>
    </div>
  </header>
)

export default Header
