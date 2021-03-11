import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { UserContext } from '../contexts/UserContext';
import Cookies from 'js-cookie';

const Home = () => {
   //const { user, setUser } = useContext(UserContext);
   const [username, setUsername] = useState(Cookies.get('username'));

   return (
      <>
         <h1> Home </h1>
         {username === undefined ? (
            <>
               <p> You're signed out. </p>
               <Link to="/signin"> Sign in </Link> <br />
               <Link to="/signup"> Sign up now </Link>
            </>
         ) : (
            <>
               <p> Welcome {username}!</p>
               <button onClick={
                  () => {
                     Cookies.remove('username');
                     setUsername(undefined);
                  }} >
                  Sign out
               </button>
            </>
         )}
      </>
   );
};

export default Home;