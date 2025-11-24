import { useState } from 'react'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [isSignUp, setSignUp] = useState(true)

  return (
    <>
      {isSignUp ? <SignUp setSignUp={setSignUp}/> : <SignIn setSignUp={setSignUp}/>}
    </>
  )
}

export default App
