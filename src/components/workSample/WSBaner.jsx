import { motion } from "framer-motion"

const WSBaner = ({ url, title }) => {
    return (
        <motion.div
            initial={{ top:-200, opacity: 0 }}
            whileInView={{ top: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='relative rounded-2xl bg-[var(--color-primary)] 
        w-full md:h-[65dvh]'>
            <img
                className='w-full h-full rounded-2xl'
                src={"/" + url}
                alt={"baner_" + title}
            />

        </motion.div>
    )
}

export default WSBaner