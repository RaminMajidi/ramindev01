import { useAppContext } from "../../context/app/AppContext";
import BlobSvg from "../design/BlobSvg/BlobSvg"
import myImage from "../../assets/images/my-image.png"
import "./Home.css"


const HomeDetails = ({ data }) => {
  console.log(data);
  const { language, changeLanguage } = useAppContext();
  console.log(data[language]);
  return (
    <div className="">
      <h1 className="z-20">{data[language].title}</h1>
    </div>
  )
}

export default HomeDetails