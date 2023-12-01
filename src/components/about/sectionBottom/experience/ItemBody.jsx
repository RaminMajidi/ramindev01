import React from 'react'

const ItemBody = ({ title, college, desc }) => {
    return (
        <div>
            <h4 className="px-2 py-1 text-lg">
                {title}
            </h4>
            <h5 className="px-2 py-1 text-lg">
                {college}
            </h5>
            <p className="px-2 py-1 text-base text-justify">
                {desc}
            </p>
        </div>
    )
}

export default ItemBody