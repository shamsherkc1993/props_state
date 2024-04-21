
import React, {useState} from 'react';
import './SingleCart.css';



let SingleCart = (props) => {
   
    let itemDetails = props.itemList;
    let itemDiscounts = itemDetails[0].discountDesc;
    const [newDisc, setNewDisc] = useState("");
    const [style, setStyle] = useState("light");


    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "light") setStyle("light");
        else setStyle("dark");
    };
    
    let clickHandler =  () => {
        // if (newDisc === "") {
        //     setNewDisc(itemDiscounts);
        // } else {
        //     setNewDisc("")
        // }

        (newDisc === "") ?
            setNewDisc(itemDiscounts) : setNewDisc("");

       
    
    }
   
    return (
        <div className='container'>
            <div className='row'>
                {itemDetails.map((singleItemDetail, index) => (
                    <div className='col-sm-4'>
                        <div className='main-container'>
                            <img src={singleItemDetail.imageUrl}></img>
                            <p>Item Name: {singleItemDetail.name}</p>
                            <p>price: {singleItemDetail.price} yen</p>
                            <p className='discount' onClick={clickHandler}>{singleItemDetail.discount}</p>
                            <button type="button" class="btn btn-success">Add to card</button>
                            <span className="st">{newDisc}</span>
                        </div>
                    </div>
                ))}
        </div>
      </div>

    );
}

export default SingleCart;