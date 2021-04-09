import React, { Component } from 'react';

import { Container } from './styles';

import UserInput from '../UserInput';
import ExerciseList from '../ExerciseList';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }


    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    console.log('item');
    var filteredItems = this.state.list.filter(function (item) {
      return (item.key !== key);
    })

    this.setState({
      list:filteredItems
    })
  }

  handleInput(value) {
    this.setState((prevState) => {
      return { list: prevState.list.concat(value) };
    });
  }

  componentDidUpdate() {
    const json = JSON.stringify(this.state.list);
    localStorage.setItem("list", json);
  }

  componentDidMount() {
    const json = localStorage.getItem("list");
    const savedList = JSON.parse(json);
    if (savedList) {
      this.setState(() => {
        return { list: savedList };
      })
    }
  }
  render() {
    return (
      <Container>
        <UserInput 
          handleInput={this.handleInput} 
        />
        <ExerciseList 
          entries={this.state.list} 
          deleteItem={this.deleteItem}
        />
      </Container>
    );
  }
}

export default Layout;