
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Common/Header";
import SingleCart from "./CartDetails/SingleCart";
import './Home.css';
import Footer from "./Common/Footer";
let Home = (props) => {

    let itemList = props.itemList;

    return (
        <>
            <h2>Today's Menu</h2>
            <SingleCart itemList = {itemList}/>
            <Footer />
        </>
    );
}

export default Home;