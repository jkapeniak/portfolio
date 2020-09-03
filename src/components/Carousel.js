import React from 'react';

//import kandinsky from 'src/assets/kandinsky.PNG';
import kandinsky from '../components/kandinsky.PNG';
import firebaseapp from '../components/firebase-RN.png';
import reactLogo from '../components/react-logo.png';
import swingLogo from '../components/swing.png'

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//import javaApp from '../assets/images/javaApp';

//import image from '../portfolio-site/build/logo512.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Kandinsky Mobile App',
                    subTitle: 'Ai Generated WallPapers',
                    imgSrc: kandinsky,
                    link: 'https://apps.apple.com/az/app/kandinsky-io-wallpapers/id1481018039',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Java Swing Application',
                    subTitle: 'Gryphon Text Adventure Game',
                    imgSrc: swingLogo,
                    link: 'https://github.com/jkapeniak/java-swing-game',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Firebase Application',
                    subTitle: 'React Native Application',
                    imgSrc: firebaseapp,
                    link: 'https://github.com/jkapeniak/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Portfolio Site',
                    subTitle: 'React  Application',
                    imgSrc: reactLogo,
                    link: 'https://github.com/jkapeniak/portfolio',
                    selected: false
                }
            
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}



export default Carousel;