import { Home } from "./components/index/Home";
import {Routes, Route} from "react-router-dom"


export function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
  );

}