import React from 'react'

const ContactContainer = ({ children }) => {
    return (
        <section className='w-full max-w-2xl mx-auto px-3 mt-4'>
            {children}
        </section>
    )
}

export default ContactContainer