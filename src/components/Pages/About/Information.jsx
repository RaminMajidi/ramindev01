import React from 'react';
import { aboutData } from "../../../assets/data/data";
import myresume from "../../../assets/data/resume.png";

const Information =()=>{

    return(
    <div className="text-white d-flex flex-column flex-md-row justify-content-around p-2 mx-auto  text-end">
        <div className="wow col12 col-md-6 p-2 m-1 animate__animated animate__bounceIn animate__delay-1s">
            <h3 className="fw-bold text-end my-4">{aboutData[0].title}</h3>
            <p className="fs-5 text-just">{aboutData[0].text}</p>
        </div>
        <div className="wow col12 col-md-6 p-2 m-1 animate__animated animate__bounceIn animate__delay-1s">
            <h3 className="fw-bold mx-2 my-4 ">{aboutData[1].title}</h3>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">نام و نام خانوادگی : </span><span>{aboutData[1].fullName}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">سن : </span><span>{aboutData[1].age}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">آدرس : </span><span>{aboutData[1].address}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">ایمیل : </span><span>{aboutData[1].email}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">تلفن : </span><span>{aboutData[1].phone}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">وضعیت شغلی : </span><span>{aboutData[1].Freelance}</span></h5>
            <br />
            <a href={myresume} target={"_blank"} download><button className="btn btn-light w-50 wow animate__animated animate__backInLeft animate__delay-2s ">دانلود رزومه</button></a>
            <br />
        </div>
    </div>
    )
}

export default Information;