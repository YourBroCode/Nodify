import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { WebhookIcon } from "lucide-react";

export const APIRequestNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.apiName || id.replace("customAPIRequest_", "apiRequest_"));
  const [requestType, setRequestType] = useState(data?.requestType || "GET");
  const [endpoint, setEndpoint] = useState(data?.endpoint || "");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setRequestType(e.target.value);
  };

  const handleEndpointChange = (e) => {
    setEndpoint(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="API Request"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={requestType}
      onTypeChange={handleTypeChange}
      typeOptions={["GET", "POST", "PUT", "DELETE"]}
      endpointValue={endpoint}
      onEndpointChange={handleEndpointChange}
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`,
        },
      ]}
      icon = {WebhookIcon}
    />
  );
}