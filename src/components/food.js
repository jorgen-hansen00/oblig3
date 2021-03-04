const Food = ({ food }) => (
    <ul>
      {food.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
  
  export default Food;