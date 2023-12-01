import { useAppContext } from "../../../../context/app/AppContext"

const ExperienceList = ({ children }) => {
    const { language } = useAppContext()
    return (
        <div className={`grid grid-cols-12 gap-2 mt-6 mb-8
                        ${language == "en" ? 'pl-5' : ''}`}
        >
            {children}
        </div>
    )
}

export default ExperienceList