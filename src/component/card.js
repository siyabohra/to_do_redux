import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { addList, removeCard } from '../feature/card/cardSlice';
import List from './myList';

const Card = ({ card, cardIndex }) => {
    const [newList, setNewList] = useState("");
    const dispatch = useDispatch();

    const handleNewListChange = (e) => {
        setNewList(e.target.value);
    };

    const handleAddList = () => {
        if (newList.trim() !== "") {
            dispatch(addList({ cardIndex, newList }));
            setNewList("");
        }
    };

    return (
        <div className='w-[200px] bg-[#cfa1b7da]  rounded-md p-4 my-2 flex flex-col gap-4'>
            <div className='flex justify-between items-center border-b-2 '>
                <h4 className='text-black font-semibold italic text-center w-96'>{card.title}</h4>
                
            </div>
            <div className='flex flex-col gap-2 '>
                {card.lists.map((list, listIndex) => (
                    <List key={listIndex} list={list} listIndex={listIndex} cardIndex={cardIndex} />
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <input
                    type='text'
                    placeholder='Add list'
                    className='bg-[#cfa1b7da] text-white placeholder:text-white p-2 rounded-lg text-center text-[16px]  border-slate-600'
                    value={newList}
                    onChange={handleNewListChange}
                />
                <button
                    className='bg-white text-black p-2 rounded-xl text-sm italic border-slate-600'
                    onClick={handleAddList}
                >
                    Add to list
                </button>
                <button  className='text-[18px] mx-auto bg-white w-[100px] rounded-lg px-5 py-2 text-black ' onClick={() => dispatch(removeCard(cardIndex))}>
                   <p className='text-[14px] text-center'>remove</p> 
                </button>
            </div>
        </div>
    );
};

export default Card;
