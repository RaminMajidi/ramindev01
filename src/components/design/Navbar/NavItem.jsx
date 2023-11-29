import { NavLink } from 'react-router-dom'


const NavItem = ({ url, title, iconType, iconName }) => {
    return (
        <NavLink
            className={({ isActive }) => `animate__animated  group flex justify-center 
                       items-center transition-all duration-500 ease-in-out 
                       cursor-pointer p-2 relative text-slate-100 w-12 h-12 
                       rounded-full lg:my-2 hover:bg-[var(--color-primary)] 
                       ${isActive ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-gray)]'}`
            }
            to={url}
            title={title}
        >
            <h2 className={`hidden cursor-pointer transition-all 
            duration-500 ease-in-out lg:inline-block 
            bg-[var(--color-primary)] lg:opacity-0  
            lg:absolute w-0 right-0 lg:p-3 rounded-full 
            lg:group-hover:opacity-100 lg:group-hover:w-32 
            text-center text-slate-100 text-lg overflow-hidden max-h-12`}>
                {title}
            </h2>
            <box-icon
                color="#fff"
                size="md"
                type={iconType}
                name={iconName}>
            </box-icon>
        </NavLink>
    )
}

export default NavItem