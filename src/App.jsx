import Navbar from "./components/navbar";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/aboutus";
import Menu from "./components/menu";
import MenuItems from "./components/menu/MenuItems";

import { img } from "./assets/tabaka.jpg";

let MenuData = [
  {
    image: img,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 4,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Menu />
      {MenuData.map((item, index) => (
        <MenuItems key={index} {...item} />
      ))}
    </>
  );
}

export default App;
