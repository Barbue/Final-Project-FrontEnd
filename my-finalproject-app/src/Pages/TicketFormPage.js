import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth } from "../Hooks/Auth";





const TicketFormPage = (props) => {

	const auth = useAuth()
	//instantiate navigator 
	const navigate = useNavigate();
	

	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("")
	const [text, setText] = useState("")
	const [creator, setCreator] = useState("")
    const [year, setYear] = useState("")
    const [status, setStatus] = useState("")
    

	

    const handleCreateTicket = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            title: title,
            text: text,
            creator: creator,
            year: year,
            status: status
		}


		console.log(req);
        axios.post(`${urlEndPoint}/tickets/create-one`, req)
          .then(function (response) {
            console.log(response);
          },{
			'Content-Type': 'application/json'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

		  //setShouldRefresh(false);
    }


    return (
		
		<div>

		 {!auth.userToken && navigate("/login")}
		 
			
		{auth.userToken && <><h1>Ticket Creation Form</h1>
			<label>Title: </label>
			<input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}} />
			
			<br/>
			<br/> 
			<label>Text: </label>
			<textarea type="text" onChange={(e)=>{
				setText(e.target.value)
			}} />
			<br/>
			<br/>
			<label>Creator: </label>
			<input type="text" onChange={(e)=>{
				setCreator(e.target.value)
			}}/>
            <br/>
			<br/>
            <label>Year: </label>
			<input type= "text" onChange={(e)=>{
				setYear(e.target.value)
			}}/>
            <br/>
			<br/>
            <label>Status: </label>
			<input type="text" onChange={(e)=>{
				setStatus(e.target.value)
			}}/>
		

			
			
            {/* <label>Id</label>
			<input type="text" onChange={(e)=>{
				setId(e.target.value)
			}}/> */}
            <br/>
            {/* <label>CreatedAt</label>
			<input type="text" onChange={(e)=>{
				setCreatedAt(e.target.value)
			}}/> */}
            <br/>
			
			<button onClick={()=>{
				handleCreateTicket()
				navigate("/")
			}}>Create Ticket</button>
		
		</>
		}

		
		</div>
	)
}

export default TicketFormPage