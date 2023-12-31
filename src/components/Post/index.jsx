import style from './style.module.css';
style;

/**
 * @param {{
 *  author: string,
 * content: string
 * }} props
 */
export function Post(props) {
	const { author, content } = {
		author: '',
		content: '',
		...props,
	};

	return (
		<>
			<p>{author}</p>
			<p>{content} </p>
		</>
	);
}
