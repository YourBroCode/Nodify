// draggableNode.js

export const DraggableNode = ({ type, label,icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
       
     className={` text-gray-600  border-[1px]  border-gray-300 rounded-lg min-w-24 min-h-20 gap-2 cursor-grab shadow-md bg-white flex items-center justify-center flex-col p-2 flex-wrap transition duration-200 ease-in-out transform hover:scale-105 
  hover:border-[#1C2536] hover:text-[#1C2536] hover:shadow-lg
  ${type}
`}

        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        {icon}
          <span>{label}</span>
      </div>
    );
  };
  