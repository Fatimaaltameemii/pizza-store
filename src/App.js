import PizzaList from "./components/PizzaList.js";
import Navbar from "./components/Navbar.js";
import Title from "./components/Title.js";
import { GlobalStyle } from "./Styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import SearchBar from "./components/SearchBar.js";
const theme = {
  light: { mainColor: "#e78529c7", backgroundColor: "white" },
  dark: { mainColor: "#e78529c7", backgroundColor: "black" },
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const modethemes = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Navbar />
        <button onClick={modethemes}>
          {currentTheme === "light" ? "dark" : "light"} Mode
        </button>
        <Title />
        <PizzaList />
      </ThemeProvider>
    </div>
  );
}

export default App;
