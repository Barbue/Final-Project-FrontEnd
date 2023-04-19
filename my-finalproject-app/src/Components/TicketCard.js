import { useState } from "react";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


const TicketCard = (props) => {

  const navigate = useNavigate();

    const {ticket, urlEndPoint, setShouldRefresh } = props;
    console.log(ticket)
    const [title, setTitle] = useState(ticket.title);
    const [description, setDescription] = useState(ticket.description);
    const [creator, setCreator] = useState(ticket.creator);
    const [comments, setComments] = useState(ticket.comments);
    const [status, setStatus] = useState(ticket.status);
    const [isEditing, setIsEditing] = useState(false);

    const reset = () => {
      setTitle("");
      setDescription("");
      setCreator("");
      setStatus("");
      setComments("");
    }

    // const onSubmit = (e) => {
    //   e.target.reset();
    // };

    

 
   
    const handleDeleteTicket = () => {

      setShouldRefresh(true)

     const response = axios.delete(`${urlEndPoint}/tickets/delete-one/${ticket.id}`)
      .then(function (response) {
        console.log(response);
      },{
      'Content-Type': 'application/json'
      })
      setShouldRefresh(false)
    }

    const handleUpdateTicket = () => {
      
      setShouldRefresh(true);
      const req = {
        title: title,
        description: description,
        creator: creator,
        status: status,
        comments: comments,
        
       
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
          <> 
          <h2>Title: {ticket.title}</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
           </>
            
          )}
          {/* <br/> */}
          {!isEditing && <p>Description: {ticket.description}</p>}
          {isEditing && (
            <> <p>Description: {ticket.description}</p>
                    
            <textarea
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
           </>
          )}
          {/* <br/> */}

          {!isEditing && <p>Creator: {ticket.creator}</p>}
          {isEditing && (
            <> <p>Creator: {ticket.creator}</p>
            <input
            type="text"
            value={creator}
            onChange={(e) => {
              setCreator(e.target.value);
            }}
          />
         </>
          )}
           {/* <br/>  */}
        
          {!isEditing && <p>Status: {ticket.status}</p>}
          {isEditing && ( 
            <> <p>Status: {ticket.status}</p>
            <input
              type="text"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
            </>
          )}
          {!isEditing && <p>Comments: {ticket.comments}</p>}
          {isEditing && ( 
            <> <p>Comments: {ticket.comments}</p>
            <textarea
              type="text"
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
              }}
            />

        
            </>
          )} 

           
            
                   
           
         
          <p>ID: {ticket.id}</p>
          <p>Creation Date: {ticket.createdAt.toString()}</p> 
          <p>Last Modified: {ticket.lastModified.toString()}</p> 



          
          <button onClick={() => {handleDeleteTicket();
          window.location.reload(true)
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
              reset()
              window.location.reload(true)
              
            }}
          >
            Update Ticket
          </button>
          }


          {/* <button
            onClick={() => {
            navigate("/ticketslist")
             
          }}
          >
            Cancel
          </button> */}
                


                


                <br/>
                <br/>
        </div>
      );
      
}


export default TicketCard;
