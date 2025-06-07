import { DraggableNode } from './draggableNode';
import {
  Database,
FileInputIcon,
  Bot,
  FileOutput,
  Text,
  Image,
  Mic,
  Wrench,
  WebhookIcon
} from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div className="flex flex-wrap gap-2.5 shadow-[0_8px_24px_rgba(149,157,165,0.2)] p-5 bg-white">
        <DraggableNode type="Input" label="Input" icon={<FileInputIcon size={18} />} />
        <DraggableNode type="llm" label="LLM" icon={<Bot size={18} />} />
        <DraggableNode type="customOutput" label="Output" icon={<FileOutput size={18} />} />
        <DraggableNode type="text" label="Text" icon={<Text size={18} />} />
        <DraggableNode type="Database" label="Database" icon={<Database size={18} />} />
        <DraggableNode type="imageAnalyzer" label="Image" icon={<Image size={18} />} />
        <DraggableNode type="audioInput" label="Audio" icon={<Mic size={18} />} />
        <DraggableNode type="APIRequest" label="API" icon={<WebhookIcon size={18} />} />
        <DraggableNode type="tools" label="Tools" icon={<Wrench size={18} />} />
      </div>
    </div>
  );
};
