import React, { Fragment, useState } from "react";


// prop Data "(Data)"
const EditList = ( {list} ) => {
    
    const [first_name, setFirstName] = useState(list.first_name); // first name
    const [last_name, setLastName] = useState(list.last_name);    // last name
    const [birth_date, setBirthDate] = useState(list.birth_date);  // dob
    const [phone_number, setPhoneNumber] = useState(list.phone_number); // phonenumber
    const [address_info, setAddressInfo] = useState(list.address_info);  //address
    const [notes, setNotes] = useState(list.notes);  // notes 

    console.log(list);

    // edit description function
    // "e" so function doesn't refresh yet until code process is complete
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { first_name, last_name, birth_date, phone_number, address_info, notes };
            // response to the postman api
            const response = await fetch(`http://localhost:5000/list/${list.contact_id}`, {
                // making a put request
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        // console.log(response);
        // Window location shows up the message edited
        window.location = "/";

        } catch (err) {
            console.error(err.message);
        }
    } 
         // Edit data coding
    return (
        <Fragment>
        <div className="container">
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${list.contact_id}`}>
                Edit
            </button>

           
             <div className="modal" id={`id${list.contact_id}`} onClick={() => setFirstName(list.first_name)}> 
                <div className="modal-dialog">
                    <div className="modal-content">
                    
                        <div className="modal-header">
                            <h4 className="modal-title">Update Details</h4>
                           
                            <button type="button" className="close" data-dismiss="modal" onClick={() => setFirstName(list.first_name)}>&times;</button>
                        </div> 
                        
                         <div className="modal-body"> 
                            {/* form-control for handling data */}
                            {/* value for updating description  */}
                            <input type="text" className="form-control" value={first_name} onChange={e => setFirstName(e.target.value)} />
                            <input type="text" className="form-control" value={last_name} onChange={e => setLastName(e.target.value)} />
                            <input type="text" className="form-control" value={birth_date} onChange={e => setBirthDate(e.target.value)} />
                            <input type="text" className="form-control" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
                            <input type="text" className="form-control" value={address_info} onChange={e => setAddressInfo(e.target.value)} />
                            <input type="text" className="form-control" value={notes} onChange={e => setNotes(e.target.value)} />
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick = {e => updateDescription(e)}>Edit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setFirstName(list.first_name)}>Close</button>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>   
    </Fragment>
    );
}

export default EditList;