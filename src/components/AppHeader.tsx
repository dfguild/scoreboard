//import * as React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
  margin: .4rem 0px 0px 0px;
  padding: .2rem 0px;
  background: #2a49a0;
`;

interface setupBarProps {
  onReset: ()=>void;
  onSetup: ()=>void;
}

function AppHeader(props: setupBarProps): JSX.Element {
  return (
    <StyledHeader>
      <Button size="sm" onClick={props.onSetup}>Setup</Button>
      <Button size="sm" onClick={props.onReset}>Reset</Button>
    </StyledHeader>
  );
}

export default AppHeader;