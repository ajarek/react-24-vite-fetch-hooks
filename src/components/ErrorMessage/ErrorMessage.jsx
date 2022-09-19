import React from "react"

import classes from "./styles.module.css"

export const ErrorMessage = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      {children+' !'}
    </div>
  )
}
export default ErrorMessage
