import { Component } from "react";

class CardExtends extends Component {
  handleDelete = cardID => {
    let { cards } = this.state;
    cards = cards.filter(card => card._id !== cardID);
    this.setState({ cards });
  };
}

export default CardExtends;
