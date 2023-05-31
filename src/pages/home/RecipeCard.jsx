import React from 'react'
import { Button, Cards, MainContainer, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({foodlist}) => {
  const navigate = useNavigate();
  return (
    <div>
      <MainContainer>
    {foodlist.map(({recipe}, id) => {console.log(recipe);
      return (
        
        <Cards key={id}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image}/>
          <Button onClick={() => navigate(`/details`)}>Details</Button>
        </Cards>
      )}
    ) }
      </MainContainer> 
    </div>
  );
}

export default RecipeCard