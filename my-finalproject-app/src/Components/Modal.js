import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';




function QuickEdit(props) {

    const { userId } = useAuth();

const {ticketList, urlEndPoint, setShouldRefresh, ticket,  } = props;  
    
    const [title, setTitle] = useState(ticket.title); 
    const [description, setDescription] = useState(ticket.description); 
    const [relatedTicketIds, setRelatedTicketIds] = useState(ticket.relatedTicketIds); 
    const [createdBy, setCreatedBy] = useState(ticket.createdBy); 
    const [comments, setComments] = useState(ticket.comments); 
    const [status, setStatus] = useState(ticket.status); 
    const [assignedToUserId, setAssignedToUserId] = useState(ticket.assignedToUserId) 
    const [organization, setOrganization] = useState(ticket.organization);
    
    const navigate = useNavigate();
    
const handleUpdateTicket1 = () => {
      
        setShouldRefresh(true);
        const req = {
          title: title,
          description: description,
          relatedTicketIds: relatedTicketIds,
          assignedToUserId: assignedToUserId,
          createdBy: createdBy,
          status: status,
          organization: organization,
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
    <div >
      <Card.Link style={{fontSize: "30px", fontWeight: 1000, color: 'blue'}} onClick={handleShow}>
      Title: {ticket.title}
      </Card.Link>
      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  closeButton>
        <Modal.Title>Quick Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
        <h1> Edit Ticket </h1>
          
          <Form>
          <FormGroup>
          <Form.Label>Title: </Form.Label>
          <Form.Control type="text" value={title} name="title" onChange={(e) => { setTitle(e.target.value) }} />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text"
               value={description}
               name="description"
               onChange={(e) => { setDescription(e.target.value) }} as="textarea" rows={3} />
          </FormGroup>
             <br/>
          <FormGroup>
          <Form.Label>RelatedTicketIds: </Form.Label>
          <Form.Control type="text"
             value={relatedTicketIds}
             name="relatedTicketIds"
             onChange={(e) => {
               setRelatedTicketIds(e.target.value);
             }} as="textarea" rows={3} />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>AssignedToUserId: </Form.Label>
          <Form.Control type="text" value={assignedToUserId}
             name="assignedToUserId"
             onChange={(e) => {
               setAssignedToUserId(e.target.value);
             }} as="textarea" rows={3} />
           </FormGroup>
           <br/>
           <FormGroup>
           <Form.Label>Created By: </Form.Label>
           <Form.Control type="text" value={createdBy}
             name="createdBy"
             onChange={(e) => { setCreatedBy(e.target.value) }} placeholder="Normal text" />
           </FormGroup>
           <br/>
           <FormGroup>
           <Form.Label>Status: </Form.Label>
           <Form.Select  onChange={(e) => { setStatus(e.target.value) }}>
           <option selected disabled>Select Status</option>
           <option value="Open-Unassigned">Open-Unassigned</option>
           <option value="Open-Assigned-In-Progress">Open-Assigned-In-Progress</option>
           <option value="Open-Assigned-Testing">Open-Assigned-Testing</option>
           <option value="Open-Assigned-Done">Open-Assigned-Done</option>
           <option value="Closed">Closed</option>
           </Form.Select>
           </FormGroup> 
           <br/>
           <FormGroup>
           <Form.Label>Organization: </Form.Label>
           <Form.Select  onChange={(e) => { setOrganization(e.target.value) }}>
           <option selected disabled>Select Organization</option>
           <option value="DevOps">DevOps</option>
           <option value="IT/Engineering">IT/Engineering</option>
           <option value="Project Management">Project Management</option>
           <option value="Quality Assurance">Quality Assurance</option>
           <option value="Human Resources">Human Resources</option>
           </Form.Select>
           </FormGroup> 
           <br/>
           <FormGroup>
           <Form.Label>Comments: </Form.Label>
           <Form.Control value={comments}
               name="comments"
               onChange={(e) => { setComments(e.target.value) }} as="textarea" rows={3} />
            </FormGroup>

            {/* <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group> */}
           </Form>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="success" onClick={() => {handleUpdateTicket1()
         }}>Update Ticket</Button>  
        </Modal.Footer>
      </Modal>
      </div>
  );
}


export default QuickEdit









/* <FormGroup>
           <Form.Label>Status: </Form.Label>
           <Form.Control type="text" value={status}
               name="status"
               onChange={(e) => {
                 setStatus(e.target.value);
               }} placeholder="Normal text" />
           </FormGroup> */


/* <h1> Edit Ticket </h1>
          
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
  <br/>  */











//{/* <Button variant="primary">Update</Button> */}

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