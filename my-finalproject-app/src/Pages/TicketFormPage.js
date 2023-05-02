import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSaveAs } from 'react-icons/vsc';

const TicketFormPage = (props) => {

	//const auth = useAuth()
	//instantiate navigator 
	const navigate = useNavigate();
	
   const { setShouldRefresh, urlEndPoint } = props;
   const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [relatedTicketIds, setRelatedTicketIds] = useState([])
	const [assignedToUserId, setAssignedToUserId] = useState("")
	const [createdBy, setCreatedBy] = useState("")
   const [comments, setComments] = useState("")
   const [status, setStatus] = useState("")
   const [organization, setOrganization] = useState("");
    

const handleCreateTicket = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            title: title,
            description: description,
			   relatedTicketIds: relatedTicketIds,
			   assignedToUserId: assignedToUserId,
            createdBy: createdBy,
            status: status,
            organization: organization,
            comments: comments,
		}
		
        console.log(req);
        axios.post(`${urlEndPoint}/tickets/create-one`, req)
          .then(function (response) {
            console.log(response);
			// place set setShouldRefresh(false) after .then
			setShouldRefresh(false);
          },{
			'Content-Type': 'application/json'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

	}

return (

<div>
          <br/>
		   <h1>Ticket Creation Form <VscSaveAs /></h1>
			 <br/>

		   <Form>
		   <FormGroup>
         <Form.Label>Title: </Form.Label>
         <Form.Control type="text" onChange={(e) => { setTitle(e.target.value) }} />
         </FormGroup>
          <br/> 
          <FormGroup>
          <Form.Label>Description: </Form.Label>
          <Form.Control type="text" onChange={(e) => { setDescription(e.target.value) }} as="textarea" rows={3} />
          </FormGroup>
          <br/>
		   <FormGroup>
          <Form.Label>RelatedTicketIds: </Form.Label>
          <Form.Control type="text" onChange={(e) => {
               setRelatedTicketIds(e.target.value);
             }} as="textarea" rows={3} />
         </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>AssignedToUserId: </Form.Label>
          <Form.Control type="text" onChange={(e) => {
               setAssignedToUserId(e.target.value);
             }} as="textarea" rows={3} />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Created By: </Form.Label>
          <Form.Control type="text" onChange={(e) => { setCreatedBy(e.target.value) }}  />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Status: </Form.Label>
          <Form.Select  onChange={(e) => { setStatus(e.target.value) }}>
          <option selected disabled>Select Status</option>
          <option value="Unassigned">Unassigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Testing">Testing</option>
          <option value="Done">Done</option>
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
          <Form.Control onChange={(e) => { setComments(e.target.value) }} as="textarea" rows={3} />
          </FormGroup>
		    </Form>
		    <br/>
<Button variant="success" onClick={() => { handleCreateTicket(); 
   navigate("/") } }>Create Ticket</Button>
{" "}
<Button variant="success" onClick={() => { navigate("/")} }>Cancel</Button>

</div>
)
};

export default TicketFormPage



























//const [createdAt, setCreatedAt] = useState("")
   //const [lastModified, setLastModified] = useState("")


// createdById: createdById,
			// createdAt: createdAt,
			// lastModified: lastModified,
			// lastUpdatedById: lastUpdatedById,

//const [createdById, setCreatedById] = useState("")
//const [lastUpdatedById, setLastUpdatedById] = useState("")

/* <FormGroup>
          <Form.Label>Status: </Form.Label>
          <Form.Control type="text" onChange={(e) => {
                 setStatus(e.target.value);
               }} />
          </FormGroup> */



 //name="organization" id="organization"
 // <Form.Control as="select" name="organization" onChange={(e) => { setOrganization(e.target.value) }}  />  */}

// <br/>
/* <h1>Ticket Creation Form</h1>
<br/>


<label>Title:</label>
<input type="text" onChange={(e)=>{
   setTitle(e.target.value)
}} />

<br/>
<br/> 

<label>Description:</label>
<textarea type="text" onChange={(e)=>{
   setDescription(e.target.value)
}} />

<br/>
<br/>

<label>relatedTicketIds:</label>
<textarea type="text" onChange={(e)=>{
   setRelatedTicketIds(e.target.value)
}} />

<br/>
<br/>

<label>AssignedToUserId:</label>
<textarea type="text" onChange={(e)=>{
   setAssignedToUserId(e.target.value)
}} />

<br/>
<br/>

<label>Creator:</label>
<input type="text" onChange={(e)=>{
   setCreator(e.target.value)
}}/>

<br/>
<br/>

<label>Status:</label>
<input type="text" onChange={(e)=>{
   setStatus(e.target.value)
}}/>

<br/>
<br/>

<label>Comments:</label>
<textarea type= "text" onChange={(e)=>{
   setComments(e.target.value)
}}/>






<br/>
<br/> */

 




/* <br/>
			<br/>

			  <label>CreatedById:</label>
			<textarea type= "text" onChange={(e)=>{
				setCreatedById(e.target.value)
			}}/> */

			/* <br/>
			<br/>


			  <label>CreatedAt:</label>
			<input type= "date" onChange={(e)=>{
				setCreatedAt(e.target.value)
			}}/> */
			/* <br/>
			<br/>

			  <label>LastModified:</label>
			<input type= "date" onChange={(e)=>{
				setLastModified(e.target.value)
			}}/> */
			/* <br/>
			<br/>

			<label>LastUpdatedById:</label>
			<textarea type= "text" onChange={(e)=>{
				setLastUpdatedById(e.target.value)
			}}/> */




       
        



//<button onClick={()=>{ handleCreateTicket(); navigate("/") 
//}}>Create Ticket</button>

//<button onClick={()=>{ navigate("/") }}>Cancel</button>


//window.location.reload(true)

// {auth.userToken && <><h1>Ticket Creation Form</h1>
// 			<label>Title: </label>
// 			<input type="text" onChange={(e)=>{
// 				setTitle(e.target.value)
// 			}} />
			
// 			<br/>
// 			<br/> 
// 			<label>Description: </label>
// 			<textarea type="text" onChange={(e)=>{
// 				setDescription(e.target.value)
// 			}} />
// 			<br/>
// 			<br/>
// 			<label>Creator: </label>
// 			<input type="text" onChange={(e)=>{
// 				setCreator(e.target.value)
// 			}}/>
//             <br/>
// 			<br/>
          
//             <label>Status: </label>
// 			<input type="text" onChange={(e)=>{
// 				setStatus(e.target.value)
// 			}}/>
// 			<br/>
// 			<br/>
// 			  <label>Comments: </label>
// 			<textarea type= "text" onChange={(e)=>{
// 				setComments(e.target.value)
// 			}}/>
            




///* {!auth.userToken && navigate("/login")} */
	

			