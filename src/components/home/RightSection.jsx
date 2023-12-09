import BlobSvg from "../design/BlobSvg"
import { motion } from "framer-motion"

const RightSection = ({ imgUrl }) => {
    return (
        <motion.article
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col justify-center w-full h-full max-w-[500px]"

        >
            <BlobSvg />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute">
                <img
                    className="w-full h-full"
                    src={imgUrl} />
            </motion.div>
        </motion.article >
    )
}

export default RightSection