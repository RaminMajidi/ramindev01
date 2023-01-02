import React,{useContext,useEffect} from "react";
import "./Resume.css"
import { ActiveContext } from "../../Context/ActiveContext";
import ResumeItem from "./ResumeItem";
import { resumeData,skillsData } from "../../../assets/data/data";
import SkillsItem from "./SkillsItem";



const Resume = () =>{
const {setActiveMenu} = useContext(ActiveContext);

useEffect(()=>{
    setActiveMenu("resume");
},[])


    return(
        <section className="resume page col-12 col-lg-10 col-md-9 animate__animated  animate__fadeInRightBig " >
            <div className="neumorphism text-info d-flex justify-content-between align-items-start fs-1 p-3 w-75 mx-auto fw-bold"><h2>تجربیات</h2><i class='bx bxs-graduation'></i></div>
            <div className="text-end d-flex flex-wrap justify-content-around col p-2 align-items-lg-start align-items-center">
            <ResumeItem data={resumeData}/>
            </div>
            <br />
            <br />
            <h3 className='wow b-t-n text-white mx-auto animate__animated animate__fadeInLeftBig animate__delay-1s '>مهارتهای من</h3>
               <br />
               <br />
            <div className="text-end d-flex flex-wrap justify-content-around col p-2 align-items-lg-start align-items-center">
             <SkillsItem data={skillsData}/>
            </div>
        </section>
    )
}

export default Resume;