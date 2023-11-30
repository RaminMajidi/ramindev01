import { useTranslation } from "react-i18next";
import InfoTitle from "./InfoTitle";
import InfoList from "./InfoList";

const PersonalInfos = ({ data }) => {
    const { t } = useTranslation();
    return (
        <section className="w-full">
            <InfoTitle title={t("about.pInfo.title")} />
            <InfoList data={data} />
        </section>
    )
}
export default PersonalInfos;