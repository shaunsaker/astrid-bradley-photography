import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableList = ({ items, renderItem, handleDragEnd }) => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(providedByDroppable) => (
          <div ref={providedByDroppable.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => {
                  const { isDragging } = snapshot;

                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      {renderItem(item, isDragging)}
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {providedByDroppable.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

DraggableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  renderItem: PropTypes.func,
  handleDragEnd: PropTypes.func,
};
DraggableList.defaultProps = {};

export default DraggableList;
