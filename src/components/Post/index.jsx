import style from './style.module.css';

import { Comment } from '../Comment';

export function Post() {
  return (
    <article className={style.post}>
      <header className={style.post__header}>
        <div className={style.post__header__author}>
          <div
            className={style.post__header__author__avatar}
            role="img"
          ></div>
          <div className={style.post__header__author__details}>
            <strong>Willian Moreno</strong>
            <span>Dev Front-End</span>
          </div>
        </div>
        <time
          title="01 de janeiro às 09:40"
          dateTime="2024-01-01 09:40:00"
          className={style.post__header__author__publishedAt}
        >Publicado a 1h</time>
      </header>
      <div className={style.post__content}>
        <p>
          Fala galeraa 👋
        </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={style.post__commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          className={style.post__commentForm__commentArea}
          placeholder="Deixe um comentário"
        />
        <footer className={style.post__commentForm__footer}>
          <button
            type="submit"
            className={style.post__commentForm__footer__submit}
          >Publicar</button>
        </footer>
      </form>

      <div className={style.post__comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
