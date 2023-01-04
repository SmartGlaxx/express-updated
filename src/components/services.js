import React, {useEffect} from 'react';
import {OurServices} from '../utility/constants'
import styled from 'styled-components'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import card1 from "../assets/hero-cards/card3.jpg";
import card2 from "../assets/hero-cards/card4.jpg";
import card3 from "../assets/hero-cards/card1.jpg";
import card4 from "../assets/hero-cards/card2.jpg";


const Container = styled.div`
font-size: 0.9rem;
height: auto;
width: auto;
margin: 0 1px;
overflow-x: hidden;
background: var(--background-color-2);
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
   display:flex;
   flex-wrap: nowrap
    
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.sectionTwo{
    width: 200vw;
    background-image: url(${card2})
}
.sectionFour{
    background-image: url(${card3})
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
    .sectionTwo{
        background: var(--background-color-2)
    }
    .sectionFour{
        background: var(--background-color-1)
    }
    .sectionOne h2, .sectionTwo h2, .sectionFour h2{
        position: absolute;
        
    }
}

` 

const Services =()=>{

    gsap.registerPlugin(ScrollTrigger)

    
    useEffect(()=>{
        let timeLine = gsap.timeline()

        timeLine.to(".service", 2, {
            x: "-400vw",
            scrollTrigger:{
                trigger: ".service",
                start: "center center",
                end: "+=4000",
                scrub: true,
                pin: true
            }
        })

        timeLine.fromTo(".sectionOne h2",{
            x: -100,
            y: 0,
            rotation:30,
        },
        {
            x:500,
            y: "50%",
            rotation: -1,
            ease: "power4",
            scrollTrigger:{
                trigger: ".sectionOne h2",
                start: 'center center',
                end: "+=2000",
                scrub: true,
                pin: true,
                toggleActions: 'play none none reverse',
                revese: true
            }
        })
        timeLine.fromTo(".sectionTwo h2",{
            opacity: 0,
            x: "-105vw",
            y: "-80%",
            scale: 0.7,
        },
        {
            x: "10vw",
            y: "30%",
            opacity: 1,
            scale: 1,
            ease: "power2",
            scrollTrigger:{
                trigger: ".sectionOne h2",
                start: 'center center',
                end: "+=2000",
                scrub: true,
                pin: true,
                toggleActions: 'play none none reverse',
                revese: true
            }
        })
    
    // timeLine.fromTo(".sectionThree h2",{
    //     opacity: 0, 
    //     scale: 2,
    //     yoyo: true
    // },
    // {
    //     opacity: 1, 
    //     scale: 0.9,
    //     duration: 5,
    //     scrollTrigger:{
    //         trigger: ".sectionThree h2",
    //         start: 'center center',
    //         end: "+=2000",
    //         scrub: true,
    //         pin: true,
    //         toggleActions: 'play none none reverse',
    //         revese: true
    //     }
    // })
    timeLine.fromTo(".sectionFour h2",{
        y: 0,
        scale: 1,
        yoyo: true
    },
    {
        y: -100, 
        // scale: 2,
        delay: 5,
        scrollTrigger:{
            trigger: ".sectionOne h2",
            start: 'center center',
            end: "+=2000",
            scrub: true,
            pin: true,
            toggleActions: 'play none none reverse',
            revese: true
        }
    })
},[])
    
    return <Container className='row'>
    {OurServices.map(service =>{
        const {name, icon, text} = service;
        return (
            <div className='service col-sm-12 col-md-4'>
            <div className='section ' >
                
            </div>
            <div className='section sectionOne' >
                <h2>Access a Range of</h2>
            </div>
            {/* <div className='section sectionOne' style={{backgroundImage: `url(${card1})`}}>
                <h2>Sports Wears</h2>
            </div> */}
            <div className='section sectionTwo' >
                <h2>Home Accessories</h2>
            </div>
            {/* <div className='section sectionThree' style={{backgroundImage: `url(${card2})`}}>
                
            </div> */}
            <div className='section sectionFour' >
                <h2>Gadgets</h2>
            </div>
        </div>
        )
    })}
    </Container>
}

export default Services