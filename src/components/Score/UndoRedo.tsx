//import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsArrowClockwise } from 'react-icons/bs';
import styled from 'styled-components';

interface undoRedoProps {
  onUndo: ()=>void;
  onRedo: ()=>void;
}

const Header = styled.div`
  width: 100px;
`;

function UndoRedo(props: undoRedoProps): JSX.Element {
  return (
    <Header className="d-flex flex-row justify-content-between mx-auto my-2">
      <Button size="sm" onClick={props.onUndo}>
        <BsArrowCounterclockwise/>
      </Button>
      <Button size="sm" onClick={props.onRedo}>
        <BsArrowClockwise/>
      </Button>
    </Header>
  );
}

export default UndoRedo;