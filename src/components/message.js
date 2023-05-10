import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {Form} from 'react-bootstrap';
import styled from 'styled-components';
import {ButtonComponent} from './index';

const Container = styled.div`

*{
  position: relative;
  z-index: 2;
}
width: 90%;
margin: 5rem auto;
margin-bottom: 0;
background: transparent
position: relative;
z-index: 2;

h4, h6{
  padding: 0.5rem 0;
  position: relative;
  z-index: 2;
  text-align: center;
  background: transparent;
  color: var(--text-color-1);
  font-family: 'Tangerine', "arial";
  color: var(--titles-color)
}
h4{
  font-size: 5rem;
}
h6{
  font-size: 3rem;
}
input, textarea{
  position: relative;
  z-index: 2;
  background: var(--background-color);
 
}
.form-input:focus{
  outline: 3px solid green
}
`

const Message =()=>{
const [state, handleSubmit] = useForm("xeqvewpe");

  if (state.succeeded) {
      return <Container>
    <h4 className='h4'>Send us a message</h4>
       <h6>We'd like to hear from you</h6>
      <p>Thanks for joining!</p>
        
    <Form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/xeqvewpe'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" name="email" className="form-input"/>
      <ValidationError prefix="Email" field="email"  errors={state.errors} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control type="textarea" placeholder="Your message" id="message" name="message"  as="textarea" rows={4} className="form-input"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
  </Form.Group>

  <ButtonComponent  type="submit" disabled={state.submitting} className="btn">
    Submit
  </ButtonComponent>
</Form>
</Container>
  }
  return (
      <Container>
      <div className='heading'>
      <h4 className='h4'>Send us a message</h4>
       <h6>We'd like to hear from you</h6>
       </div>
    <Form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/xeqvewpe' style={{background: "inherit"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" name="email" className="form-input"/>
      <ValidationError prefix="Email" field="email"  errors={state.errors} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control type="textarea" placeholder="Your message" id="message" name="message"  as="textarea" rows={4} className="form-input"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
  </Form.Group>

  <ButtonComponent  type="submit" disabled={state.submitting} className="btn">
    Submit
  </ButtonComponent>
</Form>
</Container>
  );
}
export default Message




