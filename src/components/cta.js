import React from 'react';
import styled from 'styled-components'
import {ButtonComponent} from './index';
import { FaTruck } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import pic1 from "../assets/cta-pictures/cta.jpg";

const Container = styled.div`
background: none;
box-sizing: border-box;
height: 100vh;
padding: 1rem;
width: auto;
overflow: hidden;
margin-right: 0px;
overflow: hidden;

.cta-main{
    height: 100vh;
    position: relative;
    background: linear-gradient(to bottom, #f3f3f5, #ededef);
}
.cta-main:hover .cta-image{
    transform: scale(1.1);
    transition: all 0.7s
}
.cta-title{
    color: var(--titles-color);
    font-size: 7rem;
    font-family: 'Tangerine', "arial";
    height: auto;
    position: absolute;
    z-index: 2;
    text-align: right;
    top: 6rem;
    right: 3rem;
    line-height: 4rem;
    background: none;
}
.cta-button{
    position: absolute;
    z-index: 2;
    text-align: right;
    bottom: 10rem;
    right: 3rem;
    background: none
}
@media screen and (max-width: 440px){
    .cta-title{
        right: auto;
        width: calc(100vw - 2rem);
        margin: 0 auto;
        text-align: center;
        top: 3rem;
    }
    .cta-button{
        right: auto;
        margin-left: 50%;
        transform: translate(-50%);
        bottom: 5rem;
    }
}
.cta-image{
    height: 100vh;
    position: absolute;
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
    z-index: 0
}

.button{
    float: right
 }
@keyframes animate {
    0%{transform: translateX(-200%); width: 10px}
    100%{transform: translateX(100%); width: 6000px}
}
@media screen and (max-width:767px){
    Button{margin-top: 2rem}
    .truck{width: 60%; height: 22%}
}
@media screen and (max-width:500px){
    .truck{width: 50%; height: 18%}
}
` 

const Cta =()=>{
    
    return <Container>
    <div className='cta-main'>
        <img src={pic1} alt="cta image" className="cta-image"/>
        <div className="cta-title">
            Express Shopping
        </div>
        <div className="cta-button">
            <Link to= {`shop`} >
                <ButtonComponent>Shop Now</ButtonComponent>
            </Link>
        </div>
    </div> 
    </Container>
}

export default Cta