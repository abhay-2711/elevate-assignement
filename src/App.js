import "./App.css";
import BannerMain from "./components/BannerMain/BannerMain";
import Electronic from "./components/Electronic/Electronic";
import Fashion from "./components/Fashion/Fashion";
import Footer from "./components/Footer/Footer";
import Jewellery from "./components/Jewellery/Jewellery";

function App() {
  return (
    <div>
      <BannerMain />
      <Fashion />
      <Electronic />
      <Jewellery />
      <Footer />
    </div>
  );
}

export default App;
