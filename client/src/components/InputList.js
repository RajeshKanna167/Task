import React, { Fragment, useState } from "react";



const InputList = () => {

    // hooks useState setting default value of an empty string to const 
    // descripe  is the state
    // setDescription is when state is changed
    // ("") -> is the default value
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address_info, setAddressInfo] = useState("");
    const [notes, setNotes] = useState("");

    // Submitting data
    const onSubmitForm = async(e) => {
        // preventing to refresh
        e.preventDefault();
        try {
            const body = {first_name, last_name, birth_date, phone_number, address_info, notes };
            // fetch request data
           
            // await for guess what? wait :)
            const response = await fetch("http://localhost:5000/list", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // Once onSubmit form is completed, refresh to the previous screen / -> home
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>

            <h1 className="text-center mt-3">Single Page Application CRUD </h1>
            {/* onSubmit constant on form */}
            <form className="mt-5" onSubmit={onSubmitForm}>
                {/* d-flex for elements being together & margin top 5 */}
                {/* I set the const in value. It shows the default value of state, which is "" empty string */}

                     <div class="form-group mx-sm-3 mb-2">            
                <input type="text" className="form-control" placeholder="First Name:" value={first_name} onChange={e => 
                    setFirstName(e.target.value)}/> </div>
                    
                    <div class="form-group mx-sm-3 mb-2">  
                <input type="text" className="form-control" placeholder="Last Name:" value={last_name} onChange={e => 
                    setLastName(e.target.value)}/> </div>

                <div class="form-group mx-sm-3 mb-2">  
                <input type="text" className="form-control" placeholder="Birth Date:" value={birth_date} onChange={e => 
                    setBirthDate(e.target.value)}/> </div>

                <div class="form-group mx-sm-3 mb-2">  
                <input type="text" className="form-control" placeholder="Phone Number:" value={phone_number} onChange={e => 
                    setPhoneNumber(e.target.value)}/> </div>

                <div class="form-group mx-sm-3 mb-2">  
                <input type="text" className="form-control" placeholder="Address:" value={address_info} onChange={e => 
                    setAddressInfo(e.target.value)}/> </div>

                 
                <div class="form-group mx-sm-3 mb-2">         
                <input type="text" className="form-control" placeholder="Notes:" value={notes} onChange={e => 
                    setNotes(e.target.value)}/> </div>
                    
                    {/* onChange gets the new input value and set on setDescription, changing the default value "" to the new value inserted on input field */}

                <center><button className="btn btn-success">Add</button></center>
            </form>
        </Fragment>
    )
}

export default InputList;