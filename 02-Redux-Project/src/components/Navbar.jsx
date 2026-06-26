import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-(--c2) py-6 px-10'>
            <Link to='/' className='font-medium text-3xl'>Media Search</Link>
            <div className='flex items-center gap-5'>
                <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/'>Search</Link>
                <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/collection'>Collection</Link>
            </div>
        </div>
  )
}

export default Navbar
