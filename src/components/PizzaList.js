import pizza from "./pizza";
import PizzaItem from "./PizzaItem";
import { ListWrapper } from "../Styles";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

const PizzaList = () => {
  const [query, setQuery] = useState("");
  const pizzalist = pizza
    .filter((pizza) => pizza.name.toLowerCase().includes(query.toLowerCase()))
    .map((pizza) => <PizzaItem pizzaitem={pizza} key={pizza.name} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{pizzalist}</ListWrapper>
    </div>
  );
};
export default PizzaList;
