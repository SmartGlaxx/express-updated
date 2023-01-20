import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAppContext} from '../contexts/context';
import {HeroButton} from './index';
import Carousel from 'react-bootstrap/Carousel';
import card1 from "../assets/hero-cards/card3.jpg";
import card2 from "../assets/hero-cards/card4.jpg";
import card3 from "../assets/hero-cards/card1.jpg";
import card4 from "../assets/hero-cards/card2.jpg";
import card5 from "../assets/hero-cards/card5.jpg";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Container = styled.div`
height: 90vh;
max-width: 100%;
overflow:hidden;

.images{
    background:none;
    display: flex;
    padding: 3rem;
    position: fixed;
    height: 50rem;
    zIndex: -1;
}
.hero-img{
    object-fit: cover;
    width: 13rem;
    box-shadow:
  0 1.6px 1.2px rgba(0, 0, 0, 0.015),
  0 3.4px 2.7px rgba(0, 0, 0, 0.022),
  0 5.8px 4.6px rgba(0, 0, 0, 0.027),
  0 8.7px 6.9px rgba(0, 0, 0, 0.031),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 17.7px 14.2px rgba(0, 0, 0, 0.039),
  0 25.1px 20.1px rgba(0, 0, 0, 0.043),
  0 36.5px 29.2px rgba(0, 0, 0, 0.048),
  0 56.3px 45px rgba(0, 0, 0, 0.055),
  0 100px 80px rgba(0, 0, 0, 0.07)
;

}



.img-one{
    position: absolute;
    animation: anim1 2s; 
    transform: translateY(5rem)
}
@keyframes anim1 {
    0%{transform:translateY(-15rem)}
    100%{transform:translateY(5rem)}
}
.img-two{
    position: absolute;
    animation: anim2 2.5s; 
    transform: translate(7rem, 3rem)
}
@keyframes anim2 {
    0%{transform:translateY(-15rem)}
    80%{transform:translateY(5rem)}
    100%{transform:translate(7rem, 3rem)}
}
.img-three{
    position: absolute;
    animation: anim3 3s; 
    transform: translate(-7rem, 1rem)
}
@keyframes anim3 {
    0%{transform:translateY(-15rem)}
    70%{transform:translateY(5rem)}
    100%{transform:translate(-7rem, 1rem)}
}
.img-four{
    position: absolute;
    animation: anim4 3.5s; 
    transform: translate(13rem, 7rem)
}
@keyframes anim4 {
    0%{transform:translateY(-15rem)}
    60%{transform:translateY(5rem)}
    100%{transform:translate(13rem, 7rem)}
}
.img-five{
    position: absolute;
    animation: anim5 4s; 
    transform: translate(-13rem, 7rem);
}
@keyframes anim5 {
    0%{transform:translateY(-15rem)}
    60%{transform:translateY(5rem)}
    100%{transform:translate(-13rem, 7rem)}
}
.tagline{
    color: var(--text-color-1);
    text-align: right;
    font-size: 4rem;
    font-weight: 600;
    padding: 10rem;
    padding-top: 13rem;
    background: none;
    visibility: hidden
}

.tagline-box{
    background: none;
    // background: rgba(40,40,120, 0.2);
    // background: none;
    // opacity: 0.3;
    width: 300px;
    // height: 20rem;
    // -webkit-background-clip:text;
  color:transparent;
}
.tagline-top, .tagline-bottom{
    background:none;
    // text-shadow: 2px 0px 0px green;
    -webkit-text-stroke: 1px var(--text-color-2);
    text-align: left;
    // background: var(--background-color-2);
    // -webkit-background-clip:text;
//   color:var(--text-color-2);
  color: var(--background-color-2);
//   opacity: 0.5
} 
.tagline-bottom{
    font-size: 1.5rem
}
.mobile-tagline{
    display:none;
}


@media screen and (max-width: 767px){
    .tagline{
        display:none;
    }
    .mobile-tagline{
        background:inherit;
        color: var(--text-color-1);
        display: block;
        font-size: 2rem;
        font-weight: 600;
        text-align: right;
        padding-top: 2rem;
        position:relative;
        padding-right: 2rem;
        z-index:1;
    }
    .mobile-tagline div{
        background:none;
    }
    .hero-img{
        width: 10rem
    }
    .images{
        height: 75vh;
        margin-top: -5rem;
        padding-bottom: 2rem;
        
    }
    .tagline-top, .tagline-bottom{
        text-align: right
    }
}

`

