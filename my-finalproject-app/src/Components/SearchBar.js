import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reset from "../Components/Reset";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSearch } from "react-icons/vsc";



function SearchBar(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");
    const navigate = useNavigate();

    const {
        ticketList,
        
    } = props

    const handleOnSubmit = e => {
        e.preventDefault();
        
       
        //show filtered results, call to function in App.js 
        props.filterTickets(input, field);

        // setField("")
        // setInput("")
      
    } 

   

    // const handleReset = () => {
        
       
    // } 

    return (

         <>
         
         
        <Form onSubmit={handleOnSubmit}> 
        <FormGroup >
        <Form.Label htmlFor="search"><VscSearch/>Search: </Form.Label>
        <Form.Control  type="text" id="search" name="search" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </FormGroup>  
        <Form.Check
            inline
            label="Title"
            id="custom-switch"
            type="switch"
            value="title"
            checked={field === "title"}
            onChange={e => setField(e.target.value)}
            /> 
            <Form.Check
            inline
            label="Creator"
            id="custom-switch"
            type="switch"
            value="creator"
            checked={field === "creator"}
            onChange={e => setField(e.target.value)}
            /> 
            
            <Form.Check
            inline
            label="Status"
            id="custom-switch"
            type="switch"
            value="status"
            checked={field === "status"}
            onChange={e => setField(e.target.value)}
            /> 
        <Button   variant="primary" size="sm" type="submit">
            Search
        </Button> {"  "}
        <Button className='bsbutton2' variant="success" size="sm" onClick={() => {window.location.reload(true)}}>Reset</Button>
            
        {/* //<Reset /> */}

        </Form> 
        <br/>
        
        </> 
       
    );

    
        
}

export default SearchBar;











//{window.location.reload(true)


{/* <Form.Check
            inline
            label="CreatedById"
            id="custom-switch"
            type="switch"
            value="createdById"
            checked={field === "createdById"}
            onChange={e => setField(e.target.value)}
            />  */}




{/* </div>  */}
            {/* <Form.Check
            inline
            label="Description"
            id="custom-switch"
            type="switch"
            value="description"
            checked={field === "descr"}
            onChange={e => setField(e.target.value)}
            />  */}


 /* <form onSubmit={handleOnSubmit} > */
            /* <label htmlFor="search">Search: </label>
            <input 
                type="text" 
                id="search" 
                name="search"
                value={input}
                onChange={e => setInput(e.target.value)}
                /> */







// <form onSubmit={handleOnSubmit} >
// <label htmlFor="search">Search: </label>
// <input 
//     type="text" 
//     id="search" 
//     name="search"
//     value={input}
//     onChange={e => setInput(e.target.value)}
//     />
//     {" "}
    
///* <button type="submit" >
   // Search
//</button> */}

///* <Button variant="primary" size="sm" type="submit">
// Search
// </Button> {"  "}

// <Reset /> */}

//  <button onClick={() => handleReset() }>
//     Reset
// </button> 
    
//     //{/* <br/> */}
//     //{/* <br/>
    
//     <label htmlFor="title">Title</label>
// <input 
//     type="radio" 
//     id="title" 
//     name="title"
//     value="title"
//     onChange={e => setField(e.target.value)}
//     checked={field === "title"}
//     />

// <label htmlFor="creator">Creator</label>
// <input 
//     type="radio" 
//     id="creator" 
//     name="creator"
//     value="creator"
//     onChange={e => setField(e.target.value)}
//     checked={field === "creator"}
//     />
// <label htmlFor="createdById">CreatedById</label>
// <input 
//     type="radio" 
//     id="createdById" 
//     name="createdById"
//     value="createdById"
//     onChange={e => setField(e.target.value)}
//     checked={field === "createdById"}
//     />
// <label htmlFor="status">Status</label>
// <input
//     type="radio"
//     id="status"
//     name="status"
//     value="status"
//     onChange={e => setField(e.target.value)}
//     checked={field === "status"}
   

// />
// <label htmlFor="description">Description</label>
// <input
//     type="radio"
//     id="description"
//     name="description"
//     value="description"
//     onChange={e => setField(e.target.value)}
//     checked={field === "description"}
   

// />

// </form>


// );
 
