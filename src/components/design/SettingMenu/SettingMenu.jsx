import { useAppContext } from '../../../context/app/AppContext'
import Modal from '../Modal/Modal'
import SelectLanguage from './SelectLanguage'
import { useTranslation } from "react-i18next";
import SelectColor from './SelectColor';
import SelectTheme from './SelectTheme';


const SettingMenu = () => {
    const { t } = useTranslation();
    const { showSetting, toggleSetting } = useAppContext()
    return (
        <Modal
            btnTitle={t("settings.btnClose")}
            title={t("settings.title")}
            open={showSetting}
            isToggle={toggleSetting}
        >
            <SelectLanguage />
            <SelectColor />
            <SelectTheme />
        </Modal>
    )
}

export default SettingMenu