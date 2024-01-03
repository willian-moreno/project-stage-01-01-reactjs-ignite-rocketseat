import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import style from './style.module.css';

import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

/**
 * @param {{
 *  author: { avatarUrl: string, name: string, role: string }, 
 *  publishedAt: Date, 
 *  content: { type: 'paragraph' | 'link', content: string }[]
 * }} props 
 * @returns 
 */
export function Post(props) {
  const { author, content, publishedAt } = props

  const [comments, setComments] = useState([{ id: 1, content: 'Muito bom, parabéns!! 👏👏' }])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, { id: comments.length + 1, content: newCommentText }])
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  function removeComment(id) {
    const filteredComments = comments.filter(comment => comment.id !== id)
    setComments([...filteredComments])
  }

  return (
    <article className={style.post}>
      <header className={style.post__header}>
        <div className={style.post__header__author}>
          <Avatar
            src={author.avatarUrl}
            variant="outlined"
          />
          <div className={style.post__header__author__details}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={format(publishedAt, "yyyy-MM-dd HH:mm:ss")}
          className={style.post__header__author__publishedAt}
        >{publishedDateRelativeToNow}</time>
      </header>
      <div className={style.post__content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line}>{line.content}</p>
          }

          if (line.type === 'link') {
            return <p key={line}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form
        className={style.post__commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          className={style.post__commentForm__commentArea}
          onChange={handleNewCommentChange}
        />
        <footer className={style.post__commentForm__footer}>
          <button
            type="submit"
            className={style.post__commentForm__footer__submit}
          >Publicar</button>
        </footer>
      </form>

      <div className={style.post__comments}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              onRemoveComment={removeComment}
            />
          )
        })}
      </div>
    </article>
  );
}
