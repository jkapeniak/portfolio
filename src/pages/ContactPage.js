import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

function ContactPage(props){

    return(
       <div>
           <Hero title={props.title }/>

           <Content>
               <p>
               Hello</p>
           </Content>
       </div> 
    );
}
export default ContactPage;