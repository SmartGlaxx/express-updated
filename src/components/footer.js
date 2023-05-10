import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import appStore from '../assets/app-links/appStore.png'
import playStore from '../assets/app-links/playStore.png'
import {useAppContext} from '../contexts/context'
import card1 from '../assets/logo3.jpg'
import {Links} from '../utility/constants'
import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";

const Container = styled.div`
*{
    background: var(--background-color-2);
    
}
background: var(--background-color-2);
box-sizing: content-box;
color: var(--menu-color);
font-size: 0.8rem;
width: 100%;
height: auto;
position: relative;
margin-top: 8rem;
z-index: 1;

.inner-container{
    display: flex;
}
.logo{
    width: 3rem;
    heigth: 3rem;
    margin: 0 2rem
}
.img{
    border-radius: 50%;
    max-width: 6rem;
    margin: auto;
}
.img-container{
    display: flex;
    align-items: center;
    height: 6rem;
    width: 100%;
  
}
.div-0{
    padding: 2rem;
    width: 33.3%;
}
.div-1{
    text-align: center;
    padding: 2rem;
    width: 33.3%;
}
.div-2{
    padding: 2rem;
}

.app-links{
    width: 100%;
   
}
.app-img{
    margin-right:0.5rem;
    width: 7rem;
    margin-top: 10%;
}
.links{
    list-style-type: none
}
.linkItem{
    margin-top: 0.7rem;
    cursor: pointer
}
.link{
    color: var(--menu-color);
    text-decoration: none;
    font-size: 0.9rem;
    display: flex
}
.link-name{
    margin-left: 1rem 
}
h5{
    margin: 1rem 0;
    font-size: 3rem;
    font-family: 'Tangerine', "arial";
}
hr{
    background: var(--menu-color);
    height: 0.1px;
    opacity: 0.3;
    min-width: 15rem
}
.under-footer{
    text-align: center;
    padding-bottom: 1rem;
    font-size: 0.8rem
}
.designed-by, .copy{
    color : var(--text-color-4)
}
h6{
    font-size: 0.9rem
}

@media screen and (max-width: 800px){
    hr{min-width: 10rem}
}

@media screen and (max-width: 800px){
    hr{min-width: auto}
    .inner-container{display: block}
    .div-0, .div-1, .div-2{
        width: 100%;
        text-align: center
    }
}
@media screen and (max-width: 300px){
    h6{
        font-size: 0.8rem
    }
    .under-footer{
        font-size: 0.7rem
    }
}
`
const Footer =()=>{
    const {showMenu, showMenuBar, theme} = useAppContext()
    return <Container >
        <div className='inner-container'>
        <div className='div-0'>
        <img src={theme == "light" ? logo2 : logo1} alt="logo" className="logo"/>
            <hr />
            <div>Download our Mobile App</div>
            <p>Get closer and easier access to your 
            shopping using our mobile apps.</p>


                <div className='app-links'>
                    <img src = {appStore} alt='app-store' className='app-img'/>
                    <img src = {playStore} alt='play-store' className='app-img'/>
                </div>
            
        </div>            
        <div className='div-1'>
            <div className='img-container'>
            <img src={card1} alt='Smart Express Logo' className='img'/>
            </div>
            
            <h5>Smart Express</h5>
            <p>We offer a memorable experience.</p>
            <p>Get in touch: +1 778 751 4466</p>
        </div>
        <div className='div-2'>
            <h6>Site Navigation</h6>
            <ul className='links'>
            {Links.map(item =>{
                const { name, icon, link } = item
                return(
                    <li className='linkItem'>
                    <Link to = {link} className='link'>
                    {icon} <div className='link-name'>{name}</div>
                    </Link>
                    <hr />
                    </li>
                )
            })}
            </ul>
        </div>
        </div>
        <hr />
        <div className='under-footer'>
            <h6><span className='designed-by'>Designed by</span> Smart Egbuchulem</h6>
            <span className='copy'>Copyright &copy; {new Date().getFullYear()} SmartCodes</span>
        </div>
    </Container>
}

export default Footer