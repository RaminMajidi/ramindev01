import { useAppContext } from "../../context/app/AppContext"
import { FONT_POPPINS } from "../../data/data"
import ListItem from "./ListItem"


const ContactList = ({ links }) => {
    const { language } = useAppContext()
    return (
        <article className="px-3">
            {links?.map(item => (
                <ListItem
                    key={"C_I_" + item?.id}
                    isLink={item?.isLink}
                    iconName={item?.iconName}
                    iconType={item?.iconType}
                    title={item[language + "_title"]}
                    text={item[language + "_text"]}
                    link={item?.link}
                    font={FONT_POPPINS}
                />
            ))}

        </article>
    )
}

export default ContactList