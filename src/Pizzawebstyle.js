import logo from "./pizzalogo.png";
import "./style.css";

export default function Pizzaweb() {
  return (
    <body className="background">
      <div>
        <div>
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
          <img className="Logosize" alt="pizzalogo" src={logo} />
        </div>
        <div className="background">
          <h1 style={{ textAlign: "center" }}>Welcome to Hola Pizza</h1>
          <h4 style={{ textAlign: "center" }}>ORDER NOW 🍕</h4>
        </div>
      </div>{" "}
    </body>
  );
}
