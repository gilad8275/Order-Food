import React from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "California",
    description: "Beef with Zuris sausages",
    price: 78,
  },
  {
    id: "m2",
    name: "London",
    description: "Beef and lamb with meat shredded on top",
    price: 80,
  },
  {
    id: "m3",
    name: "Tel-Aviv Yafo",
    description: "Beef with chicken and roasted cabbage",
    price: 75,
  },
  {
    id: "m4",
    name: "Classic",
    description: "Beef with classic vegetables",
    price: 62,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
