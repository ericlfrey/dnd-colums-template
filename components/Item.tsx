import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

interface ItemProps {
  text: string;
  index: number;
}

export default function Item({ text, index }: ItemProps): React.ReactElement {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
}
