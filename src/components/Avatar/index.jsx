import style from './style.module.css'

/**
 * @param {{
 *  src: string
 *  variant?: 'initial' | 'outlined'
 *  className?: string,
 * }} props 
 */
export function Avatar(props) {
  const { src, variant, className } = {
    src: '',
    variant: 'initial',
    className: '',
    ...props
  }

  const classes = [
    style.avatar,
    className
  ].join(' ').replaceAll(/\s+/g, ' ').trim()

  return (
    <img
      className={classes}
      // eslint-disable-next-line react/no-unknown-property
      variant={variant}
      src={src}
    />
  )
}