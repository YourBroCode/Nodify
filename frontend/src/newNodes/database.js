//database

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Database } from "lucide-react";


export const DatabaseNode = ({ id, data }) => {

  const [currName, setCurrName] = useState(data?.dbName || id.replace("customDatabase-", "database_"));
  const [dbType, setDbType] = useState(data?.dbType || "SQL");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setDbType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Database"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={dbType}
      onTypeChange={handleTypeChange}
      typeOptions={["SQL", "NoSQL"]}
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
      icon={Database}
    />
  );
};