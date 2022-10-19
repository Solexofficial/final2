import { nanoid } from 'nanoid';
import React from 'react';
import Draggable from 'react-draggable';
import fieldImg from '../../../../assets/img/scheduler/grid-area.png';

const fieldStyles = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${fieldImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
};
const draggableAreaStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  cursor: 'move',
  overflow: 'hidden',
};
const itemStyle = {
  maxWidth: '100px',
  pointerEvents: 'none',
};

const Field = ({ draggableItemsList, onSetPosition }) => {
  const handleDrag = (item, pos) => {
    const { id } = item;

    onSetPosition(id, {
      x: pos.x,
      y: pos.y,
    });
  };

  return (
    <div style={fieldStyles}>
      {draggableItemsList.map(item => (
        <Draggable
          onStop={(e, ui) => handleDrag(item, ui)}
          key={nanoid()}
          defaultPosition={item.pos ? item.pos : { x: 0, y: 0 }}
        >
          <div id={item.id} style={draggableAreaStyles}>
            <img src={item.src} alt={item.name} style={itemStyle} />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Field;
