import React, { Component } from 'react';

import { InputField } from './styles';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercisesTypes: [
        'Run',
        'Swimming',
        'Bike'
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    var newExercise = {
      key: Date.now(),
      time: this._inputTime.value,
      exercise: this._inputExercise.value,
      date: this._inputDate.value
    }

    this.props.handleInput(newExercise);
    console.log(newExercise);
    e.preventDefault();
  }

  render() {
    return (
      <InputField>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Insert an item</legend>
            <input
              type="number"
              placeholder="Time Spent"
              ref={(a) => this._inputTime = a}
            />
            <select name="exercise" ref={(a) => this._inputExercise = a}>
              {this.state.exercisesTypes.map((value) =>
                <option value={ value }>{ value }</option>
              )}
            </select>
            <input
              type="date"
              className="date"
              ref={(a) => this._inputDate = a}
            />

            <button type="submit">Add</button>
          </fieldset>
        </form>
      </InputField>
    );
  }
}

export default UserInput;