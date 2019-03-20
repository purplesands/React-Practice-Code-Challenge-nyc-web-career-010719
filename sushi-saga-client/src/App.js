import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi:[],
    index:0,
    money:50
  }

  fetchSushi(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => this.setState({ sushis }))
  }

  componentDidMount(){
    this.fetchSushi()
  }

  nextFourSushi=()=>{
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex
    })
  }

  eatSushi=(id)=>{
    let sushis = this.state.sushis
    let eatenSushi = this.state.eatenSushi
    let lastEaten = sushis.find(sushi=>sushi.id===id)
    if (eatenSushi.find(sushi=>sushi.id===lastEaten.id)) {
      alert('already eaten!')
    } else if (this.state.money >= lastEaten.price) {
      let newMoney = this.state.money - lastEaten.price
      this.setState({
        eatenSushi: [...eatenSushi, lastEaten],
        money: newMoney
      })
    } else {
      alert('not enough money!!')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          index={this.state.index}
          nextFourSushi={this.nextFourSushi}
          sushis={this.state.sushis}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}/>
        <Table
        eatenSushi={this.state.eatenSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
