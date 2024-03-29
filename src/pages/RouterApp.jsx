import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index";
import TaxConvertion from "./TaxConvertion"
import MontecarloTasaCambio from "./MontecarloTasaCambio"
import PortfoliOptimization from "./PortfoliOptimization"
import TopContributors from "./TopContributors"
import Profile from "./Profile";
import Solutions from "./Solutions";
import Eviews from "./Eviews";
import BenchLearning from "./BenchLearning";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/front" element={<Index />}></Route>
        <Route path="/front/tax" element={<TaxConvertion />}></Route>
        <Route path="/front/contributors" element={<TopContributors />}></Route>
        <Route path="/front/portfolio" element={<PortfoliOptimization />}></Route>
        <Route path="/front/montecarlo" element={<MontecarloTasaCambio />}></Route>
        <Route path="/front/propuesta" element={<TaxConvertion />}></Route>
        <Route path="/front/profile" element={<Profile />}></Route>
        <Route path="/front/solutions" element={<Solutions />}></Route>
        <Route path="/front/eviews" element={<Eviews />}></Route>
        <Route path="/front/learning" element={< BenchLearning />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App