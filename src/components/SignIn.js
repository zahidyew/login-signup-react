import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../model/Users';
//import { UserContext } from '../contexts/UserContext';
import Cookies from 'js-cookie';

const SignIn = () => {
   const history = useHistory();
   //const { user, setUser } = useContext(UserContext);

   const formReducer = (state, event) => {
      return {
         ...state,
         [event.name]: event.value
      };
   };

   const [formData, setFormData] = useReducer(formReducer, {
      username: '',
      password: ''
   });

   const handleUserInput = (event) => {
      setFormData({
         name: event.target.name,
         value: event.target.value
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if (formData.username === '' || formData.password === '') {
         alert('Please complete the form.');
      } else {
         login(formData.username, formData.password);
      }
   };

   const login = (uname, pass) => {
      const userIndex = users.findIndex(
         user => user.username === uname && user.password === pass);

      if (userIndex !== -1) {
         const currentUser = users[userIndex];
         Cookies.set('username', currentUser.username, { expires: 3 });
         //setUser(currentUser);
         // replace() instead of push() to prevent user from going back
         history.replace('/');
      } else {
         alert('Incorrect username or password.');
      }
   };

   return (
      <div>
         <h3> Sign in </h3>
         <div>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleUserInput}
                  placeholder="username"
                  autoComplete="username"
               />
               <br />
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleUserInput}
                  placeholder="password"
                  autoComplete="password"
               />
               <br />
               <button type="submit"> Sign in </button>
            </form>
         </div>
      </div>
   );
};

export default SignIn;
