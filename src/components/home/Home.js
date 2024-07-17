// import React from 'react'
import {Link} from 'react-router-dom'
// import useCheckAuth from '../../hooks/useCheckAuth'
// import  { clearAccessToken, postData } from '../../service/AxiosService'
import useAuth from '../../hooks/useAuth'


const Home = () => {
  const {isAuthenticated,logout} = useAuth()
  
 
  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16'>
      <div className='items-center'>
        <div className=' columns-1'>
            <div>
               {!isAuthenticated ? <Link 
                  to={'/login'}>
                    Login
                </Link>:
                <button onClick={logout}>Log out</button>}
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home