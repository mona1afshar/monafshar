import banana from '../images/matcha/banana.png';
import classic from '../images/matcha/classic.png';
import strawberry from '../images/matcha/strawberry.png';
import rasberry from '../images/matcha/rasberry.jpg';
import blueberry from '../images/matcha/blueberry.png';
import mango from '../images/matcha/mango.png';

import '../css/recipes.css';
import React from "react";

const recipes = [
  { name: "Classic Matcha Latte", description: "The perfect ratio: 2g of premium ceremonial grade matcha, sifted and whisked with water, then poured over milk and lightly sweetened with agave syrup.", image: classic },
  { name: "Banana Cream Top", description: "A classic matcha latte base, topped with rich whipped cream blended with mashed banana and a touch of maple syrup for a naturally sweet, flavoured matcha", image: banana},
  { name: "Raspberry Matcha", description: "Fresh raspberries, gently mashed with a fork. Add a touch of sweetener if needed. Layer with ice, then pour your matcha latte over for a vibrant, fruity twist.", image: rasberry },
  { name: "Blueberry Matcha", description: "Take a handful of fresh blueberries and crush them with a fork to release their juices. Add a bit of sweetener if they’re more tart than sweet, then layer with ice and pour your matcha latte over for a subtly fruity, antioxidant-rich twist.", image: blueberry },
  { name: "Mango Matcha", description: "Mango matcha might just be the ultimate combo. Blend fresh or frozen mango until smooth, pour it into your cup, add ice, and top with your matcha latte for a tropical, creamy delight.", image: mango },
  { name: "Strawberry Matcha", description: "A classic flavour. Blend fresh strawberries with a touch of sweetener, then pour your matcha over for a beautifully balanced, fruity twist.", image: strawberry },
];

const Recipes = () => {
  return (
    <div className="recipes" id="recipes">
      <div className="recipes-section">
        <h2 className="recipes-title">MY GO-TO MATCHA COMBOS</h2>
        <div className="recipes-image-wrapper">
          <div className="recipes-grid">
              {recipes.map((recipes, i) => (
                <div className="recipes-image-card" key={i}>
                  <img src={recipes.image} alt={recipes.name} />
                  <div className="recipes-overlay">
                    <div className="top">
                      <h3>{recipes.name}</h3>
                    </div>
                    <div className="bottom">
                      <div className="location">
                        {recipes.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Recipes;
