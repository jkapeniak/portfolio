import React from 'react';

//import kandinsky from 'src/assets/kandinsky.PNG';
import javaApp from '../components/javaApp.png';

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
                    imgSrc: javaApp,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Java Swing Application',
                    subTitle: 'Gryphon Text Adventure Game',
                    imgSrc: javaApp,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: javaApp,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
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