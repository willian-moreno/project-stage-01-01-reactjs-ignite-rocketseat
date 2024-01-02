import style from './style.module.css'

/**
 * @param {{
 *  src: string
 *  variant?: 'initial' | 'outlined'
 *  className?: string,
 * }} props 
 */
export function Avatar({
  src = '',
  variant = 'initial',
  className = ''
}) {

  const classes = [
    style.avatar,
    className
  ].join(' ').replaceAll(/\s+/g, ' ').trim()

  return (
    <img
      className={classes}
      variant={variant}
      src={src}
    />
  )
}