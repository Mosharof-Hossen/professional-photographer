import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';
import { Button, Card } from 'react-bootstrap';

class CardFlip extends Component{
    constructor(props) {
      super(props);
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
        console.log(this.props.service)
        
        let { name, description, price, img } = this.props
        // console.log(name)
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
          <div className ="my-3">
            <Card style={{ width: '18rem' }} className = "shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src="https://image.winudf.com/v2/image1/Y29tLmNvdXBsZS5waWMuY291cGxlcGljLmNvdXBsZXBvc2UucGhvdG9zaGhvdC5jdXRlY291cGxlX3NjcmVlbl8wXzE1NjcyNzU0MjRfMDI0/screen-0.jpg?fakeurl=1&type=.jpg" />
                <Card.Body className="text-center">
                    <Card.Title style = {{color:"#3A4256"}}>{this.props.service.name}</Card.Title>
                    <Card.Text>
                        <small className="text-secondary">fsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</small>
                    </Card.Text>
                    <h3 className ="mb-3">Price:500tk/<sub>photo</sub></h3>
                    <Button style = {{color:"#3A4256"}} variant="primary">Go somewhere</Button>
                    <button onClick={this.handleClick}>Flip Card</button>
                </Card.Body>
            </Card>
        </div>


  
          <div style={{ width: '18rem' }}>
            <img
              style={{ width: '18rem' }}
              src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
            />
  
            <button onClick={this.handleClick}>Flip Card</button>
          </div>
        </ReactCardFlip>
      );
    }
  }

export default CardFlip;