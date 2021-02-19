import "./style.css";
function PizzaItem(props) {
  const pizzaa = props.pizzaitem;
  return (
    <body>
      <div>
        <img className="pic" src={pizzaa.image} alt={"pizzaa.alt"} />
        <h3> - {pizzaa.name}</h3>
        <h4> - The price: {pizzaa.price}.00KD</h4>
        <h5> - The toppings: {pizzaa.toppings}</h5>
        <h1>___________________________________________________</h1>
      </div>
    </body>
  );
}
export default PizzaItem;
