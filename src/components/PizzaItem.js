import "../style.css";
import { PizzaWrapper } from "../Styles";
function PizzaItem(props) {
  const pizzaa = props.pizzaitem;
  return (
    <PizzaWrapper>
      <img
        src={pizzaa.image}
        alt={"pizzaa.alt"}
        onClick={() => alert(pizzaa.name)}
      />
      <h3> - {pizzaa.name}</h3>
      <h4> - The price: {pizzaa.price}.00KD</h4>
    </PizzaWrapper>
  );
}
export default PizzaItem;
