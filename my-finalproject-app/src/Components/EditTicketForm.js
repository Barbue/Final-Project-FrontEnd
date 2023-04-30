import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';

function EditTicketForm(props) {

  const { userId } = useAuth();

    const {ticketList, urlEndPoint, setShouldRefresh } = props;  
    console.log(ticketList)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [relatedTicketIds, setRelatedTicketIds] = useState(""); //[]
    const [creator, setCreator] = useState("");
    const [comments, setComments] = useState("");
    const [status, setStatus] = useState("");
    // const [createdById, setCreatedById] = useState("")
    // const [createdAt, setCreatedAt] = useState("")
    const [assignedToUserId, setAssignedToUserId] = useState("")
    // const [lastModified, setLastModified] = useState("")
    // const [lastUpdatedById, setLastUpdatedById] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(useParams())

    useEffect(() => {

        const foundTicket = ticketList.find((ticket) => {
          
        return ticket.createdById === id;
      });
       
        setTitle(foundTicket.title);
        setDescription(foundTicket.description);
        setRelatedTicketIds(foundTicket.relatedTicketIds);
        setAssignedToUserId(foundTicket.assignedToUserId);
        setCreator(foundTicket.creator);
        setStatus(foundTicket.status);
        setComments(foundTicket.comments);
        // setCreatedById(foundTicket.createdById);
        // setCreatedAt(foundTicket.createdAt);
        // setLastModified(foundTicket.lastModified);
        // setLastUpdatedById(foundTicket.lastUpdatedById);

}, [id, ticketList]);


const handleUpdateTicket = () => {
      
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
        const response = axios.put(`${urlEndPoint}/tickets/update-one/${id}`, req)
        .then(function (response) {
          console.log(response);
          setShouldRefresh(false);
        },{
        'Content-Type': 'application/json'
        })

        navigate("/");
       
      }
  
return (

<div>
          
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
           <Form.Label>Creator: </Form.Label>
           <Form.Control type="text" value={creator}
             name="creator"
             onChange={(e) => { setCreator(e.target.value) }} placeholder="Normal text" />
           </FormGroup>
           <br/>
           <FormGroup>
           <Form.Label>Status: </Form.Label>
           <Form.Control type="text" value={status}
               name="status"
               onChange={(e) => {
                 setStatus(e.target.value);
               }} placeholder="Normal text" />
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
           
            

          <br/>
          
          
   
            <Button variant="success" onClick={() => {handleUpdateTicket()
          }}>Update Ticket</Button>
            
             <br/>
             <br/>

</div>
);
}
  

export default EditTicketForm










// <label>Title: </label>
// <input
//     type="text"
//     value={title}
//     name="title"
//     onChange={(e) => { setTitle(e.target.value) }}
//   />
//   <br/>
//   <br/>

// {/* <p>Description: {ticket.description}</p> */}
// <label>Description: </label>
//    <textarea
//     type="text"
//     value={description}
//     name="description"
//     onChange={(e) => { setDescription(e.target.value) }}
//   />
//   <br/>
//   <br/>

// {/* <p>relatedTicketsIds: {ticket.relatedTicketsIds}</p> */}
// <label>RelatedTicketIds: </label>
//   <textarea
//   type="text"
//   value={relatedTicketIds}
//   name="relatedTicketIds"
//   onChange={(e) => {
//     setRelatedTicketIds(e.target.value);
//   }}
// />
// <br/>
// <br/>

// <label>AssignedToUserId: </label>
//   <input
//   type="text"
//   value={assignedToUserId}
//   name="assignedToUserId"
//   onChange={(e) => {
//     setAssignedToUserId(e.target.value);
//   }}
// />
// <br/>
// <br/>

// {/* <p>Creator: {ticket.creator}</p> */}
// <label>Creator: </label>
//   <input
//   type="text"
//   value={creator}
//   name="creator"
//   onChange={(e) => { setCreator(e.target.value) }}
// />
// <br/>
// <br/>

// {/* <p>Status: {ticket.status}</p> */}
// <label>Status: </label>
//   <input
//     type="text"
//     value={status}
//     name="status"
//     onChange={(e) => {
//       setStatus(e.target.value);
//     }}
//   />
//   <br/>
//   <br/>

// {/* <p>Comments: {ticket.comments}</p> */}
// <label>Comments: </label>
//   <textarea
//     type="text"
//     value={comments}
//     name="comments"
//     onChange={(e) => { setComments(e.target.value) }}
//   />
//   <br/>
//   <br/>





























{/* <p>Status: {ticket.createdById}</p> */}
           {/* <label>createdById: </label>
              <input
                type="text"
                value={createdById}
                name="createdById"
                onChange={(e) => { setCreatedById(e.target.value) }}
              /> */}
              {/* <br/>
              <br/> */}
            
           {/* <p>Status: {ticket.createdAt}</p> */}
           {/* <label>createdAt: </label>
              <input
                type="datetime-local"
                value={createdAt}
                name="createdAt"
                onChange={(e) => { setCreatedAt(e.target.value) }}
              /> */}
              {/* <br/>
              <br/> */}

            {/* <label>lastModified: </label>
              <input
                type="datetime-local"
                value={lastModified}
                name="lastModified"
                onChange={(e) => { setLastModified(e.target.value) }}
              /> */}
              {/* <br/>
              <br/> */}

            {/* <label>lastUpdatedById: </label>
              <input
                type="text"
                value={lastUpdatedById}
                name="lastUpdatedById"
                onChange={(e) => { setLastUpdatedById(e.target.value) }}
              /> */}
              {/* <br/>
              <br/> */}
             











///* <button onClick={() => { handleUpdateTicket() }}
// > Update Ticket
// </button> 

    // title: String,
    // description: String, 
    // relatedTicketIds:[String],
    // assignedToUserId: {type: String, default: uuidv4},
    // creator: String,
    // status: String,
    // comments: String,
    // createdById: {type: String, default: uuidv4},
    // createdAt: { type: Date, default: Date.now},
    // lastModified: { type: Date, default: Date.now},
    // lastUpdatedById: {type: String, default: uuidv4},


     /* <h2>Title: {ticketList.title}</h2> */
      //window.location.reload(true)