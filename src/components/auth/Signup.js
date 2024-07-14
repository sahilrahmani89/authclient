import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../service/AxiosService';
import useCheckAuth from '../../hooks/useCheckAuth';

const Signup = () => {
    const {isAuthenticated} = useCheckAuth()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        showPassword: false
    });
    const navigate = useNavigate()

    const { name, email, password, showPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !showPassword
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // Example: You can send this data to an API or process it further
        const data = await postData('/auth/signup',{...formData})
        if(data?.statusCode==201 || data?.statusCode==200){
          navigate('/login')
        }
    };
    if(isAuthenticated){
        navigate(-1)
    }
    const btnDisable = name && email && password 
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 px-1 focus:border-indigo-500 sm:text-sm py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password" 
                                name="password" 
                                value={password} 
                                onChange={handleChange} 
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-1" 
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.974 4.241a10.01 10.01 0 0 1 5.786 5.786l-1.385 1.385A3.5 3.5 0 0 0 7.615 7.615l-1.385 1.385a10.01 10.01 0 0 1 5.786-5.786L9.974 4.241zM4.758 8.358a10.01 10.01 0 0 1-1.517 1.517l1.385 1.385A3.5 3.5 0 0 0 7.615 12.385l1.385-1.385a10.01 10.01 0 0 1 1.517 1.517l1.385-1.385a3.5 3.5 0 0 0-5.786-5.786L4.758 8.358zm7.532-4.552a10.01 10.01 0 0 1 1.517 1.517l1.385-1.385a3.5 3.5 0 0 0-5.786 5.786l1.385 1.385a10.01 10.01 0 0 1 1.517-1.517L12.29 3.806zM12.29 16.194a10.01 10.01 0 0 1-1.517-1.517l-1.385 1.385a3.5 3.5 0 0 0 5.786-5.786l-1.385-1.385a10.01 10.01 0 0 1-1.517 1.517l-1.385 1.385z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 1.818.5 3.512 1.364 4.95a1 1 0 0 0 1.356 1.396C4.487 15.981 7.943 17 10 17c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 1c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm1 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            disabled={!btnDisable}
                            className={`bg-indigo-500 text-white py-2 px-4 rounded ${btnDisable && 'hover:bg-indigo-600 ' } focus:outline-none focus:bg-indigo-600`}
                        >
                            Signup
                        </button>
                    </div>
                    <div>
                      <p className='mt-2'>
                        Already have an account! <Link to={'/login'} 
                              className="text-indigo-600 hover:underline">Login
                        </Link>
                      </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
