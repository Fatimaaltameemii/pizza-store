import "../style.css";
import { PizzaWrapper } from "../Styles";
function PizzaItem(props) {
  const pizzaa = props.pizzaitem;
  return (
    <PizzaWrapper>
      <img src={pizzaa.image} alt={"pizzaa.alt"} />
      <h3> - {pizzaa.name}</h3>
      <h4> - The price: {pizzaa.price}.00KD</h4>
      <h5> - The toppings: {pizzaa.toppings}</h5>
    </PizzaWrapper>
  );
}
export default PizzaItem;
