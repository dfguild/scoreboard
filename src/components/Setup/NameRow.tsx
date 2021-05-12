//import * as React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { BsXCircle } from 'react-icons/bs';

interface nameRowProps {
  name: string;
  onDelete: ()=>void; 
}

function NameRow(props: nameRowProps): JSX.Element {
  console.log('ExistingNameRow name=', props.name);
  return (
    <InputGroup size="sm" className="mb-3">
      <FormControl
        placeholder="player name"
        aria-label="Player's name"
        aria-describedby="basic-addon2"
        value={props.name}
        readOnly
      />
      <InputGroup.Append>
        <Button onClick={props.onDelete}>
          <BsXCircle />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default NameRow;