import { useState } from 'react'
import { Form } from './components/form';
import { HomeTesting } from './components/homeTesting';
import './App.css'
function App() {

  const [user,setUser] = useState<string[]>([]);

 
  return (
    <div className='main-container' >
      {
        !(user.length > 0)
        ? <Form setUser={setUser}/>
        : <HomeTesting user={user} setUser={setUser}/>
      }
     
    </div>
  )
}

export default App
