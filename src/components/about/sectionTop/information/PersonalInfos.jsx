import { useTranslation } from "react-i18next";
import InfoTitle from "./InfoTitle";
import InfoList from "./InfoList";
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";


const PersonalInfos = ({ data }) => {
    const { t } = useTranslation();
    return (
        <motion.section
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1}}
            transition={{ duration: 1.3 }}
            className="w-full"
        >
            <InfoTitle title={t("about.pInfo.title")} />
            <InfoList data={data} />
            <DownloadCV />
        </motion.section>
    )
}
export default PersonalInfos;