import irFlag from '../../../assets/images/ir.svg'
import enFlag from '../../../assets/images/us.svg'
import LanguageItem from './LanguageItem'
import { useTranslation } from "react-i18next";

const SelectLanguage = () => {
    const { t } = useTranslation();

    return (
        <div className='flex justify-between items-center'>
            <label className='text-lg text-[var(--color-text)]'>
                {t("settings.selectLang.title")}
            </label>
            <div className='flex'>
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
            </div>
        </div>
    )
}

export default SelectLanguage