import pizza from "./pizza";
import PizzaItem from "./PizzaItem";

const PizzaList = () => {
  return pizza.map((pizza) => <PizzaItem pizzaitem={pizza} key={pizza.name} />);
};
export default PizzaList;
