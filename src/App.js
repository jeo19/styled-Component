import React, { Component, Fragment } from 'react';
import styled, { injectGlobal, keyframes } from 'styled-components';
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
        <Button>Hello</Button>
        <Button danger rotationTime={5}>
          Hello
        </Button>
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
  ${props => {
    if (props.danger) {
      return `animation:${rotation} ${props.rotationTime}s linear infinite`;
    }
  }};
  `;
const Anchor = Button.withComponent('a').extend`
text-decoration:none
  `;
const rotation = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
  `;
export default App;
