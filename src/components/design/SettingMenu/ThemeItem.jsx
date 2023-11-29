import { useAppContext } from "../../../context/app/AppContext"


const ThemeItem = ({ iconName, iconType, value, title }) => {

    const { changeTheme, theme } = useAppContext()


    return (
        <div
            onClick={() => changeTheme(value)}
            title={title}
            className={`${theme == value ? 'bg-[var(--color-primary)]' :
                'bg-[var(--color-gray)]'} mx-1 cursor-pointer 
                flex justify-center items-center p-1 rounded-full`}>
            <box-icon
                color="#f2f2f2"
                size="24px"
                type={iconType}
                name={iconName}
            >
            </box-icon>
        </div>
    )
}

export default ThemeItem