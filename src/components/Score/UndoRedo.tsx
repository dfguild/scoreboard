//import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsArrowClockwise } from 'react-icons/bs';

interface undoRedoProps {
  onUndo: ()=>void;
  onRedo: ()=>void;
}

function UndoRedo(props: undoRedoProps): JSX.Element {
  return (
    <div className="d-flex flex-row justify-content-around my-2 Setup-header">
      <Button size="sm" onClick={props.onUndo}>
        <BsArrowCounterclockwise/>
      </Button>
      <Button size="sm" onClick={props.onRedo}>
        <BsArrowClockwise/>
      </Button>
    </div>
  );
}

export default UndoRedo;