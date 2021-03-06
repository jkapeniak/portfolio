import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
       <div>
           <Hero title={props.title }/>

           <Content>
               <p>
               Hello, my name is Julius. Im a Computer Science student with a minor in Statistics.
                   </p>
               
              <p>Im interested in using cutting edge technologies such as Computer Vision, Robotics, and Machine learning 
               algorithms to help improve life .</p> 
               
                <p>I have experience working with Java, JavaScript, C, Node JS, React, React Native, Tableau Prep, Tableau, and Docker.</p>
           </Content>
       </div> 
    );
}

export default AboutPage;