import React from 'react'
import{Link,NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-black border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <Link to="/" className="flex items-center">
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-P7zg-kBiNfxlYIyzyjG90JVHTahQY9myvg&s"
            className="mr-3 h-12"
            alt="Logo"
            />
        </Link>
          <div className="flex items-center lg:order-2">
              {/* <Link
                  to="#"
                  className="text-gray-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
              Log in
              </Link> */}
            <Link
              to="#"
              className="text-black bg-white hover:bg-slate-300  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
              Support Us 
              </Link>
          </div>
          <div 
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pl-20" 
            id="mobile-menu-2"
          >
            <ul className='flex flex-col justify-around mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <NavLink
                  to="/"
                  className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/about"
                  className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/conatctUs"
                  className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                }
                  >
                    Contact
                  </NavLink>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header