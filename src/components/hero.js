import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAppContext} from '../contexts/context';
import {HeroButton} from './index';
import heroImg from "../assets/hero-cards/hero-img.png";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Container = styled.div`
height: auto;
max-width: 100%;
overflow:hidden;

.images{
    background:none;
    width: 100vw;
    display: flex;
    padding: 3rem;
    // position: fixed;
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

.heroImg{
    z-index: 1;
    border-radius: 1rem
}

.img-one{
    position: absolute;
    // animation: anim1 2s; 
    transform: translateY(5rem)
}
@keyframes anim1 {
    0%{transform:translateY(-15rem)}
    100%{transform:translateY(5rem)}
}
.img-two{
    position: absolute;
    // animation: anim2 2.5s; 
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
    z-index: 2;
    font-family: 'Tangerine', "arial";
}

.tagline-box{
    background: none;
    // background: rgba(40,40,120, 0.2);
    // background: none;
    // opacity: 0.3;
    width: 100%;
    // height: 20rem;
    // -webkit-background-clip:text;
  color:transparent;
}
.tagline-top, .tagline-bottom{
    // background:none;
    z-index:2
    -webkit-text-stroke: 1px var(--text-color-2);
    text-align: left;
    color: var(--background-color-2);
    font-size: 5rem;
    font-family: 'Tangerine', "arial";
} 
.tagline-top{
    line-height: 3rem;
   
}
.tagline-bottom{
    font-size: 2rem;
    
}
.mobile-tagline{
    display:none;
}


@media screen and (max-width: 767px){
    .tagline{
        display:none;
    }
    .mobile-tagline{
        background:none;
        color: var(--text-color-1);
        display: block;
        font-size: 2rem;
        font-weight: 600;
        text-align: right;
        padding-top: 2rem;
        position:relative;
        padding-right: 2rem;
        z-index:2;
        float:right
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

@media screen and (max-width: 550px){
    .heroImg{        
       
    }
}

`

const Hero =()=>{

    return (<Container > 
    <div className='mobile-tagline col-sm-6 col-md-6'>
        <div className='tagline-box'>
        <div className='tagline-top'>Smart Express</div>
        <div className='tagline-bottom'>Your Shopping, <br/>Our Business</div>
        </div>
        <Link to='/shop'>
       <HeroButton>get started </HeroButton>
       </Link>
    </div>
    <div className='row' >
    <div className='images col-sm-6 col-md-6 col-lg-6'  >
        <img src ={heroImg} alt='hero-img5' className='heroImg ' />     
    </div>
    <div className='tagline col-sm-6 col-md-6'  >
        <div className='tagline-box'>   
            <div className='tagline-top'>Smart Express</div>
            <div className='tagline-bottom'>Your Shopping, Our Business</div>    
       </div>
       <Link to='/shop'>
       <HeroButton >get started </HeroButton>
       </Link>
    </div>
    </div>
    </Container>)
}

export default Hero