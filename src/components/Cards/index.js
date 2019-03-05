import React from 'react';
import SimpleCard from './SimpleCard';
import RecipeReviewCard from './RecipeReviewCard';

function Cards(){
  return (
    <div>
      <h1>Cards 卡片</h1>
      <h2>SimpleCard 简单卡片</h2>
      <SimpleCard />
      <h2>RecipeReviewCard 复杂交互</h2>
      <RecipeReviewCard />
    </div>
  )
}

export default Cards;