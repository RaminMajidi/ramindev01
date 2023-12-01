import React from 'react'

const PortfolioContainer = ({ children }) => {
    return (
        <section className={`w-full h-full px-5 md:px-20`}
        >
            {children}
        </section>
    )
}

export default PortfolioContainer