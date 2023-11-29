import NavBody from "./NavBody";
import NavItem from "./NavItem"
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <NavBody>
            <NavItem
                url="/"
                title={t("navbar.home")}
                iconName="home"
                iconType="solid"
            />
            <NavItem
                url="/about"
                title={t("navbar.about")}
                iconName="user"
                iconType="solid"
            />
            <NavItem
                url="/portfolio"
                title={t("navbar.portfolio")}
                iconName="briefcase"
                iconType="solid"
            />
            <NavItem
                url="/contact"
                title={t("navbar.contact")}
                iconName="envelope-open"
                iconType="solid"
            />
        </NavBody>
    )
}

export default Navbar