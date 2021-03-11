import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../model/Users';

const SignUp = () => {
   const history = useHistory();
   const formReducer = (state, event) => {
      return {
         ...state,
         [event.name]: event.value
      };
   };

   const [formData, setFormData] = useReducer(formReducer, {
      username: '',
      password: '',
      email: ''
   });

   const handleUserInput = (event) => {
      setFormData({
         name: event.target.name,
         value: event.target.value
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if (formData.username === '' ||
         formData.password === '' ||
         formData.email === '') {
         alert('Please complete the form.');
      } else {
         register(formData.username, formData.password, formData.email);
      }
   };

   const register = (uname, pass, email) => {
      //console.log(uname, pass, email);
      // in real app, check for username/email duplicate in DB
      if (users.findIndex(user => user.username === uname) > -1) {
         alert('Duplicate username detected. Please try another name.');
      } else {
         users.push({
            username: uname,
            password: pass,
            email: email
         });
         alert("Success");
         //console.log(users);
         history.replace('/signin');
      }
   };

   return (
      <div>
         <h3> Sign up </h3>
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleUserInput}
                  placeholder="email"
                  autoComplete="email"
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
               <button type="submit"> Sign up </button>
            </form>
         </div>
      </div>
   );
};

export default SignUp;
