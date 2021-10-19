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
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>What do you fancy to eat today?</h1>
          <hr />
          <div className='row'>
            <Card
              image={margherita}
              name="Margherita"
              price={9.35} />
            <Card
              image={carciofi}
              name="Carciofi"
              price={9.00} />
            <Card
              image={perenoci}
              name="Pere e Noci"
              price={8.45} />
            <Card
              image={capricciosa}
              name="Capricciosa"
              price={9.00} />
            <Card
              image={capperi}
              name="Capperi e Acciughe"
              price={6.00} />
            <Card
              image={fruttimare}
              name="Frutti di Mare"
              price={7.45} />
            <Card
              image={patatine}
              name="Patatine e Wustell"
              price={9.00} />

            <Card
              image={quattrostagioni}
              name="Quattro Stagioni"
              price={9.45} />
            <Card
              image={pesto}
              name="Pesto Genovese"
              price={8.95} />
            <Card
              image={chili}
              name="Piccante"
              price={8.95} />
            <Card
              image={prosciutto}
              name="Prosciutto e Funghi"
              price={8.95} />
            <Card
              image={parmiggiana}
              name="Parmiggiana"
              price={8.95} />
          </div>
        </div>
      </>
    );
  }
}
export default App;
