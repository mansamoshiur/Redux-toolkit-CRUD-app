import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' className='nav_link'>Home</Link>
        <Link to='/show-books' className='nav_link'>Show Books</Link>
        <Link to='/add-book' className='nav_link'>Add Book</Link>
    </nav>
  )
}

export default Navbar