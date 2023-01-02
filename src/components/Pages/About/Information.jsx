import React from 'react';
import { aboutData } from "../../../assets/data/data";
import myresume from "../../../assets/data/resume.png";
import BtnDownload from '../../Design/btnDownload/BtnDownload';

const Information =()=>{

    return(
    <div className="neumorphism mt-3 text-white d-flex flex-column flex-md-row justify-content-around p-2 mx-auto  text-end">
        <div className=" wow col12 col-md-6 p-3 m-2 animate__animated animate__bounceIn animate__delay-1s">
            <h3 className="fw-bold text-end my-4 p-1">{aboutData[0].title}</h3>
            <p className="fs-5 text-just p-1">{aboutData[0].text}</p>
        </div>
        <div className=" wow col12 col-md-6 p-3 m-2 animate__animated animate__bounceIn animate__delay-1s">
            <h3 className="fw-bold mx-2 my-4 ">{aboutData[1].title}</h3>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">نام و نام خانوادگی : </span><span>{aboutData[1].fullName}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">سن : </span><span>{aboutData[1].age}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">آدرس : </span><span>{aboutData[1].address}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">ایمیل : </span><span>{aboutData[1].email}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">تلفن : </span><span>{aboutData[1].phone}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">وضعیت سربازی : </span><span>{aboutData[1].soldiering}</span></h5>
            <h5><span className="b-b-b d-inline-block mx-2 my-1">وضعیت شغلی : </span><span>{aboutData[1].Freelance}</span></h5>
            <br />
            <BtnDownload size={"844 KB"} text={"دانلود رزومه"} href={myresume}/>
            <br />
        </div>
    </div>
    )
}

export default Information;