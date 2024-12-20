// TODO
//var food = ['rice','beans'];
//var rice = 'rice';
// var beans = 'beans';
// const Item1 = () => (
//   <li>rice</li>
// );

// const Item2 = () => (
//   <li>beans</li>
// );
const { useState } = React;

const Grocery = (props) => {
  const [isBold, setIsBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
  };
  return (
    <li style = {style} onMouseEnter = {() => setIsBold(true)}>
      {props.food}
    </li>
  );
};
const Groceries = (props) => (
  <ul>
    {props.groceryItems.map((food) =>
      <Grocery food={food} />
    )}
  </ul>
);

const GroceryList = () => (
  <div>
  <h2>GroceryList </h2>
    <Groceries groceryItems={['rice','beans','tomato']} />
  </div>
);
ReactDOM.render(
  <GroceryList />,
  document.getElementById(
    'app'
  )
);