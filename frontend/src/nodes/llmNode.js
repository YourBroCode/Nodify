//llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Bot } from "lucide-react";

export const LLMNode = ({ id }) => {

  return (
    <BaseNode
      id={id}
      nameLabel="Name:"
      nameValue="LLM"
      typeLabel="LLM"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: "66%" },
        },
        { type: "source", position: Position.Right, id: `${id}-response` },
      ]}
      icon={Bot}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
