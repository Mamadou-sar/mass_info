import React from 'react';
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
         <main></main>
      </>
   );
};

export default HomePage;
