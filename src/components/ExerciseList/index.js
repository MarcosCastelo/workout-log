import React, { Component } from 'react';

import { Board } from './styles';

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.renderSingleItem = this.renderSingleItem.bind(this);
  }

  

  renderSingleItem(item) {
    return (
      <tr key={item.key}>
        <td>{item.time}h</td>
        <td>{item.exercise}</td>
        <td>{item.date}</td>
        <td><button onClick={() => this.props.deleteItem(item.key)}>Delete</button></td>
      </tr>
    )
  }

  render() {
    var exerciseEntries = this.props.entries;
    console.log(exerciseEntries);
    var listExercises = exerciseEntries.map(this.renderSingleItem);

    return (
      <Board>
        <table>
          <tr>
            <th>Time</th>
            <th>Exercise Type</th>
            <th>Date</th>
            <th></th>
          </tr>
          {listExercises}
        </table>
      </Board>
    );
  }
}

export default ExerciseList;