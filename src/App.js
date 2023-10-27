import "./assets/style/main.scss";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import MenuComp from "./components/MenuComp";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <section>
      <Navbar />
      <Footer />
      <MenuComp/>
      <ProductCard/>
    </section>
  );
}

export default App;
