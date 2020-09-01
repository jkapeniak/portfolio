import React from 'react';


import Hero from '../components/Hero';
import Content from '../components/Content';


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