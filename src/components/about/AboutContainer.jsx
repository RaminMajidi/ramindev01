import React from 'react'

const AboutContainer = ({ children }) => {
    return (
        <section className={`w-full h-full flex flex-col items-center
         px-5 md:px-20 `}
        >
            {children}
        </section>
    )
}

export default AboutContainer