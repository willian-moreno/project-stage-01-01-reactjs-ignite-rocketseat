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
          <section className={style.posts}>
            <Post />
            <Post />
          </section>
        </main>
      </div>
    </>
  );
}
