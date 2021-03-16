import pizza from "./pizza";
import PizzaItem from "./PizzaItem";
import { ListWrapper } from "../Styles";
const PizzaList = () => {
  const pizzalist = pizza.map((pizza) => (
    <PizzaItem pizzaitem={pizza} key={pizza.name} />
  ));
  return <ListWrapper>{pizzalist}</ListWrapper>;
};
export default PizzaList;
