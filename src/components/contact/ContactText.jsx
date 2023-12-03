import React from 'react'

const ContactText = ({ title, desc }) => {
    return (
        <div className="animate__animated animate__backInLeft">
            <h2 className="p-2 text-2xl font-bold">
                {title}
            </h2>
            <p className="p-2 text-justify leading-7 text-lg lg:text-xl lg:leading-9 ">
                {desc}
            </p>
        </div>
    )
}

export default ContactText