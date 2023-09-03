import './Login.css';
import {database} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login() {

  const transfer = useNavigate()

  const loginHandle =(e) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      createUserWithEmailAndPassword(database, email, password).then(data=>{
          console.log(data, "authdata");
          transfer('/homepage');
      })
  }


    return (
      <div className="App">
        <h1>LOGIN</h1>

        <form onSubmit={(e) => loginHandle(e)}>
            <input name='email' placeholder='Email' /><br/>
            <input name='password' type='password' placeholder='Password' /> <br/>
            <button>SignIn</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  //Testing if working