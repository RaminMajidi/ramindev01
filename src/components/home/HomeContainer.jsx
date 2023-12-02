import React from 'react'

const HomeContainer = ({ language, children }) => {
    return (
        <section
            className={`w-full h-full flex flex-col items-center px-5
              md:justify-center md:px-24 md:flex-row-reverse`}
        >
            {children}
        </section>
    )
}

export default HomeContainer