import React from 'react'
import { SocialItem } from './SocialItem'
import { useAppContext } from '../../context/app/AppContext'
import { motion } from "framer-motion"


const SocialList = ({ data }) => {

    const { language } = useAppContext()
    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex justify-start items-center px-2 my-6 '>
            {data?.map(item => (
                <SocialItem
                    iconName={item.iconName}
                    iconType={item.iconType}
                    title={item[language + "_title"]}
                    link={item.link}
                />
            ))}
        </motion.div>
    )
}

export default SocialList