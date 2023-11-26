import { useAppContext } from "../../context/app/AppContext";


const HomeDetails = ({data}) => {
  const { language, changeLanguage } = useAppContext();
  return (
    <div className="text-red-500">HomeDetails</div>
  )
}

export default HomeDetails