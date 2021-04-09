import React, { Component, useEffect } from 'react';

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
  }

  handleInput(value) {
    this.setState((prevState) => {
      const list = prevState.list.concat(value);
      const json = JSON.stringify(list);
      localStorage.setItem("list", json);
      return { list: list };
    });
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
        <UserInput handleInput={this.handleInput} />
        <ExerciseList entries={this.state.list} />
      </Container>
    );
  }
}

export default Layout;