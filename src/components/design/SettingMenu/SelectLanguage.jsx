import irFlag from '../../../assets/images/ir.svg'
import enFlag from '../../../assets/images/us.svg'
import LanguageItem from './LanguageItem'
import { useTranslation } from "react-i18next";
import SelectBody from './SelectBody';

const SelectLanguage = () => {
    const { t } = useTranslation();

    return (
        <SelectBody title={t("settings.selectLang.title")}>
            <LanguageItem
                alt={t("settings.selectLang.langFa")}
                src={irFlag}
                language='fa'
                title={t("settings.selectLang.langFa")}
            />
            <LanguageItem
                alt={t("settings.selectLang.langEn")}
                src={enFlag}
                language='en'
                title={t("settings.selectLang.langEn")}
            />
        </SelectBody>
    )
}

export default SelectLanguage