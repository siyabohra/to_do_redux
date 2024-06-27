import React from 'react';
import ListItem from './listItem';

const List = ({ list, listIndex, cardIndex }) => {
    return (
        <div className=' bg-[#e6c3d4da] p-2 rounded'>
            <ListItem list={list} listIndex={listIndex} cardIndex={cardIndex} />
        </div>
    );
};

export default List;
