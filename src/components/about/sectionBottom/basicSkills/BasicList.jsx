import React from 'react'

const BasicList = ({ children }) => {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {children}
        </div>
    )
}

export default BasicList