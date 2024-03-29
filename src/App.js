import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import margherita from './images/pizzamargherita.jpeg';
import carciofi from './images/pizzacarciofi.jpeg';
import perenoci from './images/pizzaperenoci.jpeg';
import capperi from './images/pizzacapperi.jpeg';
import fruttimare from './images/pizzafruttimare.jpeg';
import patatine from './images/pizzapatatine.jpeg';
import quattrostagioni from './images/pizzaquattrostagioni.jpeg';
import pesto from './images/pizzapesto.jpeg';
import capricciosa from './images/pizzacapricciosa.jpeg';
import chili from './images/pizzachili.jpeg';
import prosciutto from './images/pizzaprosciutto.jpeg';
import parmiggiana from './images/pizzaparmiggiana.jpeg';


class App extends Component {
  state = {
    cards: [
      { id: 0, image: margherita, name: "Margherita", price: 7.55, quantity: 0 },
      { id: 1, image: carciofi, name: "Carciofi", price: 9.55, quantity: 0 },
      { id: 2, image: perenoci, name: "Pere & Noci", price: 8.45, quantity: 0 },
      { id: 3, image: capperi, name: "Capperi", price: 6.55, quantity: 0 },
      { id: 4, image: fruttimare, name: "Frutti Di Mare", price: 7.55, quantity: 0 },
      { id: 5, image: patatine, name: "Patatine & Wurstel", price: 9.55, quantity: 0 },
      { id: 6, image: quattrostagioni, name: "Quattro Stagioni", price: 7.95, quantity: 0 },
      { id: 7, image: pesto, name: "Pesto Genovese", price: 7.45, quantity: 0 },
      { id: 8, image: capricciosa, name: "Capricciosa", price: 7.55, quantity: 0 },
      { id: 9, image: chili, name: "Chili", price: 8.55, quantity: 0 },
      { id: 10, image: prosciutto, name: "Prosciutto", price: 5.95, quantity: 0 },
      { id: 11, image: parmiggiana, name: "Parmiggiana", price: 7.25, quantity: 0 }
    ]
  }

  handleDelete = cardId => {
    // const updatedCards = this.state.cards.filter(card => card.id !== cardId);
    // this.state.cards = updatedCards wrong way to update the state
    // this.setState({cards: updatedCards});

    //update state after you delete a card
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>What do you fancy to eat today?</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default App;
