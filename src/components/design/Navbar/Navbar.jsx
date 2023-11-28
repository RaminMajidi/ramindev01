import NavItem from "./NavItem"
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="fixed z-40 bg-[var(--color-pray)] lg:bg-transparent  
        w-full lg:w-[5rem] bottom-0 right-0 lg:top-[22vh] h-[12dvh] 
        lg:h-[max-content]  text-[var(--color-text)] ">
            <article className="w-full h-full flex lg:flex-col items-center 
            justify-around lg:justify-center px-2 py-2">
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
            </article>
        </nav>
    )
}

export default Navbar