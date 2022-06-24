import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


// usando state para salvar e renderizar novos comentarios

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Dahora esse post, bacana!"]);

  const [newCommentText, setNewCommentText] = useState("");
  
  // utilizado date fns para formatar a data - formato js puro é horrivel
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );


  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  });

  function HandleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function HandleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function HandleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatorio');
  }

// criado variavel para deixar botão desbilitado - 
const isNewCommentEmpty = newCommentText.length === 0;

  // função deleteComment enviada como propriedade para Comment.jsx, para ser realizada no botão de delete
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span> {author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/* percorrendo o conteúdo do post  */}

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}> {line.content} </p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                {" "}
                <a href="#">{line.content} </a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={HandleCreateNewComment} className={styles.comentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={HandleNewCommentChange}
          onInvalid={HandleNewCommentInvalid}
          required 
          
          
          
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
           </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
