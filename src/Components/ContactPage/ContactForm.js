
import './ContactForm.css';
import React, { useState } from 'react';
let ContactForm = () => {

    const [enteredFname, setFname] = useState("");
    const [enteredLname, setLname] = useState("");
    const [enteenteredContact, setContact] = useState("");
    const [enteredComment, setComment] = useState("");

    const [allEntry, setAllEntry] =useState([]);


    let fNameChangeHandler = (e) => {
        setFname(e.target.value)
    }
    let lNameChangeHandler = (e) => {
        setLname(e.target.value)
        
    }
    let contactChangeHandler = (e) => {
        setContact(e.target.value)
        
    }
    let commentChangeHandler = (e) => {
        setComment(e.target.value)
        
    }

    let submitHandler = (e) => {
        e.preventDefault();
        const newEntry = {
            firstName : enteredFname,
            lastName : enteredLname, 
            number : enteenteredContact,
            comment : enteredComment

        }
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)


       
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h4>Please fill the form</h4>
                        <form onSubmit={ submitHandler }>
                            <input type="text" class="form-control form-control-lg" placeholder="First Name" onChange={fNameChangeHandler}/>
                            <input type="text" class="form-control form-control-lg" placeholder="Last name" onChange={lNameChangeHandler}/>
                            <input type="number" class="form-control form-control-lg" placeholder="Contact Number" onChange={contactChangeHandler}/>
                            <textarea class="form-control" rows="5" id="comment" placeholder="Comments" name="text" onChange={commentChangeHandler}></textarea>  
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-sm-3'>
                        <h4>See the entered form details</h4>
                        <label>First Name</label>
                        <p>{enteredFname}</p>
                        <label>LastName Name</label>
                        <p>{enteredLname}</p>
                        <label>Contact Number</label>
                        <p>{enteenteredContact}</p>
                        <label>Comments</label>
                        <p>{enteredComment}</p>

                    </div>
                    <div className='col-sm-3'>
                        <div>
                            {
                                allEntry.map((curElement) => {
                                    return (
                                         <div> 
                                            <h4>form final result person {curElement.id}</h4>
                                            <p>{curElement.firstName}</p>
                                            <p>{curElement.lastName}</p>
                                            <p>{curElement.number}</p>
                                            <p>{curElement.comment}</p>


                                         </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

            </div>
        </>
    );

}

export default ContactForm;