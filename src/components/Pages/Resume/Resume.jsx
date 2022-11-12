import React,{useContext,useEffect} from "react";
import "./Resume.css"
import { ActiveContext } from "../../Context/ActiveContext";
import ResumeItem from "./ResumeItem";
import { resumeItems } from "../../../assets/data/data";


const Resume = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

useEffect(()=>{
    setActiveMenu("resume");
},[])


    return(
        <section className="resume page col-12 col-lg-10 col-md-9 animate__animated  animate__fadeInRightBig animate__delay-s" >
            <div className="text-info d-flex justify-content-between align-items-start fs-1 px-3 w-75 mx-auto fw-bold page-title-b"><h2>تجربیات</h2><i class='bx bxs-graduation'></i></div>
            <div className="text-end d-flex flex-wrap justify-content-around col p-2 align-items-lg-start align-items-center">
            <ResumeItem data={resumeItems}/>
            </div>
             
        </section>
    )
}

export default Resume;