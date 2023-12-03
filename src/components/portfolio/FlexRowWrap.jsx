import React from 'react'

const FlexRowWrap = ({ children }) => {
    return (
        <div className='w-full flex flex-row flex-wrap justify-between gap-2'>
            {children}
        </div>
    )
}

export default FlexRowWrap