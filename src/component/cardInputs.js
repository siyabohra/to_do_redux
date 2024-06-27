import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../feature/card/cardSlice';

const CardInput = () => {
    const [newCardTitle, setNewCardTitle] = useState("");
    const dispatch = useDispatch();

    const handleNewCardTitleChange = (e) => {
        setNewCardTitle(e.target.value);
    };

    const handleAddCard = () => {
        if (newCardTitle.trim() !== "") {
            dispatch(addCard(newCardTitle));
            setNewCardTitle("");
        }
    };

    return (
        <div className='flex flex-col gap-2  bg-[#cfa1b7da] p-4 m-4 rounded-lg'>
            <input
                type='text'
                placeholder='Add card title'
                className='bg-[#cfa1b7da] text-white placeholder:text-white p-2 rounded-lg text-center text-[16px] border-slate-600	'
                value={newCardTitle}
                onChange={handleNewCardTitleChange}
            />
            <button
                className='bg-white text-black p-2 rounded-xl text-sm italic'
                onClick={handleAddCard}
            >
                Add Card
            </button>
        </div>
    );
};

export default CardInput;