const Hero =()=>{

    const imageBoxRef = useRef(null)
    const tagBannerRef = useRef(null);
    const imageBox = useRef([])
    imageBox.current = []
    gsap.registerPlugin(ScrollTrigger)

    const imageRef = (imageItem)=>{
        if(!imageBox.current.includes(imageItem)){
            imageBox.current.push(imageItem);
        }
    }


    useEffect(()=>{
        let timeLine = gsap.timeline()
        imageBox.current.forEach(item =>{

            timeLine.from(item, {
                y: -800,

            })
            timeLine.to(item, {
                duration: 0.3,
                stagger: 0.1,
                y: 10,
                ease: "elastic"
            })
        })

        timeLine.fromTo(tagBannerRef.current, {
            x: 0,
            yoyo: true
        },{
            x:600,
            y: -75, 
            duration: 2,
            autoAlpha: 1,
            visibility: "visible",
            scale: 1.2,
            background:"radial-gradient(rgba(70,70,100,0.6),rgba(100,70,70,0.4))",
            boxShadow: "-14px 8px 47px 3px rgba(0,0,0,0.79)",
            webkitBoxShadow: "-14px 8px 47px 3px rgba(0,0,0,0.79)",
            backdropFilter: "blur( 1.5px )",
            webkitBackdropFilter: "blur( 1.5px )",
            mozBoxShadow: "-14px 8px 47px 3px rgba(0,0,0,0.79)",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
        })

        gsap.fromTo(tagBannerRef.current,{
            x: 600,
            rotationX:0,
            rotationY:0,
            rotationZ:0,
            translateY:0,
            yoyo:true,
            repeatDelay:5,
            },
            {
            x: -900,
            rotationX:180,
            rotationY:180,
            rotationZ:90,
            translateY:180,
            yoyo:true,
            repeatDelay:5,
            duration: 2,
            scrollTrigger:{
                trigger : ".tagline",
                start: 'bottom center',
                toggleActions: 'play none none reverse',
                revese: true
                }
        })

        gsap.to(imageBox.current,{
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger : ".tagline",
                start: 'bottom center',
                toggleActions: 'play none none reverse',
                revese: true
                }
        })        
    },[])

    return (<Container > 
    <div className='mobile-tagline'>
        <div className='tagline-box'>
        <div className='tagline-top'>Smart Express</div>
        <div className='tagline-bottom'>Your Shopping, <br/>Our Business</div>
        </div>
        <Link to='/shop'>
       <HeroButton>get started </HeroButton>
       </Link>
    </div>
    <div className='row' >
    <div className='images col-sm-12 col-md-6' ref={imageBoxRef} >
        <img src ={card5} alt='hero-img5' className='hero-img ' ref={imageRef}/>     
        <img src ={card4} alt='hero-img4' className='hero-img ' ref={imageRef}/>     
        <img src ={card3} alt='hero-img3' className='hero-img ' ref={imageRef}/> 
        <img src ={card2} alt='hero-img2' className='hero-img ' ref={imageRef}/>      
        <img src ={card1} alt='hero-img1' className='hero-img ' ref={imageRef}/>        
        <img src ={card5} alt='hero-img5' className='hero-img ' ref={imageRef}/>  
        <img src ={card4} alt='hero-img4' className='hero-img ' ref={imageRef}/>              
    </div>
    <div className='tagline col-sm-12 col-md-6' ref={tagBannerRef} >
        <div className='tagline-box'>   
            <div className='tagline-top'>Smart Express</div>
            <div className='tagline-bottom'>Your Shopping, <br/>Our Business</div>    
       </div>
       <Link to='/shop'>
       <HeroButton >get started </HeroButton>
       </Link>
    </div>
    </div>
    </Container>)
}

export default Hero