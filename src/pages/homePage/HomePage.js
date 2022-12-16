import React from 'react';
import Post from '../../components/post/Post';
import { articles } from '../../Datas';
import './homePage.css';

const HomePage = () => {
   return (
      <>
         <header>
            <div className='hero'>
               <img
                  src='https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  alt='bureau'
               />
               <div className='welcome'>
                  <p>Bienvenue à notre Blog</p>
                  <h2>Journal d'investigation</h2>
               </div>
            </div>
         </header>
         <main className='container'>
            <h4>A la Une</h4>
            <div className='articles'>
               <div className='posts'>
                  {articles.map((article) => {
                     return <Post key={article.id} data={article} />;
                  })}
               </div>
               <div className='recent'>
                  <div className='space_pub'></div>
                  <div className='posts_recent'></div>
                  <div className='blog'></div>
               </div>
            </div>
         </main>
      </>
   );
};

export default HomePage;
