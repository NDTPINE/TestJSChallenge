import React from 'react'
import { Outlet } from 'react-router'
import Button from './Button'



const Layout = () => {
    return (
        <div className='App'>
            <Outlet />
            <Button />
            
        </div>
    )
}

export default Layout
