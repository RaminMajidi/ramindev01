import { motion } from "framer-motion"


const PageTitle = ({ topicTitle, topicTitle2, belowTitle }) => {

    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            className=" w-full text-center relative py-1 uppercase ">
            <h2 className={`text-center z-10 text-[var(--color-text)] 
                  absolute w-full font-bold text-3xl md:text-5xl 
                  lg:text-6xl mt-5 lg:mt-10`}>
                {topicTitle}
                <span className=" text-[var(--color-primary)]">
                    {topicTitle2}
                </span>
            </h2>
            <span className=" text-center inline-block 
            text-[var(--color-gray)] w-full text-5xl md:text-7xl 
            lg:text-8xl font-bold tracking-widest opacity-20 mx-auto mt-1">
                {belowTitle}
            </span>
        </motion.div>
    )
}

export default PageTitle