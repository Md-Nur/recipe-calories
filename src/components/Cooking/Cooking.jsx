import React, { useEffect, useState } from "react";

const Cooking = ({ cooks, preparing }) => {
  const [cookingTime, setCookingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    cooks.forEach((cook) => {
      setCookingTime(cookingTime + parseInt(cook.preparing_time));
      setTotalCalories(totalCalories + parseInt(cook.calories));
    });
  }, [cooks]);
  return (
    <div className="overflow-x-auto flex justify-center items-center">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            {preparing && <th></th>}
          </tr>
        </thead>
        <tbody>
          {cooks.map((cook, index) => (
            <tr key={index} className="bg-base-200">
              <th>{index + 1}</th>

              <td>{cook.recipe_name}</td>
              <td>{cook.preparing_time} minutes</td>
              <td>{cook.calories} calories</td>
              <td>
                {preparing && (
                  <button
                    onClick={() => preparing(cook)}
                    className="btn btn-success m-1"
                  >
                    Preparing
                  </button>
                )}
              </td>
            </tr>
          ))}
          {!preparing && (
            <tr>
              <td></td>
              <td></td>
              <td className="font-semibold">
                Total Time = {cookingTime + " "}
                minutes
              </td>
              <td className="font-semibold">
                Total Calories = {totalCalories + " "}
                calories
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cooking;
