import React from 'react'

const FlexRowWrap = ({ children }) => {
    return (
        <div className='w-full flex flex-row flex-wrap justify-between'>
            {children}
        </div>
    )
}

export default FlexRowWrap