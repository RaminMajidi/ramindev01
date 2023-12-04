import { motion } from "framer-motion";

const Filters = ({ categorys, filter, filterHandeler, language }) => {
    return (
        <motion.div
        initial={{ scale: -1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full flex justify-center mx-auto my-10
         flex-wrap ${language == "fa" ? 'flex-row-reverse' : 'flex-row'}`}>
            {
                categorys?.map((item) => (
                    <button
                        key={item + "_Cat"}
                        onClick={() => filterHandeler(item)}
                        className={`${item == filter ? "text-[var(--color-primary)]" :
                            "text-[var(--color-text)]"} text-base md:text-xl font-[Poppins] 
                             tracking-wide my-1 mx-1 p-1 select-none`}>
                        {item}
                    </button>
                ))
            }
        </motion.div>
    )
}

export default Filters