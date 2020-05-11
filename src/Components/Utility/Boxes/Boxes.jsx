import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class Boxes extends Component {
  state = {}
  render() {
    console.log(this.props);
    return (
      <Card>
        <Card.Header>Process Card</Card.Header>
        <Card.Body>
          <Card.Title>
            {this.props.cardData.process}
          </Card.Title>
          <Card.Text>
            {this.props.cardData.explanation}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Boxes;