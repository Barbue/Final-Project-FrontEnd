import { useState } from "react";
import axios from 'axios';

const TicketCard = (props) => {

    const {ticket, urlEndPoint, setShouldRefresh } = props;
    console.log(ticket)
    const [title, setTitle] = useState(ticket.title);
    const [text, setText] = useState(ticket.text);
    const [creator, setCreator] = useState(ticket.creator);
    const [year, setYear] = useState(ticket.year);
   //const [creationdate, setCreationdate] = useState(ticket.creationdate);
    const [status, setStatus] = useState(ticket.status);
    const [isEditing, setIsEditing] = useState(false);

 
   
    const handleDeleteTicket = () => {
      const response = axios.delete(`${urlEndPoint}/tickets/delete-one/${ticket.id}`)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })

    }
    const handleUpdateTicket = () => {
      setShouldRefresh(true);
      const req = {
        title: title,
        text: text,
        creator: creator,
        year: year,
        status: status,
        
       
    } 
      const response = axios.put(`${urlEndPoint}/tickets/update-one/${ticket.id}`, req)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })
      setShouldRefresh(false);
    }

    return (
        <div>
        
          {!isEditing && <h2>Title: {ticket.title}</h2>}
          {isEditing && (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          )}
          {/* <br/> */}
          {!isEditing && <p>Text: {ticket.text}</p>}
          {isEditing && (
                    <>
            <textarea
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </>
          )}
          {/* <br/> */}

          {!isEditing && <p>Creator: {ticket.creator}</p>}
          {isEditing && (
            <input
            type="text"
            value={creator}
            onChange={(e) => {
              setCreator(e.target.value);
            }}
          />
          )}
           <br/> 
        
          {!isEditing && <p>Year: {ticket.year}</p>}
          {isEditing && (
            <input
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          )}  
           <br/>
          
          {!isEditing && <p>Status: {ticket.status}</p>}
          {isEditing && (
            <input
              type="text"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          )}
            
                   
           
          {/* <p>Is Complete: {blog.isComplete ? "Complete" : "Incomplete"}</p> */}
          <p>ID: {ticket.id}</p>
          <p>Creation Date: {ticket.creationdate}</p> 
          <p>Last Modified: {ticket.lastModified}</p> 



          {/* <p>
            Completed Date: {blog.completedDate && blog.completedDate.toString()}
          </p> */}
          {/* <button
            onClick={() => {
              handleSetToDoComplete();
            }}
          >
            Toggle Complete
          </button> */}
          <button onClick={() => {handleDeleteTicket();
          }}
          >
          Delete Ticket
          </button>
        
                {!isEditing && 
          <button 
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit Ticket
          </button>
                } 

                {isEditing && 
          <button
            onClick={() => {
              setIsEditing(false);
              handleUpdateTicket()
            }}
          >
            Update Ticket
          </button>
                }
                <br/>
                <br/>
        </div>
      );
}

export default TicketCard;
