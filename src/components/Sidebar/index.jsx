import style from './style.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
	return (
		<aside className={style.sidebar}>
			<div
				className={style.sidebar__cover}
				role="img"
			/>

			<div className={style.sidebar__profile}>
				<div
					className={style.sidebar__profile__avatar}
					role="img"
				/>
				<strong>Willian Moreno</strong>
				<span>Web Developer</span>
			</div>

			<footer className={style.sidebar__footer}>
				<a
					className={style.sidebar__footer__link}
					href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
