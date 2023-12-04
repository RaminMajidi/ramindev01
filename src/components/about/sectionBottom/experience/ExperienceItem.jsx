import React from 'react'
import ItemBorder from './ItemBorder'
import ItemYears from './ItemYears'
import ItemBody from './ItemBody'
import { motion } from 'framer-motion'

const ExperienceItem = ({ sYear, eYear, title, college, desc }) => {
    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex h-auto min-h-[12rem] col-span-12 md:col-span-6">
            <ItemBorder />
            <div className=" mr-11 w-full p-2 text-[var(--color-text)]">
                <ItemYears
                    sYear={sYear}
                    eYear={eYear}
                />
                <ItemBody
                    title={title}
                    college={college}
                    desc={desc}
                />
            </div>
        </motion.div>
    )
}

export default ExperienceItem