import PCard from "./PCard";
import '../styles/ListPCard.css';
import React, { useState } from 'react';



function ListPCard(posts) {
    //get all data
  const { list } = posts;
    //set visible cards at 8
    const [visibleCards, setVisibleCards] = useState(8);
  
    //handle show more
    const handleShowMore = () => {
      // Increases the number of cards to display by 4 with each click on the "more" button
      setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
    };

    //get number rest of cards
    const restOfCards = list.length - visibleCards;

  
    return (
      <div className="list-p-card">
        {list.slice(0, visibleCards).map((item, index) => (
           
          <PCard key={index}{...item} />
        ))}
        
        {list.length > visibleCards && (
          <button id="ButtonMore" onClick={handleShowMore}>More ({restOfCards}) </button>
        )}
      </div>
    );
  };
  
export default ListPCard;