import { useTranslation } from "react-i18next";
import ContactContainer from "./ContactContainer";
import PageTitle from "../../components/design/PageTitle"
import { useAppContext } from "../../context/app/AppContext"
import ContactText from "./ContactText";
import ContactList from "./ContactList";
import SocialList from "./SocialList";


const ContactDetails = ({ data }) => {
    const { t } = useTranslation();
    const { language } = useAppContext()
    return (
        <>
            <PageTitle
                topicTitle={t("contact.pageTitle.topicTitle") + " "}
                topicTitle2={t("contact.pageTitle.topicTitle2")}
                belowTitle={t("contact.pageTitle.belowTitle")}
            />
            {data &&
                <ContactContainer>
                    <ContactText
                        title={data["subTitle"][language + "_title"]}
                        desc={data["subTitle"][language + "_desc"]}
                    />
                    <ContactList
                        links={data.linkItems}
                    />
                    <SocialList 
                    data={data.Socials}
                    />

                </ContactContainer>
            }

        </>
    )
}

export default ContactDetails