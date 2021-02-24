import React, { useState } from 'react';
import './styles.scss';
import ReactDOM from 'react-dom';

export default function App() {
  return (
    <div className="App">
    <MyComponent title="It Works" />
    <InputField />
    </div>
  )
}

function MyComponent(props) {
  return <title><h1>My First Component</h1>{props.title}</title>;
};

function FoodList(props) {
  const foods = props.foods;
  const listFoods = foods.map((food) =>
    <li key={food.toString()}>{food}</li>
  );
  return (
      <ul>{listFoods}</ul>
  );
}

const foods = ['Pizza', 'Hamburger', 'Coke'];
ReactDOM.render(
  <FoodList foods={foods} />,
  document.getElementById('root')
);

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Value of input field: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Button" />
      </form>
    );
  }
}