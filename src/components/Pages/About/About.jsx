import React,{useContext,useEffect} from "react";
import "./About.css";
import { ActiveContext } from "../../Context/ActiveContext";
import Information from "./Information";
import Servises from "./Servises";
import Certificate from "./Certificates";



const About = () =>{
    const {setActiveMenu} = useContext(ActiveContext);
    
   
    useEffect(()=>{
        setActiveMenu("about");
    },[])

    return(
        <section className="page col-12 col-lg-10 col-md-9 about animate__animated animate__fadeInTopLeft" >
           <div className="text-info d-flex justify-content-between align-items-start fs-1 px-3 w-75 mx-auto fw-bold about-title"><h2>درباره من</h2><i class='bx bxs-user'></i></div>
           <Information/>
           <br />
           <Servises/>
           <br />
           <Certificate/>
        </section>
    )
}

export default About;