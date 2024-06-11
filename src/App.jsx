import { useState } from 'react';
import './App.css'
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Notes from './components/Notes';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  return (
    <>
      {isLoggedIn ?
      <div>
        <Welcome name={name} setIsLoggedIn={setIsLoggedIn} setName={setName}/> 
        
      </div>:
      <div>
      <LoginForm setIsLoggedIn={setIsLoggedIn} setName={setName}/>
      <Notes/>
      </div>
      }
    </>
  )
}

export default App
