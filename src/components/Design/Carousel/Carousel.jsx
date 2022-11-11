import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import img1 from "../../../assets/images/Certificate(01).jpg";
import img2 from "../../../assets/images/Certificate(02).jpg";
import img3 from "../../../assets/images/Certificate(03).jpg";
import img4 from "../../../assets/images/Certificate(04).jpg";
import img5 from "../../../assets/images/Certificate(05).jpg";
import img6 from "../../../assets/images/Certificate(06).jpg";

export class Carousel extends Component{
    render(){
    var settings = {
          
          infinite: true,  
          speed:3000,  
          autoplay:true,
          centerMode: true,  
          slidesToShow:1,
          slidesToScroll: 1 ,
          lazyLoad:'progressive'      
    };
    
    return (
      <>
        <div className="crousel-container">    
            <Slider {...settings}  > 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img1} />  
            </div> 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img2} />  
            </div> 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img3} />  
            </div> 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img4} />  
            </div> 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img5} />  
            </div> 
            <div  className="wdt">  
              <img className="img img-fluid" src= {img6} />  
            </div> 
            </Slider>  
            </div>
            </>
    );
    }
}
export default Carousel;