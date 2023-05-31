
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv } from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import {useState } from "react";

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {

  const [foodinput, setFoodInput] = useState("");
  const [meal , setMeal] = useState("breakfast"); 

  const [foodlist, setFoodList] = useState([]); 
  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  // const url = `https://api.edamam.com/search?q=${foodinput}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    await fetch(
      `https://api.edamam.com/search?q=${foodinput}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    ).then((res) => res.json()).then((data) => setFoodList(data.hits));
  }
 console.log(foodlist);
 return (
    <div>
   
      <Header setFoodInput={setFoodInput} setMeal={setMeal} getData={getData}/>

      {foodlist.length>0 ? (
        <div>
            <RecipeCard foodlist={foodlist}/>
          
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home