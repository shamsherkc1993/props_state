import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Common/Header';
import image1 from './Components/CartDetails/images/1.webp';
import image2 from './Components/CartDetails/images/2.png';
import image3 from './Components/CartDetails/images/3.png';
import image4 from './Components/CartDetails/images/4.webp';
import image5 from './Components/CartDetails/images/5.webp';
import image6 from './Components/CartDetails/images/6.webp';
import image7 from './Components/CartDetails/images/7.webp';
import image8 from './Components/CartDetails/images/8.webp';
import image9 from './Components/CartDetails/images/9.webp';
import image10 from './Components/CartDetails/images/10.webp';





function App() {
  let navTitles = ["Home", "About us", "Contact us"];
  const itemDetails = [
    {

        id : 1,
        imageUrl : image1,
        name : "butter pizza",
        price : 200,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"
    },

    {
        id : 2,
        imageUrl : image2,
        name : "chicken pizza",
        price : 100,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 3,
        imageUrl : image3,
        name : "American pizza",
        price : 140,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 4,
        imageUrl : image4,
        name : "spanish pizza",
        price : 130,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 5,
        imageUrl : image5,
        name : "cheese pizza",
        price : 80,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 6,
        imageUrl : image6,
        name : "sausage pizza",
        price : 90,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 7,
        imageUrl : image7,
        name : "biff pizza",
        price : 116,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 8,
        imageUrl : image8,
        name : "veg pizza",
        price : 80 ,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 9,
        imageUrl : image9,
        name : "Pork pizza",
        price : 110,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

    {
        id : 10,
        imageUrl : image10,
        name : "mixed pizza",
        price : 120,
        discount: "5%",
        discountDesc : "spent more than 1200 yen get discount 5%"

    },

];

  return (
    <>
    <Header navTitlesToChild = {navTitles}/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home navTitlesToChild = {navTitles} itemList = {itemDetails}/>} />
            <Route path='/about' element={<About navTitlesToChild = {navTitles}/>}/>
            <Route path='/contact' element={<Contact navTitlesToChild = {navTitles}/>}/>
            <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
