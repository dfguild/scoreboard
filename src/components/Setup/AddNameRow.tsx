import {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { BsPlusCircle } from 'react-icons/bs';

interface addNameRowProps {
  onAdd: (name: string)=>void; 
}

function AddNameRow(props: addNameRowProps): JSX.Element {
  const [name, setName] = useState('');

  function onAddName(){
    props.onAdd(name);
    setName('');
  }

  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <FormControl
          onChange={(event)=>setName(event.target.value)}
          onKeyPress={(event: React.KeyboardEvent) => {
            if (event.key === "Enter" && name != '') {
              onAddName();
            }
          }}
          placeholder="player name"
          aria-label="Player's name"
          aria-describedby="basic-addon2"
          value={name}
        />
        <InputGroup.Append>
          <Button
            variant="primary"
            onClick={onAddName}
            disabled={name == ''}
          >
            <BsPlusCircle/>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default AddNameRow;