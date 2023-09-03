import './Signup.css';
import {database} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Signup() {

  const transfer = useNavigate()

  const [login,setlogin] = useState(false);

  const logintransfer =() => {
    transfer('/');
  }



  const loginHandle =(e, type) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value

      if (type = 'signup'){
          createUserWithEmailAndPassword(database, email, password).then(data=>{
          console.log(data, "authdata");
          transfer('/homepage');
      }).catch(err => {
        alert(err.code);
        setlogin(true)
      })
        }
      else{
        logintransfer()
      }
  }


    return (
      <div className="Signup">
        <h1>Sign Up</h1>

        <form onSubmit={(e) => loginHandle(e, login?'signin':'signup')}>
            <input name='fname' placeholder='First Name' /><br/>
            <input name='lname' placeholder='Last Name' /><br/>
            <input name='email' placeholder='Email' /><br/>
            <input name='password' type='password' placeholder='Password' /> <br/>
            <button>Sign Up</button>
        </form>
        <button onClick = {logintransfer}>Login</button>
      </div>
    );
  }
  
  export default Signup;
  //Testing if working