import { database } from '../firebase';
import './Homepage.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Homepage() {

  const transfer = useNavigate()

  const buttonResponse = () => 
    signOut(database).then(val => {
    console.log(val);
    transfer('/');
  })

    return (
      <div className="App">
       <h1>Homepage</h1>
       <button onClick={buttonResponse}>SignOut</button>
      </div>
    );
  }
  
  export default Homepage;
  //Testing if working