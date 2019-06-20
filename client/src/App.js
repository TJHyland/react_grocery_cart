import React, { Component } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';
import { Container, } from "semantic-ui-react";
import axios from 'axios';

class App extends Component {
  state = { foods: [], }

  componentDidMount() {
    axios.get("/api/items")
    .then( res => {
      this.setState({ foods: res.data, });
    })
    .catch( err => {
      console.log(err);
    })  
  }

  addItem = (item) => {
    axios.post('/api/items', { item })
    .then( res => {
      const { foods } = this.state;
      this.setState({ foods: [...foods, res.data] });
    })
  }

  updateFood = (id) => {
    axios.put(`/api/items/${id}`)
    .then( res => {
      const foods = this.state.foods.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ foods, });
  })
  }

  deleteFood= (id) => {
    axios.delete(`/api/items/${id}`)
    .then( res => {
      const { foods } = this.state;
      this.setState({ foods: foods.filter(t => t.id !== id) })
    })
  }

  render() {
    const { id, name, price } = this.props
    return (
      <Container>
        <FoodForm addItem={this.addItem} />
        <br />
        <br />
        <FoodList
          foods={this.state.foods}
          updateFood={this.updateFood}
          deleteFood={this.deleteFood}
        />
      </Container>
    );
  }
}

export default App;
