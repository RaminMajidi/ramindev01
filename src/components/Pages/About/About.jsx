import React,{useContext,useEffect} from "react";
import { ActiveContext } from "../../Context/ActiveContext";

const About = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

    useEffect(()=>{
        setActiveMenu("about");
    },[])

    return(
        <section className="page col-12 col-lg-10 col-md-9" >
            <h2>About</h2>
        </section>
    )
}

export default About;