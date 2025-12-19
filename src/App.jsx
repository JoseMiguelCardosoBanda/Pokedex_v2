import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import RangeFilter from "./components/RangeFilter";
import TypeFilter from "./components/TypeFilter";
import { RegionHand } from "./context/regionContext";
import { TypeHand } from "./context/typeContext";
import "./styles/styles.css";
import "./styles/custom.css";

function App() {
  const { type, setType } = TypeHand();
  const { reg, setRegion } = RegionHand();

  return (
    <>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path={`/type-${type}`} element={<TypeFilter />}></Route>
            <Route path={`/region-${reg}`} element={<RangeFilter />}></Route>
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
