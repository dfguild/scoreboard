//import * as React from 'react';

interface undoRedoProps {
  onUndo: ()=>void;
  onRedo: ()=>void;
}

function UndoRedo(props: undoRedoProps): JSX.Element {
  return (
    <div>
      setup bar {props}
    </div>
  );
}

export default UndoRedo;