// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FileInputIcon } from 'lucide-react';

export const InputNode = ({ id, data }) => {
const [currName, setCurrName] = useState(data?.inputName || id);
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Input"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={inputType}
      onTypeChange={handleTypeChange}
      typeOptions={['Text', 'File']}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-output`,
      }]}
      icon={FileInputIcon}
    />
  );
};
