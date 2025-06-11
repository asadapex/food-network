import Navbar from "./components/navbar";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/aboutus";
import Menu from "./components/menu";
import MenuItems from "./components/menu/MenuItems";

import foood from "./assets/foood.jpg";
import Banner from "./components/banner";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";

let MenuData = [
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 4,
  },
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 5,
  },
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 3,
  },
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 3,
  },
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 3,
  },
  {
    image: foood,
    title: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    stars: 3,
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
      <div className="flex justify-around mt-[50px] flex-wrap px-[100px] gap-[10px]">
        {MenuData.map((item, index) => (
          <MenuItems key={index} {...item} />
        ))}
        <button className=" mt-[20px] w-[142px] h-[42px] border-[1px] border-[#DC780B] rounded-[5px] text-[#DC780B]">
          Learn More
        </button>
      </div>
      <Banner />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
