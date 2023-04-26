import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reset from "../Components/Reset";


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

        // if(checked === null){  //Test if something was checked
        //     alert(checked_gender.value); //Alert the value of the checked.
        //     } else {
        //     alert('Nothing checked'); //Alert, nothing was checked.
        //     }

        

        

        

        
        

        

        
    } 

    // const handleReset = () => {
        
       
    // } 

    return (
        <form onSubmit={handleOnSubmit} >
            <label htmlFor="search">Search: </label>
            <input 
                type="text" 
                id="search" 
                name="search"
                value={input}
                onChange={e => setInput(e.target.value)}
                />
                
            <button type="submit" >
                Search
            </button>
            
            <Reset />

            {/* <button onClick={() => handleReset() }>
                Reset
            </button> */}
                
                {/* <br/> */}
                <br/>
            <label htmlFor="title">Title</label>
            <input 
                type="radio" 
                id="title" 
                name="title"
                value="title"
                onChange={e => setField(e.target.value)}
                checked={field === "title"}
                />
            
            <label htmlFor="creator">Creator</label>
            <input 
                type="radio" 
                id="creator" 
                name="creator"
                value="creator"
                onChange={e => setField(e.target.value)}
                checked={field === "creator"}
                />
            <label htmlFor="createdById">CreatedById</label>
            <input 
                type="radio" 
                id="createdById" 
                name="createdById"
                value="createdById"
                onChange={e => setField(e.target.value)}
                checked={field === "createdById"}
                />
            <label htmlFor="status">Status</label>
            <input
                type="radio"
                id="status"
                name="status"
                value="status"
                onChange={e => setField(e.target.value)}
                checked={field === "status"}
               
            
            />
            <label htmlFor="description">Description</label>
            <input
                type="radio"
                id="description"
                name="description"
                value="description"
                onChange={e => setField(e.target.value)}
                checked={field === "description"}
               
            
            />
            
        </form>

        
    );

    
        
}

export default SearchBar;