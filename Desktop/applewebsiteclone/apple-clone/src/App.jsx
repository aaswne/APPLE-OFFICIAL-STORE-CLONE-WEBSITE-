import "./App.css";

import Card from "./components/card/Card";
import Heading from "./components/heading/Heading";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { products, smallcard, db4, db5 } from "../url";
import Whitecard from "./components/whitecard/Whitecard";
import Quick from "./components/quicklink/Quick";
import Words from "./components/words/words";
import { data1, data2, data3, data4, data5 } from "./para";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Products />
      <Heading heading="The latest." span="All-new and lovable." />
      <Card url={products} />
      <Heading heading="Valentine’s Day. " span="Sweet gifts on short notice." />
      <Whitecard url={smallcard} />
      <Heading heading="Personalization." span=" Add a little extra heart." />
      <Whitecard url={db4} />
      <Heading
        heading="The Apple Store difference."
        span=" Even more ways to feel the love."
      />
      <Whitecard url={db5} isSmall />
      <Quick />
      <div className="legal-wrapper">
        <Words content={data1} />
        <Words content={data2} />
        <Words content={data3} />
        <Words content={data4} />
        <Words content={data5} />
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  );
}
 export default App


