import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = (props) => {
   const { id, auteur, titre, article, date_pub, categorie, imageUrl } =
      props.data;
   return (
      <div className='post'>
         <div className='image_post'>
            <img src={imageUrl} alt={titre} />
            <p>{categorie}</p>
         </div>
         <div className='post_article'>
            <div className='auteur'>
               <p>
                  Publié par : <span>{auteur}</span> -- {date_pub}
               </p>
            </div>
            <div className='titre'>
               <h3>{titre}</h3>
               <p>{article.slice(0, 100)}...</p>
            </div>
            <Link to={'/article/:' + id}>Lire article</Link>
         </div>
      </div>
   );
};

export default Post;
