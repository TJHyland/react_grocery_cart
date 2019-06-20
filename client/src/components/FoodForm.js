import React from 'react';
import { Form, } from "semantic-ui-react";

class Foodform extends React.Component {
  state = { name: '', price: '' };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', price: '', })
  }

  render() {
    const { name, price } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Food"
          placeholder="Add a food and enter price below"
          required
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="price"
          placeholder="$0.00"
          required
          name='price'
          value={price}
          onChange={this.handleChange}
        />
         <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default Foodform