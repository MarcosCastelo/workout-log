import styled from 'styled-components';

export const Board = styled.div`
  width: 800px;
  height: 600px;
  margin: auto;
  margin-top: 15px;
  box-sizing: border-box;

  
  
  tr, td, th {
    border: 1px solid gray;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    height: 30px;
  }

  td {
    height: 35px;
    text-align: center;
  }
`