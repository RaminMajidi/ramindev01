import React from 'react'

const HomeContainer = ({ language, children }) => {
    return (
        <section
            className={`w-full h-full flex flex-col items-center px-5
              md:justify-around md:items-center md:px-20  
               ${language == "en" ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            {children}
        </section>
    )
}

export default HomeContainer