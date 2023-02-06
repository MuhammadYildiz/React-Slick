/* https://react-slick.neostack.com/docs/get-started */
/* https://react-slick.neostack.com/ */
/* 1- npm install react-slick --save
2- npm install slick-carousel --save
3- import "~slick-carousel/slick/slick.css"; 
4- import "~slick-carousel/slick/slick-theme.css"; */
import AutoPlay from "./components/AutoPlay";
import MultipleItems from "./components/MultipleItems";
import Resizable from "./components/Resizable";
import Responsive from "./components/Responsive";
import SingleItem from "./components/SingleItem";

function App() {
  return (
    <div>
      <SingleItem />
      <MultipleItems />
      <Responsive />
      <Resizable />
      <AutoPlay />
    </div>
  );
}

export default App;
