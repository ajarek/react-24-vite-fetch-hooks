import classes from './styles.module.css'

export const LinkCustom = (props) => {
  const {
    className,
    children,
    link,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <a
        className={classes.a}
        href={link}
      >
        {children}
      </a>

    </div>
  )
}
export default LinkCustom
