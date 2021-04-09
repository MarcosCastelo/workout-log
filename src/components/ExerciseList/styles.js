import styled from 'styled-components';

export const Board = styled.div`
  width: 800px;
  height: 500px;
  margin: auto;
  margin-top: 30px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  border: 1px solid gray;
  border-radius: 4px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    width: 230px;
    height: 30px;
    text-align: center;
  }

  td {
    height: 35px;
    text-align: center;
  }

`