import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./BtnBack.css"

const BtnBack = () => {
    const { t } = useTranslation()

    return (
        <motion.button
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: .5 }}
            title={t("btns.btnBack")}
            onClick={() => window.history.back()}
            className="cursor-pointer custom-btn btn-7 mt-6">
            <span>{t("btns.btnBack")}</span>
        </motion.button>
    )
}

export default BtnBack;