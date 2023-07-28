import {useState} from 'react'

function SignUpForm( {setToken} ) {

const [username, SetUsername] = useState('')
const [password, SetPassword] = useState('')
const [error, SetError] = useState('')

async function handleSubmit(e) {
    e.preventDefault()

    try{
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
        {

         method: 'POST',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
               username: username,
               password: password

          })
         }       
    
       )

       const data = await response.json()

       setToken(data.token)

       SetUsername('')
       SetPassword('')

        } catch(err){
            SetError(err)
        }

     }

     return <>
       
       <h2>SignUp</h2>

       <form onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={e => SetUsername(e.target.value)} />
        
        </label>
        <label>
            <input value={username} onChnage={e => SetPassword(e.target.value)}/>
        </label>
        <button>Submit</button>



       </form>
     
     </>

    }

    export default SignUpForm
