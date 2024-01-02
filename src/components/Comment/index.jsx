import { ThumbsUp, Trash } from 'phosphor-react';
import style from './style.module.css';

export function Comment() {
  return (
    <div className={style.comment}>
      <div
        className={style.comment__avatar}
        role="img"
      ></div>

      <div className={style.comment__box}>
        <div className={style.comment__box__content}>
          <header className={style.comment__box__content__profile}>
            <div className={style.comment__box__content__profile__authorAndTime}>
              <strong>Willian Moreno</strong>
              <time
                title="01 de janeiro às 11:40"
                dateTime="2024-01-01 11:40:00"
              >Cerca de 2h atrás</time>
            </div>
            <button
              className={style.comment__box__content__profile__deleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className={style.comment__box__content__comment}>
            Muito bom, parabéns!! 👏👏
          </p>
        </div>
        <footer className={style.comment__box__footer}>
          <button className={style.comment__box__footer__button}>
            <ThumbsUp size={20} />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}