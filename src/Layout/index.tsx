import React from 'react'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <React.Fragment>
            <div className='wrapper'>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout