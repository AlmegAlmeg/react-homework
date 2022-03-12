import React from "react";
import Card from "../common/Cards/card";
import PageHeader from "../common/pageHeader";
import { getCards } from "../../services/cardService";
import CardExtends from "../common/Cards/CardExtends";

class HomePage extends CardExtends {
  state = {
    cards: [],
    isMount: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCards();
      this.setState({ cards: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  renderCards = cards => {
    if (!cards.length) return <div>No Cards In The State Object...</div>;
    return cards.map((card, i) => (
      <Card key={i} card={card} handleDelete={this.handleDelete} />
    ));
  };

  render() {
    const cards = [...this.state.cards];
    // console.log(this.state.isMount); // Loader
    return (
      <React.Fragment>
        <PageHeader
          title="Business Card App"
          subTitle="Here you will find business cards"
        />
        <div className="container">
          <div className="row">{this.renderCards(cards)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
