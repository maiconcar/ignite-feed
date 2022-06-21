import styles from './Sidebar.module.css';
import { PencilLine} from 'phosphor-react'

export function SideBar () {
    return (
        <asside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://github.com/maiconcar.png"/>

                <strong> Maicon Cardoso </strong>
                <span> Web Developer </span>
            </div>
    
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                   Editar seu perfil 
                </a>

            </footer>

        </asside>

    );
}