import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './component/card';
import CardInput from './component/cardInputs';

const App = () => {
    const cards = useSelector((state) => state.cards);
    const [showCardInput,setShowCardInput] = useState(false);

    
    return (
        <div className='flex flex-col items-center gap-4 bg-[#cd83a7] h-screen'>
            <button
        className='text-xl font-semibold italic gap-4 bg-[#CE94B0] w-[300px] rounded-xl p-2 hover:bg-[#dcadc4] text-white mx-[460px]'
        onClick={() => setShowCardInput(true)}
      >
        + Add a card
        {showCardInput &&  <CardInput />}
     </button>
           
            <div className='flex flex-row gap-4'>
                {cards.map((card, cardIndex) => (
                    <Card key={card.id} card={card} cardIndex={cardIndex} />
                ))}
            </div>
        </div>
    );
};

export default App;
