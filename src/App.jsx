import { useState } from 'react'
import './App.css'

import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {
 
  const [ token, setToken ] = useState(null)

  console.log('Token:', token)
  return (
   <>
    <SignUpForm setToken={setToken} />
    <Authenticate token={token}/>
   </>
  )
}

export default App