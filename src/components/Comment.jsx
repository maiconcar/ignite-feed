import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment ({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handlelikeComment() {
        setLikeCount(likeCount +1);
    }


    return (
        <div className={styles.comment} > 
            <Avatar hasBorder={false} src="https://github.com/maiconcar.png" />
                    <div className={styles.commentBox}>

                        <div className={styles.commentContent}>
                            <header>
                                    <div className={styles.AuthorAndtime}>
                                        <strong> Maicon Cardoso</strong>
                                        <time title="18 de junho ás 18:10" dateTime="2020-06-18 17:44:00"> Cerca de 1h atrás </time>

                                    </div>
                                    <button 
                                        onClick={handleDeleteComment}
                                        title="Deletar comentario">
                                        <Trash size={24}/>
                                    </button>
                            </header>
                                <p> {content} </p>
                        </div>
                                <footer>
                                    <button onClick={handlelikeComment}> 
                                        <ThumbsUp/>
                                        Aplaudir <span> {likeCount}</span>
                                    </button>
                                </footer>
                     </div>

        </div>
    );
}