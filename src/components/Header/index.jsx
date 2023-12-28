import style from './style.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <img
        className={style.header__logo}
        src="/src/assets/ignite-simbol.svg"
        alt="Logo ignite"
      />
      <strong className={style.header__title}>Ignite Feed</strong>
    </header>
  )
}