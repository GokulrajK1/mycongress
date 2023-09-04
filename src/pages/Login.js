import './Login.css';
import {database} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login() {

  const transfer = useNavigate()

  const signuptransfer =() => {
    transfer('/signup');
  }

  const loginHandle =(e) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      signInWithEmailAndPassword(database, email, password).then(data=>{
        console.log(data, "authdata");
        transfer('/homepage');
      }).catch(err => {
      alert(err.code);
      })
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
          <h3 class="title">Sign In</h3>
          <form onSubmit={(e) => loginHandle(e)}>
          <div class="text-input">
              <i class="ri-user-fill"></i>
              <input name="email" type="text" placeholder="Email" />
          </div>
          <div class="text-input">
              <i class="ri-lock-fill"></i>
              <input name="password" type="password" placeholder="Password" />
          </div>
          <button class="login-btn">LOGIN</button>
          </form>
          <a href="#" class="forgot">Forgot Username/Password?</a> <br/>
          <a href="signup" class="forgot">Create New Account</a>
      </div>
  </div>
</body>
  );
}
  
  export default Login;
  //Testing if working