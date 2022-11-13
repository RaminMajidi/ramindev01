import React,{useContext,useEffect, useState} from "react";
import "./Portfolio.css"
import { ActiveContext } from "../../Context/ActiveContext";
import { categorys } from "../../../assets/data/data";
import PortfolioList from "./PortfolioList";


const Portfolio = () =>{

    const {setActiveMenu} = useContext(ActiveContext);
    const [filter,setFilter] = useState("All");
    useEffect(()=>{
        setActiveMenu("portfolio");
    },[]);

    return(
<section className="portfolio page wow col-12 col-lg-10 col-md-9 animate__animated animate__zoomInLeft" >
  <div className="text-info d-flex justify-content-between align-items-start fs-1 px-3 w-75 mx-auto fw-bold page-title-b"><h2>نمونه کارها</h2><i class='bx bx-code-block'></i></div>
  <div className="wow btn-container w-auto d-flex  flex-wrap justify-content-center align-items-center my-2 p-1  animate__animated animate__fadeInLeft animate__delay-1s">
{
    categorys.map((item,i)=>{
        return(
            <button onClick={()=>setFilter(item)} className={`btn btn-info fw-bold m-2 ${filter===item ? "active" : ""} `}>{item}</button>
        )
    })
}
  </div>
  <div className="d-flex justify-content-around p-2 flex-wrap ">
<PortfolioList filter={filter}/>
  </div>
</section>
    )
}

export default Portfolio;