import { useState } from 'react';
import Title from '../components/typo/Title';
import ViewTitle from '../components/typo/ViewTitle';
import { weekDayMeals } from '../data';
import { WeekDayMeal } from '../models/WeekDayMeal';

export default function Meals() {
  const [meals, setMeals] = useState(weekDayMeals);

  function handleOnChangeLunch(meal: WeekDayMeal, value: string) {
    const updatedMeal: WeekDayMeal = {
      day: {
        name: meal.day.name,
        position: meal.day.position,
      },
      lunch: value,
      dinner: meal.dinner,
    };

    setMeals(
      meals.map((m) => {
        if (m.day.position === updatedMeal.day.position) {
          return updatedMeal;
        }
        return m;
      })
    );
  }

  function handleOnChangeDinner(meal: WeekDayMeal, value: string) {
    const updatedMeal: WeekDayMeal = {
      day: {
        name: meal.day.name,
        position: meal.day.position,
      },
      lunch: meal.lunch,
      dinner: value,
    };

    setMeals(
      meals.map((m) => {
        if (m.day.position === updatedMeal.day.position) {
          return updatedMeal;
        }
        return m;
      })
    );
  }

  return (
    <>
      <ViewTitle value="Meals" />
      <ul>
        {meals.map((dayMeal) => (
          <li key={dayMeal.day.position}>
            <Title value={dayMeal.day.name} />
            <input
              type="text"
              value={dayMeal.lunch}
              onChange={(e) => handleOnChangeLunch(dayMeal, e.target.value)}
            />
            <input
              type="text"
              value={dayMeal.dinner}
              onChange={(e) => handleOnChangeDinner(dayMeal, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button className="bg-emerald-400 text-white p-2 rounded hover:cursor-pointer">
          Save
        </button>
        <button className="bg-emerald-400 text-white p-2 rounded hover:cursor-pointer">
          Add Meal
        </button>
        <button className="bg-rose-600 text-white p-2 rounded hover:cursor-pointer">
          Cancel
        </button>
      </div>
    </>
  );
}
