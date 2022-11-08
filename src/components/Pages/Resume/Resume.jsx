import React,{useContext,useEffect} from "react";
import { ActiveContext } from "../../Context/ActiveContext";


const Resume = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

useEffect(()=>{
    setActiveMenu("resume");
},[])


    return(
        <section className="page col-12 col-lg-10 col-md-9" >
            <h2>Resume</h2>
        </section>
    )
}

export default Resume;