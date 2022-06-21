import './global.css';
import styles from './App.module.css';

import {Post} from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';


export function App() {

  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
     <SideBar/>
      <main>
      <Post 
        athour="Maicon Cardoso"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa nesciunt maiores quibusdam quidem, tempora delectus aliquid quis iusto ullam. Et voluptate deleniti sed. Accusamus labore harum ipsum error aliquam."
       />
       {/* <Post
        athour="Ana"
        content="Um novo posto aqui somente para teste"/> */}

      </main>

       </div>
    </div>
  )
}







