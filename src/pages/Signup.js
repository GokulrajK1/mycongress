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
        if(err.code == "auth/email-already-in-use"){
          setlogin(true)
          logintransfer()
        }
        alert(err.code);
        console.log("Error: ",err.code)
      })
        }
      else{
        logintransfer()
      }
  }


    return (
      <body>
    <div class="container">
        <div class="design">
            <div class="pill-1 rotate-45"></div>
            <div class="pill-2 rotate-45"></div>
            <div class="pill-3 rotate-45"></div>
            <div class="pill-4 rotate-45"></div>
        </div>
        <div class="login">
            <h3 class="title">Sign Up</h3>
            <form onSubmit={(e) => loginHandle(e, login?'signin':'signup')}>
            <div class="text-input">
                <i class="ri-user-fill"></i>
                <input name="email" type="text" placeholder="Email" />
            </div>
            <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input name="password" type="password" placeholder="Password" />
            </div>
            <button class="login-btn">SIGN UP</button>
            </form>
            <a href="#" class="forgot">Forgot Username/Password?</a> <br/>
            <a href="/" class="forgot">Sign In/Login</a> <br/>
            <div class="create">
                <a href="#">Create Your Account</a>
                <i class="ri-arrow-right-fill"></i>
            </div>
        </div>
    </div>
</body>
    );
  }
  
  export default Signup;
  //Testing if working

  //<form onSubmit={(e) => loginHandle(e, login?'signin':'signup')}>