import NavItem from "./NavItem"


const Navbar = () => {
    return (
        <nav className="fixed z-40 bg-[var(--color-pray)] lg:bg-transparent  
        w-full lg:w-[5rem] bottom-0 right-0 lg:top-[22vh] h-[12dvh] 
        lg:h-[max-content] lg:right-5 text-[var(--color-text)] ">
            <article className="w-full h-full flex lg:flex-col items-center 
            justify-around lg:justify-center px-2 py-3">
                <NavItem
                    url="/"
                    title={'خانه'}
                    iconName="home"
                    iconType="solid"
                />
                <NavItem
                    url="/about"
                    title={'درباره من'}
                    iconName="user"
                    iconType="solid"
                />
                <NavItem
                    url="/portfolio"
                    title={'نمونه کار'}
                    iconName="briefcase"
                    iconType="solid"
                />
                <NavItem
                    url="/contact"
                    title={'ارتباط'}
                    iconName="envelope-open"
                    iconType="solid"
                />
            </article>
        </nav>
    )
}

export default Navbar