import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Hero, Services, Featured, Cta, Message} from '../components'

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Container = styled.div`
color: #222;
max-width: 100vw;
min-height: 100vh;
top: 4rem;
padding: 5rem 0;
bottom:4rem;
`

gsap.registerPlugin(ScrollTrigger)

const Home =()=>{


React.useEffect(() => {
  window.scrollTo(0, 0)
}, [])


    return <Container>
        <Hero />
        <Services />
        <Featured />
        <Cta />
        <Message />
    </Container>
}

export default Home