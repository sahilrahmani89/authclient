import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useCheckAuth from '../../hooks/useCheckAuth'

const Login = () => {
    const navigate = useNavigate()
    const {login} = useAuth()
    const {isAuthenticated} = useCheckAuth()
    const check = useSelector((state)=>state.auth.value)

    const [formData,setFormData] = useState({
      email:'',
      password:''
    })
    const handleSubmit = () =>{
        login({email:formData?.email,password:formData?.password})
    }
    const inputHandler = (e) =>{
      const {name,value} = e.target
      setFormData((prev)=>({
        ...prev,
        [name]:value
      })) 
    }
    //
    if(isAuthenticated){
      navigate(-1)
    }
    //
  return (
    <div className='bg-gray-100 flex items-center justify-center h-screen'>
        <div className='w-full max-w-md p-8 space-y-3 bg-white shadow-md'>
            <h1 className='text-2xl font-bold text-center'>Login</h1>
            <React.Fragment>
                <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>   
                    <input 
                      type='text' 
                      name='email' 
                      onChange={inputHandler}
                      value={formData.email}
                      className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>      
                    <input
                        type='password'
                        name='password'
                        onChange={inputHandler}
                        value={formData.password}
                        className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
                    /> 
                </div>
                <button 
                onClick={handleSubmit}
                className='w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"'>Login</button>
                <p className="text-sm text-center text-gray-600">Don't have an account? <Link to={'/signup'} 
                  className="text-indigo-600 hover:underline">Sign up
                  </Link>
                </p>
            </React.Fragment>
        </div>
    </div>
  )
}

export default Login