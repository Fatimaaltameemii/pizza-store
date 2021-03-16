import PizzaList from "./components/PizzaList.js";
import Navbar from "./components/Navbar.js";
import Title from "./components/Title.js";
import { GlobalStyle } from "./Styles";
import { ThemeProvider } from "styled-components";
const theme = {
  mainColor: "#e78529c7",
  backgroundColor: "white",
};
function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Title />
        <PizzaList />
      </ThemeProvider>
    </div>
  );
}

export default App;
