import React,{useContext,useEffect} from "react";
import { ActiveContext } from "../../Context/ActiveContext";


const Portfolio = () =>{

    const {setActiveMenu} = useContext(ActiveContext);

    useEffect(()=>{
        setActiveMenu("portfolio");
    },[])
    return(
        <section className="page col-12 col-lg-10 col-md-9" >
            <h2>Portfolio</h2>
        </section>
    )
}

export default Portfolio;