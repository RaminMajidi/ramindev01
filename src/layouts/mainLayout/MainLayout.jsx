import { Outlet } from "react-router-dom"
import Navbar from "../../components/design/Navbar/Navbar"
import BtnSetting from "../../components/Btns/BtnSetting/BtnSetting"
import { useAppContext } from "../../context/app/AppContext"
import SettingMenu from "../../components/design/SettingMenu/SettingMenu"


const MainLayout = () => {
    const { showSetting } = useAppContext()
    return (
        <section className="container">
            <BtnSetting />
            <SettingMenu />
            <Navbar />
            <article className={`overflow-hidden w-full h-[88dvh] lg:h-[100dvh]`}>
                <Outlet />
            </article>
        </section>
    )
}

export default MainLayout