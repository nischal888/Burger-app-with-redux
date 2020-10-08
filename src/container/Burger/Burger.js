import React from "react";
import BurgerIngredients from "./component/BurgerIngredients";

export default class Burger extends React.Component {
  render() {
    //Object.keys(ingredients): This gives an array [salad,bacon,cheese,meat]
    //(ingredients[igKeys]) is equal to (ingredients is salad,bacon...and [igKeys] is its value i.e, 1,2)
    //[...Array(ingredients[igKeys])]: This gives an array like [undefined] since on salad...
    // we have value "1", similarly it maps through each keys like on cheese we will get 2 ...
    //[undefined][undefined ] array
    //
    const { ingredients } = this.props;
    let trasformIngredients =
      ingredients &&
      Object.keys(ingredients)
        .map((igKeys) => {
          return [...Array(ingredients[igKeys])].map((_, index) => {
            // this maps through each new array and...
            // return burger components lets say if we have value ...
            //2 on cheese it return 2 cheese burger component...
            return (
              <BurgerIngredients key={`${igKeys}_${index}`} type={igKeys} />
            );
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el);
        }, []);
    if (trasformIngredients && trasformIngredients.length === 0) {
      trasformIngredients = <p>Please Start Adding Ingredients.</p>;
    }
    return (
      <div className="Burger">
        <BurgerIngredients type="bread-top" />
        {trasformIngredients}
        <BurgerIngredients type="bread-bottom" />
      </div>
    );
  }
}
