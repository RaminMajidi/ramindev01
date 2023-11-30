import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../../context/app/AppContext";
import InfoItem from "./InfoItem";

const InfoList = ({ data }) => {
    const { language } = useAppContext();
    const { t } = useTranslation();
    return (
        <div>
            <ul className="pr-3 my-3 flex flex-wrap w-full">
                {data.map((item) => (
                    <InfoItem
                        key={"personal_" + item.id}
                        title={t(`about.pInfo.${item.title}`) + " : "}
                        value={item[language + '_value']}
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default InfoList