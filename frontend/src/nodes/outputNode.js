// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FileOutput } from 'lucide-react';

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };


  return (
    <BaseNode
      id={id}
      typeLabel="Output"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={outputType}
      onTypeChange={handleTypeChange}
      typeOptions={['Text', 'Image']}
      handles={[{
        type: 'target',
        position: Position.Left,
        id: `${id}-value`,
      }]}
      icon={FileOutput}
    />
  );
};
