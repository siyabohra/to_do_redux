import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveList } from '../feature/card/cardSlice';

const ItemTypes = {
    LIST: 'list',
};

const ListItem = ({ list, listIndex, cardIndex }) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: ItemTypes.LIST,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragCardIndex = item.cardIndex;
            const dragListIndex = item.listIndex;
            const hoverListIndex = listIndex;
            console.log(dragCardIndex,dragListIndex,hoverListIndex)

            // Avoid replacing the item with itself
            if (dragListIndex === hoverListIndex && dragCardIndex === cardIndex) {
                return;
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect();
             //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
              //The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
            const clientOffset = monitor.getClientOffset();
              // Returns the last recorded { x, y } client offset of the pointer while a drag operation is in progress
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Dragging downwards
            if (dragListIndex < hoverListIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Dragging upwards
            if (dragListIndex > hoverListIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            // Move the list item
            dispatch(moveList({
                sourceCardIndex: dragCardIndex,
                sourceListIndex: dragListIndex,
                targetCardIndex: cardIndex,
                targetListIndex: hoverListIndex
            }));
            item.cardIndex = cardIndex;
            item.listIndex = hoverListIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.LIST,
        item: { type: ItemTypes.LIST, cardIndex, listIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {list}
        </div>
    );
};

export default ListItem;
