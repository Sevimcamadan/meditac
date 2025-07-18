import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import TibbiBirimler from "./pages/tibbi-birimler";
import Hekimler from "./pages/hekimler";
import SaglikRehberi from "./pages/saglik-rehberi";
import HastaRehberi from "./pages/hasta-rehberi";
import DoktorDetay from "./pages/doktor-detay";
import Hakkimizda from "./pages/hakkimizda";
import SaglikDetay from "./pages/saglik-detay";
import HastaDetay from "./pages/hasta-detay";




function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<div className="text-xl">Anasayfa</div>} />
          <Route path="/tibbi-birimler" element={<TibbiBirimler />} />
          <Route path="/hekimler" element={<Hekimler />} />
          <Route path="/saglik-rehberi" element={<SaglikRehberi />} />
          <Route path="/hasta-rehberi" element={<HastaRehberi />} />
          <Route path="/doktor/:id" element={<DoktorDetay />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/saglik-rehberi/:id" element={<SaglikDetay />} />
          <Route path="/hasta-rehberi/:id" element={<HastaDetay />} />




        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
