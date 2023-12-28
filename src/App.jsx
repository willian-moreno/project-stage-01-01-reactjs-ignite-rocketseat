import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Willian Moreno"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam, odit, saepe debitis quibusdam cumque maxime qui harum non, nemo explicabo facilis doloribus minus!"
      />
    </>
  )
}

