import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { Board } from './styles';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }

    this.columns = [
      {
        field: 'time',
        headerName: 'Time',
        width: 130,
        valueGetter: (params) => `${params.getValue('time')}h`
      },
      { field: 'exercise', headerName: 'Exercise', width: 130 },
      { field: 'date', headerName: 'Date', width: 130 },
    ];
    this.getRows = this.getRows.bind(this);
  }

  getRows() {
    return this.props.entries;
  }


  componentDidCatch() {
    this.setState(this.props.entries);
    console.log(this.state)
  }

  render() {
    return (
      <Board>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableCell sortDirection="asc">Time</TableCell>
              <TableCell>Exercise</TableCell>
              <TableCell>Date</TableCell>
              <TableCell></TableCell>
            </TableHead>
            <TableBody>
              {this.props.entries.map((row) => (
                <TableRow key={row.id}>
                  <TableCell> {row.time}h</TableCell>
                  <TableCell>{row.exercise}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell><Button onClick={() => this.props.deleteItem(row.id)}><DeleteOutlineIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Board>
    );
  }
}

export default ExerciseList;