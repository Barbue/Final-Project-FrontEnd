import { useState } from "react";


function SearchBar(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");

    const handleOnSubmit = e => {
        e.preventDefault();
        //show filtered results, call to function in App.js 
        props.filterTickets(input, field);
    } 

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="search">Search: </label>
            <input 
                type="text" 
                id="search" 
                name="search"
                value={input}
                onChange={e => setInput(e.target.value)}
                />
            <button type="submit">
                Search
            </button>
                
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
            <label htmlFor="id">ID</label>
            <input 
                type="radio" 
                id="id" 
                name="id"
                value="id"
                onChange={e => setField(e.target.value)}
                checked={field === "id"}
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
            
        </form>
    );
}

export default SearchBar;