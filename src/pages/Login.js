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
      <div className="Login">
        <h1>LOGIN</h1>

        <form onSubmit={(e) => loginHandle(e)}>
            <input name='email' placeholder='Email' /><br/>
            <input name='password' type='password' placeholder='Password' /> <br/>
            <button>SignIn</button>
        </form>
        <button onClick = {signuptransfer}>Sign Up</button>
      </div>
    );
  }
  
  export default Login;
  //Testing if working