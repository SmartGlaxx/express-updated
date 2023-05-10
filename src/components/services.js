import React, {useEffect} from 'react';
import {OurServices} from '../utility/constants'
import styled from 'styled-components'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import pic1 from "../assets/services-pictures/pic1.png";
import pic2 from "../assets/services-pictures/pic2.png";
import pic3 from "../assets/services-pictures/pic3.png";
import pic4 from "../assets/services-pictures/pic4.png";

const Container = styled.div`
font-size: 0.9rem;
height: auto;
width: auto;
margin: 0 1px;
overflow-x: hidden;
background: none;
background-repeat: no-repeat;
background-size: cover;
*{
    background: transparent;
    color: var( --text-color-2);
    text-align: center;
    padding: 0.4rem;
    box-sizing: border-box;
}
.service{
    width: 100vw;
    // background: linear-gradient(var(--background-color, --background-color-2));
    background: linear-gradient(var(--background-color, #eee), var(--background-color-5, #ddd));
    display:grid;    
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    
}  
.service-image-box{
    position: relative;
    margin: 0 auto;
    background: var(--image-background);
    // padding: 2rem;
    // max-width: calc(50vw - 10rem);
    width: 100%;
    // max-height: 40rem;
    overflow: hidden
}
.service-images:hover{
    transform: scale(1.2);
    transition: all 0.5s
}
.image-title{
    float: left;
    color: var(--text-color-1)
}
.image-subtitle{
    float: left;
    font-size: 4rem;
    color: var(--titles-color);
    font-family: 'Tangerine', "arial";
    position: absolute;
    left: 0;
}
@media screen and (max-width: 800px){
    
        padding: 0rem
    
    .service{  
        grid-gap: 0.5rem;
    }
}
@media screen and (max-width: 600px){
    .service{  
        grid-template-columns: 1fr;
    }
}
.inner{
   box-sizing: border-box;
   margin: 2rem 1rem;
   padding: 0.5rem 1rem;
   border: 2px solid var(--text-color-2);
   border-radius: 7px
} 
.title{

}
.icon{
    font-size: 2rem
}

.section{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background: red
}
.sectionTwo{
    width: 120vw;
    
}
.sectionFour{
    
}

.sectionTwo img{
    background: transparent;
    width: 60rem;
    margin-left: -50rem
}
.sectionFour img{
    background: transparent;
    width: 30rem;
    margin-left: -50rem
}
.section h2{
    color: #fff;
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px
}

.sectionOne h2{  
    display: inline-block;
    font-size: 6rem;
    line-height: 0.9;
    padding: 20px;
    font-family: 'Syncopate', sans-serif;
    text-transform: uppercase;
    background:linear-gradient(123deg, rgba(40, 40, 40, 0.2), rgba(80, 80, 80, 0.3)), transparent;
    -webkit-text-stroke: 0.2rem #ddd;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
   
}
.sectionTwo h2{  
    display: inline-block;
    font-size: 10rem;
    line-height: 0.9;
    padding: 20px;
    font-family: 'Syncopate', sans-serif;
    text-transform: uppercase;
    background:linear-gradient(123deg, rgba(0, 0, 60, 0.4), rgba(66, 0, 0, 0.5)), transparent;
    -webkit-text-stroke: 0.2rem #aaa;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.sectionFour h2{  
    display: inline-block;
    font-size: 10rem;
    line-height: 0.9;
    padding: 20px;
    font-family: 'Syncopate', sans-serif;
    text-transform: uppercase;
    background:linear-gradient(123deg, rgba(0, 0, 60, 0.4), rgba(66, 0, 0, 0.5)), transparent;
    -webkit-text-stroke: 0.2rem #aaa;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
@media screen and (min-width: 767px){
    font-size: 1.1rem;
    h5{
        font-size: 1.4rem
    }
}
@media screen and (max-width: 767px){
    .section h2{
        font-size: 34px;
        -webkit-text-stroke: 1px #ddd;
    } 

    .section{
        position: relative
    }
    .sectionOne{
        position: absolute;
        top: 2rem
    }
    .sectionOne h2, .sectionTwo h2, .sectionFour h2{
        position: absolute;
        
    }

    .sectionFour img{
        margin-left: 0rem
    }
}


` 

const Services =()=>{

    
return <Container className='row'>
        <div className='service'>
        <div className='service-image-box'>
            <h3 className='image-title'>Windows Notebook</h3><br />
            <h2 className='image-subtitle'>12 Gig ram & Backlit keyboard</h2>
            <img src={pic1} alt="image1" className="service-images"/>
        </div>
        <div className='service-image-box'>
            <h3 className='image-title'>OneMix Running Shoe</h3><br />
            <h2 className='image-subtitle'>Enhanced performance</h2>
            <img src={pic2} alt="image2" className="service-images"/>
        </div>

        <div className='service-image-box'>
            <h3 className='image-title'>Food Processor</h3><br />
            <h2 className='image-subtitle'>Efficient & versatile</h2>
            <img src={pic3} alt="image3" className="service-images"/>
        </div>
        <div className='service-image-box'>
            <h3 className='image-title'>4K Android TV</h3><br />
            <h2 className='image-subtitle'>Immersive experience</h2>
            <img src={pic4} alt="image4" className="service-images"/>
        </div>
        </div>
    </Container>
}

export default Services