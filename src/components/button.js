import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import {FaMinus} from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";



const Container = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--button-background-hover);
border: none;
float: right;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17);
  border-radius: 10rem;

:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
}
`
const HeroContainer = styled.button`
float: left;
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--button-background-hover);
border: none;
padding: 0.6rem 2rem;
margin: 1rem 0;
outline: none;
font-size: 1rem;
box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17);
  border-radius: 10rem;

:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
}
@media screen and (max-width: 767px){
  right: 1rem;
  position: absolute
}
`

const MiniContainer = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--text-color-2);
border: none;
float: right;
padding: 0.7rem 1.5rem;
outline: none;
font-size: 0.9rem;
box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17);
  border-radius: 10rem;
:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
    }
}
@media screen and (max-width: 767px){
    position: absolute;
    right: 1rem
    
}
`
const BuyBtnContainerList = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--text-color-2);
border: none;
float: right;
padding: 0.5rem 1.2rem;
outline: none;
margin-top: 1.3rem;
right: 0.5rem;
font-size: 0.9rem;
text-decoration:none;
border-radius: 10rem;
position: relative;
z-index: 1
 
:hover{
    text-decoration:none;
    background: var(--button-background-hover);
    color: var(--text-color-1);
    z-index: 2
}

}

`

const BuyBtnContainerGrid = styled.button`
cursor: pointer;
 text-transform: uppercase;
 background:  var(--button-background);
 color: var(--text-color-2);
 border: none;
 float: right;
 padding: 0.5rem 1.2rem;
 outline: none;
 font-size: 0.9rem;
 text-decoration:none;
 margin-top: -2rem;
 border-radius: 10rem;
 
:hover{
    text-decoration:none;
    background: var(--button-background-hover);
    color: var(--text-color-1);
    z-index: 2
}

}
`
const AuthBtnContainer = styled.button`
cursor: pointer;
font-weight: 400;
background:  var(--button-background);
color: var(--button-background-hover);
color: var(--menu-color);
border: none;
width: auto;
min-width: 7rem;
float: right;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;

:hover{
    background: var(--button-background-hover);
    background: var(--active-text-color-2);
    color:  var(--button-background);
    z-index: 2
}
`

const AuthBtnContainer2 = styled.button`
cursor: pointer;
text-transform: uppercase;
font-weight: 400;
background:  var(--button-background);
color: var(--button-background-hover);
color: var(--menu-color);
border: none;
margin: 2rem auto;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
border-radius: 10rem;
:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
}
`
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <AuthBtnContainer onClick={() => loginWithRedirect()}>
  Log In
  </AuthBtnContainer>;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <AuthBtnContainer onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </AuthBtnContainer>
  );
};




export const HeroButton =({children})=>{
    return <HeroContainer>{children}</HeroContainer>
}

export const ButtonComponent =({children})=>{
    return <Container>{children}</Container>
}

export const MiniButtonComponent =({children})=>{
    return <MiniContainer>{children}</MiniContainer>
}

export const BuyBtnComponentList =({children})=>{
    return <BuyBtnContainerList>{children}</BuyBtnContainerList>
}
export const BuyBtnComponentGrid =({children})=>{
    return <BuyBtnContainerGrid>{children}</BuyBtnContainerGrid>
}
export const AuthButton =({children})=>{
    return <AuthBtnContainer2>{children}</AuthBtnContainer2>
}



