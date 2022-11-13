import React,{useContext,useEffect} from "react";
import "./Contact.css"
import { ActiveContext } from "../../Context/ActiveContext";
import { socialData } from "../../../assets/data/data";
import Social from "./Social";


const Contact = () =>{
    const {setActiveMenu} = useContext(ActiveContext);

    useEffect(()=>{
        setActiveMenu("contact");
    },[])
    return(
        <section className="page col-12 col-lg-10 col-md-9" >
           <div className="text-info d-flex justify-content-between align-items-start fs-1 px-3 w-75 mx-auto fw-bold page-title-b"><h2>تماس بامن</h2><i class='bx bxs-user'></i></div>
           <div className="d-flex flex-wrap justify-content-around p-2  ">
               {
                   socialData ? (
                       <>
                       {
                           socialData.map((item,i)=>{
                               return(<Social data={item} i={i}/>);
                           })
                       }
                       </>
                   ):(null)
               }

           </div>
        </section>
    )
}

export default Contact;