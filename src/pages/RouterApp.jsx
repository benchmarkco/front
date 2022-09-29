import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index";
import TaxConvertion from "./TaxConvertion"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/tax" element={<TaxConvertion />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App