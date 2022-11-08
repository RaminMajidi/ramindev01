import React,{useContext,useEffect} from "react";
import { ActiveContext } from "../../Context/ActiveContext";

const About = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

    useEffect(()=>{
        setActiveMenu("about");
    },[])

    return(
        <section className="page about col-12 col-lg-10 col-md-9 animate__animated animate__bounceInDown" >
            <h2>About</h2>
        </section>
    )
}

export default About;