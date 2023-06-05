import React from 'react'
import { Button, Cards, MainContainer, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({foodlist}) => {
  const navigate = useNavigate();
  return (
    <div>
      <MainContainer>
    {foodlist.map((i, id) => {
      return (
        <Cards key={id}>
          <RecipeHeader>{i.recipe.label}</RecipeHeader>
          <RecipeImage src={i.recipe.image} />
          <Button onClick={() => navigate("/details", { state: { i } })}>
            Details
          </Button>
        </Cards>
      );}
    ) }
      </MainContainer> 
    </div>
  );
}

export default RecipeCard