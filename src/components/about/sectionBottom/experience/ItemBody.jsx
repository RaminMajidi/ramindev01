import React from 'react'

const ItemBody = ({ title, college, desc }) => {
    return (
        <div>
            <h4 className="px-2 py-1 text-sm sm:text-base md:text-lg 
             font-bold">
                {title}
            </h4>
            <h5 className="px-2 py-1 text-sm sm:text-base md:text-lg 
             ">
                {college}
            </h5>
            <p className="px-2 py-1 text-xs sm:text-sm md:text-base 
            text-justify text-[var(--color-gray)]">
                {desc}
            </p>
        </div>
    )
}

export default ItemBody