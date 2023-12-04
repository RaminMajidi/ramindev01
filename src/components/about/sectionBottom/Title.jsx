import React from 'react'
import { motion } from "framer-motion"

const Title = ({ title }) => {
    return (

        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <hr className='mx-auto my-8 border-2 
            rounded-full border-[var(--color-pray)]'
            />
            <h3 className='text-[var(--color-text)] font-bold
             text-center text-2xl p-1 mb-4'
            >
                {title}
            </h3>
        </motion.div>


    )
}

export default Title