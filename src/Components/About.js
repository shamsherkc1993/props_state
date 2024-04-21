import { useNavigate } from "react-router-dom";
import Footer from "./Common/Footer";

let About = (props) => {
    const navigate = useNavigate();
    const gotoContact = (props) =>{
        navigate("/contact");
    }

  let newNavTitle = props.navTitlesToChild[1];

    return (
        <>
        <h1>{newNavTitle}</h1>
        <button onClick={()=> gotoContact()}>go to contact page</button>
        <button onClick={()=> navigate(-1)}>go back</button>
        <Footer />


        </>
    );
}

export default About;