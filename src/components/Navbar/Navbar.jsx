import React from "react"
import { LinkCustom } from "../LinkCustom/LinkCustom/"
import { WrapperLayout } from "../WrapperLayout/WrapperLayout/"
import classes from "./styles.module.css"

export const Navbar = (props) => {
  const { className, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <h1 className={classes.title}>The Political Blog</h1>
      <WrapperLayout>
        <LinkCustom
          className={classes.linkCustom}
          link={"/"}
        >
          Home
        </LinkCustom>
        <LinkCustom
          className={classes.linkCustom}
          link={"/create"}
        >
          New Blog
        </LinkCustom>
      </WrapperLayout>
    </div>
  )
}
export default Navbar
