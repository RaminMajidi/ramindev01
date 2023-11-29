import React from 'react'
import AboutContainer from './AboutContainer';
import PageTitle from '../design/PageTitle';
import { useAppContext } from '../../context/app/AppContext';
import { useTranslation } from "react-i18next";

const AboutDetails = ({ data }) => {
    const { language } = useAppContext();
    const { t } = useTranslation();

    console.log(data);
    return (
        <AboutContainer>
            <PageTitle
                topicTitle={t("pageTitle.about.topicTitle") + " "}
                topicTitle2={t("pageTitle.about.topicTitle2")}
                belowTitle={t("pageTitle.about.belowTitle")}
            />
        </AboutContainer>
    )
}

export default AboutDetails