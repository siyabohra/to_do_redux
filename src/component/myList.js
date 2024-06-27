import React from 'react';
import ListItem from './listItem';

const List = ({ list, listIndex, cardIndex }) => {
    return (
        <div className='bg-[#f0f0f0] p-2 rounded'>
            <ListItem list={list} listIndex={listIndex} cardIndex={cardIndex} />
        </div>
    );
};

export default List;
