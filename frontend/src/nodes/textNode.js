// textNode.js

import { useEffect, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import TextareaAutosize from "react-textarea-autosize";
import { useStore } from "../store";
import { Text } from "lucide-react";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{Input}}");

  const nodes = useStore((s) => s.nodes);
  const onConnect = useStore((s) => s.onConnect);

 
  useEffect(() => {
    const matches = [...currText.matchAll(/{{(.*?)}}/g)];

    for (const match of matches) {
      const inputName = match[1];

      const sourceNode = nodes.find((node) => node.data?.id === inputName);

      const edgeId = `${sourceNode?.id}->${id}`;

      const alreadyConnected = useStore.getState().edges.some(
        (e) => e.id === edgeId
      );

      if (sourceNode && !alreadyConnected) {
        onConnect({
          id: edgeId,
          source: sourceNode.id,
          target: id,
          sourceHandle: `${sourceNode.id}-value`,
          targetHandle: `${id}-input`,
        });
      }
    }
  }, [currText, nodes, id, onConnect]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Text"
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
      icon={Text}
    >
      <TextareaAutosize
        value={currText}
        onChange={handleTextChange}
        minRows={1}
        maxRows={6}
        className="w-full resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:indigo-200"
      />
    </BaseNode>
  );
};
