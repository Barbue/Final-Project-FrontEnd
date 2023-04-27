import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const TicketFormPage = (props) => {

	//const auth = useAuth()
	//instantiate navigator 
	const navigate = useNavigate();
	

	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [relatedTicketIds, setRelatedTicketIds] = useState([])
	const [assignedToUserId, setAssignedToUserId] = useState("")
	const [creator, setCreator] = useState("")
    const [comments, setComments] = useState("")
    const [status, setStatus] = useState("")
	//const [createdById, setCreatedById] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [lastModified, setLastModified] = useState("")
    //const [lastUpdatedById, setLastUpdatedById] = useState("")
    

	

    const handleCreateTicket = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            title: title,
            description: description,
			relatedTicketIds: relatedTicketIds,
			assignedToUserId: assignedToUserId,
            creator: creator,
            status: status,
			comments: comments,
			// createdById: createdById,
			// createdAt: createdAt,
			// lastModified: lastModified,
			// lastUpdatedById: lastUpdatedById,
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
		     <h1>Ticket Creation Form</h1>
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

			{/* <br/>
			<br/>

			  <label>CreatedById:</label>
			<textarea type= "text" onChange={(e)=>{
				setCreatedById(e.target.value)
			}}/> */}

			{/* <br/>
			<br/>


			  <label>CreatedAt:</label>
			<input type= "date" onChange={(e)=>{
				setCreatedAt(e.target.value)
			}}/> */}
			{/* <br/>
			<br/>

			  <label>LastModified:</label>
			<input type= "date" onChange={(e)=>{
				setLastModified(e.target.value)
			}}/> */}
			{/* <br/>
			<br/>

			<label>LastUpdatedById:</label>
			<textarea type= "text" onChange={(e)=>{
				setLastUpdatedById(e.target.value)
			}}/> */}
            
		    <br/>
			<br/>
			



<Button variant="success" onClick={() => {handleCreateTicket(); navigate("/")}}>Create Ticket</Button>
{" "}

<Button variant="success" onClick={() => {navigate("/")
          }}>Cancel</Button>





</div>
)
};

export default TicketFormPage




       
        



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
	

			