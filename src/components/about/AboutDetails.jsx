import React from 'react'
import AboutContainer from './AboutContainer';
import PageTitle from '../design/PageTitle';
import { useTranslation } from "react-i18next";
import SectionTop from './sectionTop/SectionTop';

const AboutDetails = ({ data }) => {
    const { t } = useTranslation();
    return (
        <AboutContainer>
            <PageTitle
                topicTitle={t("about.pageTitle.topicTitle") + " "}
                topicTitle2={t("about.pageTitle.topicTitle2")}
                belowTitle={t("about.pageTitle.belowTitle")}
            />
            <SectionTop
                personalData={data.personalInfos}
                sideData={data.sideItems}
            />
        </AboutContainer>
    )
}

export default AboutDetails