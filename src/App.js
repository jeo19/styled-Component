import React, { Component, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
injectGlobal`
body{
  padding:0px
  margin:0px
}
`;
class App extends Component {
  render() {
    return (
      <Container>
        <Button />
        <Button danger />
        <Anchor href="http://google.com">Go to google.com</Anchor>
      </Container>
    );
  }
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;
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
const Anchor = Button.withComponent('a').extend`
text-decoration:none
`;
export default App;
