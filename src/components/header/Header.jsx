import React from 'react';
import {HeaderContainer, MainHeader} from "./HeaderStyles";
import { FoodInput } from './HeaderStyles';
import { Button } from './HeaderStyles';
import { FormContainer } from './HeaderStyles';
import { Select } from './HeaderStyles';
const Header = ({setFoodInput, setMeal, getData}) => {

  const submit = (e) => {
  e.preventDefault();
getData();
  }

  return (
    <div>
      <HeaderContainer>
        <MainHeader> Food App</MainHeader>
        <FormContainer onSubmit={submit}>
          <FoodInput
            placeholder="Type"
            onChange={(e) => setFoodInput(e.target.value)}
          ></FoodInput>
          <Button>
            Search
          </Button>
          <Select onChange={(e) => setMeal(e.target.value)}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="teatime">Teatime</option>
          </Select>
        </FormContainer>
      </HeaderContainer>
    </div>
  );
}

export default Header