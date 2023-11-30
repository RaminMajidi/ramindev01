import { useTranslation } from "react-i18next";
import InfoTitle from "./InfoTitle";
import InfoList from "./InfoList";
import DownloadCV from "./DownloadCV";


const PersonalInfos = ({ data }) => {
    const { t } = useTranslation();
    return (
        <section className="w-full">
            <InfoTitle title={t("about.pInfo.title")} />
            <InfoList data={data} />
            <DownloadCV />
        </section>
    )
}
export default PersonalInfos;