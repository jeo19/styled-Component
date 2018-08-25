import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Button />
        <Button danger />
      </Fragment>
    );
  }
}
const Button = styled.button`
  border-radius: 20px;
  padding: 5px;
  min-width: 120px;
  color: white;
  border: block;
  font: weight 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? '#e67e22' : '#2ecc71')};
`;
export default App;
