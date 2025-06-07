import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Mic } from "lucide-react";

export const AudioInputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace("customAudioInput_", "audioInput_"));
  const [inputType, setInputType] = useState(data?.inputType || "Microphone");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Audio Input"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={inputType}
      onTypeChange={handleTypeChange}
      typeOptions={["Microphone", "File"]}
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
      icon={Mic}
    />
  );
}