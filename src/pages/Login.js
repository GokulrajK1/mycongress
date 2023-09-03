import './Login.css';


const loginHandle =(e) => {
    console.log("Hello")
}

function Login() {
    return (
      <div className="App">
        <h1>LOGIN</h1>

        <form onSubmit={(e) => loginHandle(e)}>
            <input name='email' placeholder='Email'></input> <br/>
            <input name='password' type='password' placeholder='password'></input><br/>
            <button>SignIn</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  //Testing if working