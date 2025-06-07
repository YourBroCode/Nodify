import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Wrench } from "lucide-react";

export const ToolsRequestNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.toolName || id.replace("customToolsRequest_", "toolsRequest_")
  );
  const [toolType, setToolType] = useState(data?.toolType || "API");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setToolType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Tools Request"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={toolType}
      onTypeChange={handleTypeChange}
      typeOptions={["API", "Database", "File"]}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
      icon = {Wrench}
    />
  );
};
