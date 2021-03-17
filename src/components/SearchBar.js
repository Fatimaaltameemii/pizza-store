import { SearchBarStyled } from "../Styles";
const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for your fav Pizza"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
