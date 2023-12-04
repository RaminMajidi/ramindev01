import { motion } from "framer-motion"

const ContactText = ({ title, desc }) => {
    return (
        <div className="">
            <motion.h2
                initial={{ scale: -1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="px-3 py-2 text-2xl font-bold">
                {title}
            </motion.h2>
            <motion.p
                initial={{ scale: -1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="px-3 py-2 text-justify leading-7 text-lg lg:text-xl lg:leading-9 ">
                {desc}
            </motion.p>
        </div>
    )
}

export default ContactText