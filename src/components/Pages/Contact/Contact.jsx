import React,{useContext,useEffect} from "react";
import { ActiveContext } from "../../Context/ActiveContext";


const Contact = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

    useEffect(()=>{
        setActiveMenu("contact");
    },[])
    return(
        <section className="page col-12 col-lg-10 col-md-9" >
            <h2>Contact</h2>
        </section>
    )
}

export default Contact;