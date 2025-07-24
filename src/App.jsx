import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";




import TibbiBirimler from "./pages/tibbi-birimler";
import Hekimler from "./pages/hekimler";
import SaglikRehberi from "./pages/SaglikRehberi";
import HastaRehberi from "./pages/hasta-rehberi";
import DoktorDetay from "./pages/doktor-detay";
import Hakkimizda from "./pages/hakkimizda";
import SaglikDetay from "./pages/saglik-detay";
import HastaDetay from "./pages/hasta-detay";
import Anasayfa from "./pages/anasayfa";



function App() {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/tibbi-birimler" element={<TibbiBirimler />} />
          <Route path="/hekimler" element={<Hekimler />} />
          <Route path="/saglik-rehberi" element={<SaglikRehberi />} />
          <Route path="/hasta-rehberi" element={<HastaRehberi />} />
          <Route path="/doktor/:id" element={<DoktorDetay />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/saglik-rehberi/:slug" element={<SaglikDetay />} />
          <Route path="/hasta-rehberi/:id" element={<HastaDetay />} />
          <Route path="/anasayfa/" element={<Anasayfa />} />




        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
