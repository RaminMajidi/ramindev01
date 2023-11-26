import { useAppContext } from "../../context/app/AppContext";


const HomeDetails = ({data}) => {
  const { language, changeLanguage } = useAppContext();
  return (
    <div>HomeDetails</div>
  )
}

export default HomeDetails