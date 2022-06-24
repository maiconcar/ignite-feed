import './global.css';
import styles from './App.module.css';

import {Post} from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';


// criando conteudos para os posts
const posts = [
  {
    id: 1,
    author: {
    avatarUrl: 'https://github.com/maiconcar.png',
    name: 'Maicon Cardoso',
    role:'Web Developer',
    },

    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},            
    ],

    publishedAt: new Date('2022-06-22 15:00:00' ),
  },

  {
    id: 2,
    author: {
    avatarUrl: 'https://github.com/battian.png',
    name: 'Ana',
    role:'Senior Web Developer',
    },

    content: [
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},            
    ],

    publishedAt: new Date('2022-06-23 15:00:00' ),
  },

];


export function App() {

  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
     <SideBar/>
      <main>
        { posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        }) }

        </main>

       </div>
    </div>
  )
}







