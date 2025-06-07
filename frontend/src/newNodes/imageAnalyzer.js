import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Image } from "lucide-react";

export const ImageAnalyzerNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.analyzerName || id.replace("customImageAnalyzer_", "Image Analyzer_"));
  const [analyzerType, setAnalyzerType] = useState(data?.analyzerType || "Object Detection");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setAnalyzerType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      typeLabel="Image-Analyzer"
      nameLabel="Name:"
      nameValue={currName}
      onNameChange={handleNameChange}
      typeValue={analyzerType}
      onTypeChange={handleTypeChange}
      typeOptions={["Object Detection", "Image Classification", "Face Recognition"]}
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
      icon = {Image}
    />
  );
}