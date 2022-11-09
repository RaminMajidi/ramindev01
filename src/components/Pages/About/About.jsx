import React,{useContext,useEffect} from "react";
import "./About.css";
import { ActiveContext } from "../../Context/ActiveContext";
import { aboutData } from "../../../assets/data/data";
import myresume from "../../../assets/data/resume.png"

const About = () =>{
    const {setActiveMenu} = useContext(ActiveContext);
    console.log(aboutData)
   

    useEffect(()=>{
        setActiveMenu("about");
    },[])

    return(
        <section className="page col-12 col-lg-10 col-md-9 about animate__animated animate__fadeInTopLeft" >
            <div className="text-info d-flex justify-content-between align-items-start fs-1 px-3 w-75 mx-auto fw-bold about-title"><h2>درباره من</h2><i class='bx bxs-user'></i></div>
            <div className="text-white d-flex flex-column flex-md-row justify-content-around p-2 mx-auto  text-end">
                <div className="col12 col-md-6 p-2 m-1">
                    <h3 className="fw-bold text-end my-4">{aboutData[0].title}</h3>
                    <p className="fs-5 text-just">{aboutData[0].text}</p>
                </div>
                <div className="col12 col-md-6 p-2 m-1">
                    <h3 className="fw-bold mx-2 my-4 ">{aboutData[1].title}</h3>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">نام و نام خانوادگی : </span><span>{aboutData[1].fullName}</span></h5>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">سن : </span><span>{aboutData[1].age}</span></h5>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">آدرس : </span><span>{aboutData[1].address}</span></h5>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">ایمیل : </span><span>{aboutData[1].email}</span></h5>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">تلفن : </span><span>{aboutData[1].phone}</span></h5>
                    <h5><span className="b-b-b d-inline-block mx-2 my-1">وضعیت شغلی : </span><span>{aboutData[1].Freelance}</span></h5>
                    <a href={myresume} target={"_blank"} download><button className="btn btn-light ">دانلود رزومه</button></a>
                </div>
            </div>
        </section>
    )
}

export default About;