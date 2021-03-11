import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
   const { user, setUser } = useContext(UserContext);

   return (
      <>
         <h1> Home </h1>
         {user === null ? (
            <>
               <p> You're signed out. </p>
               <Link to="/signin"> Sign in </Link> <br />
               <Link to="/signup"> Sign up now </Link>
            </>
         ) : (
            <>
               <p> Welcome {user.username}!</p>
               <button onClick={
                  () => setUser(null)} >
                  Sign out
               </button>
            </>
         )}
      </>
   );
};

export default Home;