import React, {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import {Links} from "../utility/constants";
import {useAppContext} from '../contexts/context'
import {useUserContext} from '../contexts/userContext'
import { FaTimes, FaShoppingCart, FaLock, FaUserLock } from 'react-icons/fa';
import { ToggleMenu, LoginButton, LogoutButton } from './index';
import { useAuth0 } from "@auth0/auth0-react";
import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";


const Container = styled.div`
z-index: 12;
font-size: 0.9rem;
font-weight: 500;
*{
    background: inherit;
}
.header-menu{
    background: none;
    background: var(--menu-background);
}

.menu-title{
    position: absolute;
    font-size: 1.8rem;
    width: 3rem;
    top: 2rem;
    left: 0rem;
    background: var(--menu-background);
}
.menu-title-link{
    text-decoration: none;
    background: var(--menu-background);
}
h4{
    text-align:center;
    color: var(--h4-color);
}
.close-btn{
    right:0.4rem;
    top: 1rem;
    font-size: 1.8rem;
    position: absolute;
    background: transparent;
    color: #f44
}
.close-btn{
    color: b44
}
.main{
    height: 80%;
    width: 90%;
    margin: 20% 5%;
    padding: 1rem 0;
    background: var(--menu-inner-background);
    @media screen and (orientation: landscape){
        overflow: scroll;
    }
}
.sidebar-link{
    color: var(--menu-color);
    text-decoration:none;
    background: var(--menu-inner-background);
    margin-top:1rem;
    
}

.sidebar-linkItem{
     color: inherit;
     display: flex;
     align-items:center;
     padding: 0.5rem 0;
}
.menu-login-btn{
    padding: 0.3rem 1rem;
    border: none;
    outline: none;
    transition: all 2s
}
.menu-login-btn:active{
    outline: none;
    text-decoration: underline 
}
.sidebar-icon{
    color: var(--icon-color);
    margin: 0.3rem 0.6rem;
    color: inherit
}
hr{
    background: var(--menu-color);
    background: green
}

.user{
    background: none;
    color: var(--menu-color);
    font-weight: 700;
    width: auto;
    margin-top : 1rem;
    margin-left: 5%;
    text-align: left;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

.email{
    background: none;
    color: var(--menu-color);
    margin-top: 0.2rem;
    margin-left: 5%;
    font-weight: 400;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.sidebar-active{
	width: 95%;
    margin: 0 auto;
    margin-left:0;
    box-sizing:content-box;
    font-weight: bold;
    display:flex;
    align-items:center;
    border-radius: 0.2rem;
    color: var(--menu-background);
	background: var(--active-text-color-2);
}
`

const Sidebar =()=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {showMenuBar, hideMenu, theme} = useAppContext()
    const [sidebarUser, setSideBarUser] = useState({})

    const userAuthenticated = isAuthenticated && user
     let userName = ''
     if(userAuthenticated){
         if(user.given_name){
             userName = 'Hello ' + user.given_name
         }if(user.name){
             userName = 'Hello ' + user.name
         }else{
             userName = 'Invalid Authentication'
         }  
     }else{
         userName = ''
     } 

    let userEmail = ''
    if(userAuthenticated){
        if(user.email){
             userEmail = user.email 
         }else{
             userEmail = 'Email not available'
         }  
     }else{
         userEmail = ''
     }

    useEffect(() => {
        setSideBarUser(user)
    }, [])

    return (<Container className = {`${showMenuBar ? "show-menu menu" : "menu"}`}>
    <div className='header-menu'>
        <img src={theme == "light" ? logo2 : logo1} alt="logo" className="logo menu-title"/>
    </div>
    
    <ToggleMenu />
        <div className='user'>{userName}</div>
        
        <div className='email'>{userEmail}</div>
    
        <div className='main'>
            <div className='sidebar-links' >
            {Links.map((linkDetails,i )=>{
                const {name, link, icon} = linkDetails
                return (
                    <NavLink to={link} className='sidebar-link' exact activeClassName="sidebar-active">
                    <div className='sidebar-linkItem' key={i} onClick={hideMenu}>
                        <span className='sidebar-icon'>{icon}</span> {name}
                    </div>
                    </NavLink>
                )
            })}
            {
            isAuthenticated ? 
            <LogoutButton />
             :
             <LoginButton />
            }
           
            </div>
        </div>
    </Container>)
}

export default Sidebar
