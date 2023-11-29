import React from 'react'

const HomeContainer = ({language, children }) => {
    return (
        <section
            className={`w-full h-full flex flex-col md:justify-around md:items-center 
               ${language == "en" ? 'md:flex-row-reverse' : 'md:flex-row'}
               overflow-y-auto px-5 md:px-20`}
        >
            {children}
        </section>
    )
}

export default HomeContainer