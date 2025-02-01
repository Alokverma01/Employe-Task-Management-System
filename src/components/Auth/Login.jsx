import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")

    const submitHandler = (e) => {

        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' rounded-xl px-15 py-23 drop-shadow-md shadow-blue-300 bg-gray-900'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  const value = e.target.value;
                  setEmail(value);
                }}
                required
                className='outline-none bg-transparent border-2 border-blue-500 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                type="email" placeholder='Enter your Email'/>
                <input 
                 value={password}
                 onChange={(e)=> {
                  const value = e.target.value;
                  setPassword(value)
                 }}
                 required
                 className='outline-none bg-transparent border-2 border-blue-500 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                 <button className='mt-7 text-white border-none outline-none hover:bg-blue-600 font-semibold bg-blue-500 text-lg py-2 px-8 w-full rounded-full cursor-pointer '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login