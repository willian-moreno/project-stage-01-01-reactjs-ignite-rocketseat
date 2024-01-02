import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import style from './style.module.css';

/**
 * @param {{
 *  id: string,
 *  content: string,
 *  onClickRemove: Function
 * }} props 
 * @returns 
 */
export function Comment(props) {
  const { id, content, onClickRemove } = props

  function handleRemoveComment() {
    onClickRemove(id)
  }

  return (
    <div className={style.comment}>
      <Avatar src="https://github.com/willian-moreno.png" />

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
              onClick={handleRemoveComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p className={style.comment__box__content__comment}>
            {content}
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