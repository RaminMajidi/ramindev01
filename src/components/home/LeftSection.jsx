import BtnDownload from "../Btns/BtnDownload/BtnDownload"
import { motion } from "framer-motion"

const LeftSection = ({ title, subTitle, desc }) => {
    return (
        <motion.article
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            className="relative flex flex-col justify-center w-full h-full max-w-[500px]"
        >
            <h1 className="text-2xl md:text-3xl mb-3 font-bold text-[var(--color-primary)]">
                {title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-2 font-bold ">
                {subTitle}
            </h2>
            <h5 className="text-base md:text-lg mb-2 text-justify text-[var(--color-gray)]">
                {desc}
            </h5>
            <BtnDownload />
        </motion.article>
    )
}

export default LeftSection