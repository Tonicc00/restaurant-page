import {Outlet, Link} from 'react-router-dom';
import { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {FaWindowClose} from 'react-icons/fa'

export const Nav = () => {
    const [menu, showMenu] = useState(false)
  return (
    <>
      <nav className='closed-nav'>
        <ul>
            <li>
                <FaBars className='nav-icon' onClick={()=>showMenu(currentShow => !currentShow)} />
                {menu ?
                <ul className='open-nav'>
                    <FaWindowClose className='nav-icon' onClick={()=>showMenu(currentShow => !currentShow)} />
                    <li>
                      <Link key={1} onClick={()=>showMenu(currentShow => !currentShow)}  className='main-li' to="/">Home</Link>
                    </li>
                    <li>
                      <Link key={2} onClick={()=>showMenu(currentShow => !currentShow)}  className='main-li' to="/about">About</Link>
                    </li>
                    <li>
                      <Link key={3} onClick={()=>showMenu(currentShow => !currentShow)}  className='main-li' to="/menu">Menu</Link>
                    </li>
                    <li>
                      <Link key={4} onClick={()=>showMenu(currentShow => !currentShow)}  className='main-li' to="/contact">Contact</Link>
                    </li>
              </ul> 
              : null}
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}