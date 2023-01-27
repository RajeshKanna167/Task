import React, {Fragment, useEffect, useState} from "react";

// Importing from EditTodo component
import EditList from "./EditList";

const ListUser = () => {

    // const gets default value of an empty array
    const [list, setList] = useState([]);
    // todos inherit info from setTodos. Check the console.log(todos)

    // delete todo function
    const deleteUser = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/list/${id}`,{
                method: "DELETE"
            });

            // refreshing screen after deleting (spit out all todos with the exception of the "id" (from deleteTodo) deleted)
            // filter function refreshes after a condition. In this case "todo => todo.todo_id !== id"
            setList(list.filter(list => list.contact_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }


    const getList = async() => {
        try {

            //another fetch request
            const response = await fetch("http://localhost:5000/list")
            // parsing json data first
            const jsonData = await response.json()

            // empty array gets info data from backend converted into json data
            setList(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getList();
        // [] inserted, so fetch request shows up once and not a lot of times
    }, []);
    
    // console.log(Data); -> I can see the data on console
    return (
        <Fragment>
            {" "}
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
              
            {list.map(list => (
                // primary key from the database -> backend db file getting
                <tr key={list.contact_id}>
                    <td>{list.first_name}</td>
                    <td>{list.last_name}</td>
                    <td>{list.birth_date}</td>
                    <td>{list.phone_number}</td>
                    <td>{list.address_info}</td>
                    <td>{list.notes}</td>
                    <td>
                       {/* // edit the value in list value*/}
                        <EditList list = { list }/>  
                    </td>
                    <td>
                        <button className="btn btn-danger" 
                        // delete Data is a a function to specify what to delete. 
                        onClick={() => deleteUser(list.contact_id)}>Delete</button>
                    </td>
                </tr>
            ))}
             </tbody>
        </table>
        </Fragment>
    );
}

export default ListUser;