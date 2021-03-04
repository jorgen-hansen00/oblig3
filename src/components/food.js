const Food = ({ food }) => (
  <ul>
    {food.map((foods) => (
      <li key={foods}>{foods}</li>
    ))}
  </ul>
);

export default Food;