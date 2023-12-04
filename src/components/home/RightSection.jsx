import BlobSvg from "../design/BlobSvg"
import { motion } from "framer-motion"

const RightSection = ({ imgUrl }) => {
    return (
        <motion.article
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full mx-auto md:w-1/2 max-w-[500px]"

        >
            <BlobSvg />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="absolute top-0 left-4">
                <img
                    className="w-full"
                    src={imgUrl} />
            </motion.div>
        </motion.article >
    )
}

export default RightSection