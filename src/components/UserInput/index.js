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

  notInFuture(date) {
    const dateArray = date.split('-');
    console.log(dateArray);
    const today = new Date();
    if (today.getFullYear < parseInt(dateArray[0])) {
      return false;
    }

    if (today.getMonth < parseInt(dateArray[1])) {
      return false;
    }

    if (today.getDate < parseInt(dateArray[2])) {
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    if (
      this._inputTime.value > 0 &&
      this._inputExercise.value &&
      this._inputDate.value &&
      this.notInFuture(this._inputDate.value)
    ) {
      var newExercise = {
        id: Date.now(),
        time: parseInt(this._inputTime.value),
        exercise: this._inputExercise.value,
        date: this._inputDate.value
      }
      this.props.handleInput(newExercise);
    }
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
              min="1"
              max="24"
              ref={(a) => this._inputTime = a}
            />
            <select name="exercise" ref={(a) => this._inputExercise = a}>
              {this.state.exercisesTypes.map((value) =>
                <option value={value}>{value}</option>
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