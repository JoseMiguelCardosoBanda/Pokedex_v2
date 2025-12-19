import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PokeContextProv from "./context/apiContext.jsx";
import TypeContextProv from "./context/typeContext.jsx";
import NumberContextProv from "./context/rangeContext.jsx";
import RegionContextProv from "./context/regionContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokeContextProv>
    <TypeContextProv>
      <NumberContextProv>
        <RegionContextProv>
          <App />
        </RegionContextProv>
      </NumberContextProv>
    </TypeContextProv>
  </PokeContextProv>
);
