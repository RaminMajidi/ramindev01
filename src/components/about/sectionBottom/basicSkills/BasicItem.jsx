import { motion } from "framer-motion";

const BasicItem = ({ title, url }) => {
    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[60px] mx-2 my-4">
            <img
                className="w-full"
                src={url}
                alt={title}
                title={title}
            />
        </motion.div>
    )
}

export default BasicItem