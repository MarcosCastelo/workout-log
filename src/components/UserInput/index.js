import React from 'react';

import { InputField } from './styles';

export default function UserInput() {
  return (
    <InputField>
      <fieldset>
        <legend>Insert an item</legend>
        <input type="number" placeholder="Time Spent"/>
        <select name="exercise">
          <option value="swimming">Swimming</option>
        </select>
        <input type="date" className="date" />

        <button>Add</button>
      </fieldset>
    </InputField>
  );
}