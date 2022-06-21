import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment} > 
            <img  src="https://github.com/maiconcar.png" alt=""/>
                    <div className={styles.commentBox}>

                        <div className={styles.commentContent}>
                            <header>
                                    <div className={styles.AuthorAndtime}>
                                        <strong> Maicon Cardoso</strong>
                                        <time title="18 de junho ás 18:10" dateTime="2020-06-18 17:44:00"> Cerca de 1h atrás </time>

                                    </div>
                                    <button title="Deletar comentario">
                                        <Trash size={20}/>
                                    </button>
                            </header>
                                <p> Muito bom Devon, parabéns!! 👏👏 </p>
                        </div>
                                <footer>
                                    <button> 
                                        <ThumbsUp/>
                                        Aplaudir <span> 20</span>
                                    </button>
                                </footer>
                     </div>

        </div>
    );
}