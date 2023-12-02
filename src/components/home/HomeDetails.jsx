import { useAppContext } from "../../context/app/AppContext";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import HomeContainer from "./HomeContainer";
import "./Home.css"


const HomeDetails = ({ data }) => {

  const { language } = useAppContext();

  return (
    <HomeContainer>
      <RightSection
        imgUrl={data?.image}
      />
      <LeftSection
        title={data[language + "_title"]}
        subTitle={data[language + "_subTitle"]}
        desc={data[language + "_desc"]}
      />
    </HomeContainer>
  )
}

export default HomeDetails