import style from './App.module.css';

import './global.css';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

export function App() {
	return (
		<>
			<Header />
			<div className={style.container}>
				<Sidebar />
				<main>
					<Post
						author="Willian Moreno"
						content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptatem ratione mollitia odit perspiciatis illum voluptatibus qui asperiores, laborum voluptates!"
					/>
					<Post
						author="Willian Moreno 2"
						content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptatem ratione mollitia odit perspiciatis illum voluptatibus qui asperiores, laborum voluptates!"
					/>
				</main>
			</div>
		</>
	);
}
