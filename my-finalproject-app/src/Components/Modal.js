import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import Card from 'react-bootstrap/Card';



function QuickEdit(props) {

    const { userId } = useAuth();

const {ticketList, urlEndPoint, setShouldRefresh, ticket,  } = props;  
    
    const [title, setTitle] = useState(ticket.title); //ticket.title
    const [description, setDescription] = useState(ticket.description); //ticket.description
    const [relatedTicketIds, setRelatedTicketIds] = useState(ticket.relatedTicketIds); //ticket.relatedTicketIds
    const [creator, setCreator] = useState(ticket.creator); //ticket.creator
    const [comments, setComments] = useState(ticket.comments); //ticket.comments
    const [status, setStatus] = useState(ticket.status); //ticket.status
    const [assignedToUserId, setAssignedToUserId] = useState(ticket.assignedToUserId) //ticket.assignedToUserId
    
    const navigate = useNavigate();
    // const { id } = useParams();
    // console.log(useParams())

    //  useEffect(() => {

      //   const foundTicket1 = ticket.find((ticket) => {
            
          
      //   return ticket.createdById === id;
      // });
      // console.log(foundTicket1)
      //   setTitle(foundTicket1.title);
      //   setDescription(foundTicket1.description);
      //   setRelatedTicketIds(foundTicket1.relatedTicketIds);
      //   setAssignedToUserId(foundTicket1.assignedToUserId);
      //   setCreator(foundTicket1.creator);
      //   setStatus(foundTicket1.status);
      //   setComments(foundTicket1.comments);
        // setCreatedById(foundTicket.createdById);
        // setCreatedAt(foundTicket.createdAt);
        // setLastModified(foundTicket.lastModified);
        // setLastUpdatedById(foundTicket.lastUpdatedById);

// }, [id, ticket]);



const handleUpdateTicket1 = () => {
      
        setShouldRefresh(true);
        const req = {
          title: title,
          description: description,
          relatedTicketIds: relatedTicketIds,
          assignedToUserId: assignedToUserId,
          creator: creator,
          status: status,
          comments: comments,
          lastModified: new Date(),
          lastUpdatedById: userId,

    } 
    
        const response = axios.put(`${urlEndPoint}/tickets/update-one/${ticket.createdById}`, req)
        .then(function (response) {
          console.log(response);
          setShouldRefresh(false);
        },{
        'Content-Type': 'application/json'
        })
        
      
        navigate("/");
       
      }







  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card.Link style={{fontSize: "30px", fontWeight: 1000, color: 'blue'}} onClick={handleShow}>
      Title: {ticket.title}
      </Card.Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Quick Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1> Edit Ticket </h1>
          
          <label>Title: </label>
           <input
               type="text"
               value={title}
               name="title"
               onChange={(e) => { setTitle(e.target.value) }}
             />
             <br/>
             <br/>
        
          
           <label>Description: </label>
              <textarea
               type="text"
               value={description}
               name="description"
               onChange={(e) => { setDescription(e.target.value) }}
             />
             <br/>
             <br/>

           
           <label>RelatedTicketIds: </label>
             <textarea
             type="text"
             value={relatedTicketIds}
             name="relatedTicketIds"
             onChange={(e) => {
               setRelatedTicketIds(e.target.value);
             }}
           />
           <br/>
           <br/>

          <label>AssignedToUserId: </label>
             <input
             type="text"
             value={assignedToUserId}
             name="assignedToUserId"
             onChange={(e) => {
               setAssignedToUserId(e.target.value);
             }}
           />
           <br/>
           <br/> 

      
           <label>Creator: </label>
             <input
             type="text"
             value={creator}
             name="creator"
             onChange={(e) => { setCreator(e.target.value) }}
           />
           <br/>
           <br/> 
         
          
           <label>Status: </label>
             <input
               type="text"
               value={status}
               name="status"
               onChange={(e) => {
                 setStatus(e.target.value);
               }}
             />
             <br/>
             <br/>
            
        
           <label>Comments: </label>
             <textarea
               type="text"
               value={comments}
               name="comments"
               onChange={(e) => { setComments(e.target.value) }}
             />
             <br/>
             <br/>
 
          
  
           
           
            <br/>
            <br/> 
             
 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Update</Button> */}
          <Button variant="success" onClick={() => {handleUpdateTicket1()
         }}>Update Ticket</Button>  
        </Modal.Footer>
      </Modal>
    </>
  );
}
//handleClose()

export default QuickEdit
//handleUpdateTicket()