import React from 'react'
import {Link} from 'react-router-dom'
import useCheckAuth from '../../hooks/useCheckAuth'


const Home = () => {
  const {isAuthenticated} = useCheckAuth()
  console.log('isAuthenticated',isAuthenticated)
  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16'>
      <div className='items-center'>
        <div className=' columns-1'>
            <div>
                <Link 
                  to={'/login'}>
                    Login
                </Link>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home