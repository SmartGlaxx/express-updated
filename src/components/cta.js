import React, {useEffect} from 'react';
import styled from 'styled-components'
import {ButtonComponent} from './index';
import { FaTruck } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import card1 from "../assets/cta-pictures/pic2.png";
import card2 from "../assets/cta-pictures/pic3.png";
import card3 from "../assets/cta-pictures/pic4.png";
// import card2 from "../assets/cta-pictures/pic2.png";
// import card3 from "../assets/hero-cards/card1.jpg";
// import card4 from "../assets/hero-cards/card2.jpg";
// import card5 from "../assets/services-pictures/pic1.jpg";
// import card6 from "../assets/services-pictures/pic2.png";

const Container = styled.div`
// background: var(--background-color-2);
// background: red;
// box-sizing: border-box;
// height: auto;
// padding: 1rem;
// width: auto;
// overflow: hidden;
// margin-right: 0px;

height: 300vh;
width: auto;
margin: 0 1px;
overflow-x: hidden;
background: none;
background-repeat: no-repeat;
background-size: cover;

.cta{
    display:flex;
    flex-wrap: nowrap;  
    // background: red   
 }

.cta-title{
    background: none;
    color: var(--text-color-2);
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.2rem;
    ${'' /* font-family:'Verdana' */}
}
.cta-subtitle{
    background: none;
    color: var(--text-color-2);
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
}
${'' /* .button{
    background: var(--button-background);
     color: var(--menu-color);
    float: right;
    border: none
}
.button:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    position: sticky;
    z-index: 2
} */}
.inner-container{
    background: var(--button-background);
    border: 10px solid  var(--button-background-hover); 
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-radius: 50% 0% 0% 50%;
    padding: 5rem 3rem;
    position: relative
}

.overlay{
    position: absolute;
    top: 20%;
    width: 80%;
    height: 50%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    animation: animate 8s linear infinite;
    background: linear-gradient(to right, rgba(250, 250, 250, 0.1), var(--button-background), rgba(200, 200, 200, 0.3) );
    opacity: 0.1;
    ${'' /* background: red; */}
    z-index: 0
}
${'' /* .truck{
    font-size: 6rem;
    background: inherit;
    color: var(--text-color-2)
} */}

.button{
    float: right
 }


 .cta{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.cts-section{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.cta-sectionOne{
    width: 200vw;
    // background-image: url(${card1});
    // background-repeat: no-repeat;
    // background: linear-gradient(to right, blue, var(--background-color));
    background: none;
    height: 100vh
}
.cta-sectionTwo{
    width: 200vw;
    // background-image: url(${card1});
    // background-repeat: no-repeat;
    // background: linear-gradient(to right, var(--background-color-2), blue);
    background: none;
    height: 100vh
}
.cta-sectionFour{
    width: 200vw;
    // background-image: url(${card1});
    // background-repeat: no-repeat;
    // background: linear-gradient(to right,  var(--background-color-1), red);
    background: none;
    height: 100vh
}

.cta h2{
    color: #fff;
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px
}


.cta-sectionOne h2{  
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
.cta-sectionTwo h2{  
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
.cta-sectionFour h2{  
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


@keyframes animate {
    0%{transform: translateX(-200%); width: 10px}
    100%{transform: translateX(100%); width: 6000px}
    ${'' /* 100%{transform: translateX(300%)} */}
}
@media screen and (max-width:767px){
    Button{margin-top: 2rem}
    .truck{width: 60%; height: 22%}
}
@media screen and (max-width:500px){
    .truck{width: 50%; height: 18%}
}

@media screen and (max-width: 767px){
    .cta-sectionOne h2, .cta-sectionTwo h2, .cta-sectionFour h2{
        font-size: 34px;
        -webkit-text-stroke: 1px #ddd;
    } 

    .section{
        position: relative
    }
    .cta-sectionOne {
        position: absolute;
        top: 2rem
    }
    .sectionOne h2, .sectionTwo h2, .sectionFour h2{
        position: absolute;
        
    }
}

` 

const Cta =()=>{

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        let timeline = gsap.timeline()

        timeline.to(".cta", 2, {
            x: "140vw",
            scrollTrigger:{
                trigger: ".cta",
                start: "center center",
                end: "+=4000",
                scrub: true,
                pin: true
            }
        })

        timeline.fromTo(".cta-sectionOne h2",{
            x: -400,
            y: 250,
            // opacity:0,
        },
        {
            x: 200,
            y: 250,
            // opacity:1,
            ease: "power4",
            scrollTrigger:{
                trigger: ".cta-section",
                start: 'center center',
                end: "+=2000",
                scrub: true,
                pin: true,
                toggleActions: 'play none none reverse',
                revese: true
            }
        })
        // timeline.fromTo(".cta",{
        //     opacity: 0,
        //     x: 105,
        //     y: 80,
        //     scale: 0.7,
        // },
        // {
        //     x: -10,
        //     y: 45,
        //     opacity: 1,
        //     scale: 1,
        //     ease: "power2",
        //     scrollTrigger:{
        //         trigger: ".cta-sectionFour h2",
        //         start: 'center center',
        //         // end: "-=1000",
        //         scrub: true,
        //         pin: true,
        //         toggleActions: 'play none none reverse',
        //         revese: true
        //     }
        // })

    timeline.fromTo(".cta-sectionTwo h2",{
            x: -700,
            y: 250,
            // opacity:0,
        },
        {
            x: 300,
            y: 250,
            // opacity:1,
            ease: "power4",
            scrollTrigger:{
                trigger: ".cta-section",
                start: 'center center',
                end: "+=2000",
                scrub: true,
                pin: true,
                toggleActions: 'play none none reverse',
                revese: true
            }
    })

    timeline.fromTo(".cta-sectionFour h2",{
        x: 400,
        y: 150,
    },
    {
        x: -500,
        y: 250,
        ease: "power4",
        scrollTrigger:{
            trigger: ".cta-section",
            start: 'center center',
            end: "+=2000",
            scrub: true,
            pin: true,
            toggleActions: 'play none none reverse',
            revese: true
        }
    })

},[])


    return <Container>
    <div className='row'>
    <div className='cta col-sm-12 col-md-4'>
        <div className='cta-section ' >
            {/* <img src={card2} alt="Picture" style={{background:"transparent"}}/> */}
        </div> 
        <div className=' cta-sectionOne' >
            <h2>Fashion</h2>
            <img src={card3} alt="Picture" style={{background:"transparent"}}/>
        </div>
        <div className='cta-sectionTwo' >
            {/* <h2>Access a Range of</h2> */}
            
        </div>

        <div className=' cta-sectionFour' >
           
            <img src={card2} alt="Picture" style={{background:"transparent"}}/>
        </div>
        {/*
        <Link to='/shop'>
            <ButtonComponent>Shop Now</ButtonComponent>
        </Link> */}
    </div>
    </div>
    </Container>
}

export default Cta
