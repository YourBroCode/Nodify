import { useState } from "react";
import { Handle } from "reactflow";
import { GripVertical } from "lucide-react";

export const BaseNode = ({
  id,
  typeLabel,
  nameLabel,
  nameValue,
  onNameChange,
  typeValue,
  onTypeChange,
  typeOptions = [],
  handles = [],
  children,
  icon: Icon = GripVertical,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  return (
    <div
      onClick={() => setSelectedNodeId(id)}
      className={`relative w-56 bg-white border rounded-xl shadow-md font-sans text-sm text-slate-900 p-3 space-y-3
        ${selectedNodeId === id ? "border-2 border-purple-300" : "border border-slate-300"}
      `}
    >
      {handles.map((handle, idx) => (
        <Handle
          key={idx}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          className="!w-3 !h-3 !bg-blue-500 !border-white !border rounded-full"
          style={{ ...handle.style }}
        />
      ))}

      {typeLabel && (
        <div className="flex items-center justify-between text-slate-800 font-semibold text-sm">
          <span>{typeLabel}</span>
         <Icon className="w-5 h-5 text-[#1C2536]" />
        </div>
      )}

      {nameLabel && (
        <div>
          <label className="block text-xs text-slate-500 mb-1">{nameLabel}</label>
          <input
            type="text"
            value={nameValue}
            onChange={onNameChange}
            className="w-full px-2 py-1 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:purple-500"
          />
        </div>
      )}

      {typeOptions.length > 0 && (
        <div>
          <label className="block text-xs text-slate-500 mb-1">Type</label>
          <select
            value={typeValue}
            onChange={onTypeChange}
            className="w-full px-2 py-1 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {typeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {children && <div>{children}</div>}
    </div>
  );
};
