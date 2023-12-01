import React from 'react'

const NavBody = ({ children }) => {
    return (
        <nav className="fixed z-40 bg-[var(--color-pray)] 
        lg:bg-transparent w-full lg:w-[3rem] bottom-0 right-0 lg:top-[22vh]
         h-[12dvh] lg:h-[max-content]  text-[var(--color-text)] lg:right-5 ">
            <article className="container mx-auto w-full h-full flex 
            lg:flex-col items-center justify-around lg:justify-center px-2 py-2">
                {children}
            </article>
        </nav>
    )
}

export default NavBody