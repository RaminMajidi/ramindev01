import { useAppContext } from "../../../context/app/AppContext"

const LanguageItem = ({ language, alt, src, title }) => {
    const { changeLanguage } = useAppContext()
    return (
        <div className='mx-1'>
            <img
                onClick={() => changeLanguage(language)}
                className='w-7 h-7 rounded-full object-cover cursor-pointer'
                src={src}
                title={title}
                alt={alt} />
        </div>
    )
}

export default LanguageItem