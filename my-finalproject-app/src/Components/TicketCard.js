//import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TicketCard = (props) => {

  const navigate = useNavigate();

    const {ticket, urlEndPoint, setShouldRefresh } = props;
    console.log(ticket)
   


  const handleDeleteTicket = (id) => {

      setShouldRefresh(true)

     axios.delete(`${urlEndPoint}/tickets/delete-one/${id}`)
    
      .then(function (response) {
        console.log(response);
        setShouldRefresh(false)
      },{
      'Content-Type': 'application/json'
      })
    }

return (

<div>

          <h2>Title: {ticket.title}</h2>
          <p>Description: {ticket.description}</p>
          <p>relatedTicketIds: {ticket.relatedTicketIds}</p>
          <p>AssignedToUserId: {ticket.assignedToUserId}</p>
          <p>Creator: {ticket.creator}</p>
          <p>Status: {ticket.status}</p>
          <p>Comments: {ticket.comments}</p>
          <p>CreatedAt: {ticket.createdAt}</p>
          <p>CreatedById: {ticket.createdById}</p>
          <p>Last Modified: {ticket.lastModified}</p> 
          <p>LastUpdatedById: {ticket.lastUpdatedById}</p>

       
<button onClick={() => {handleDeleteTicket(ticket.createdById)
          }}
          >Delete Ticket </button>
        
<button onClick={() => { navigate(`/edit-ticket/${ticket.createdById}`)
          }}
          > Edit Ticket
          </button>

          <br/>
          <br/>
          
</div>
);
}


export default TicketCard;













 








//window.location.reload(true)


// const [title, setTitle] = useState(ticket.title);
    // const [description, setDescription] = useState(ticket.description);
    // const [relatedTicketsIds, setRelatedTicketsIds] = useState(ticket.relatedTicketsIds);
    // const [creator, setCreator] = useState(ticket.creator);
    // const [comments, setComments] = useState(ticket.comments);
    // const [status, setStatus] = useState(ticket.status);
    // const [isEditing, setIsEditing] = useState(false);
    // const [createdById, setCreatedById] = useState(ticket.createdById)
    // const [createdAt, setCreatedAt] = useState(ticket.createdAt)






// const TicketCard = (props) => {

//   const navigate = useNavigate();

//     const {ticket, urlEndPoint, setShouldRefresh } = props;
//     console.log(ticket)
//     const [title, setTitle] = useState(ticket.title);
//     const [description, setDescription] = useState(ticket.description);
//     const [relatedTicketsIds, setRelatedTicketsIds] = useState(ticket.relatedTicketsIds);
//     const [creator, setCreator] = useState(ticket.creator);
//     const [comments, setComments] = useState(ticket.comments);
//     const [status, setStatus] = useState(ticket.status);
//     const [isEditing, setIsEditing] = useState(false);
//     const [createdById, setCreatedById] = useState(ticket.createdById)
//     const [createdAt, setCreatedAt] = useState(ticket.createdAt)


//     // title: String,
//     // description: String, 
//     // relatedTicketIds:[String],
//     // assignedToUserId: {type: String, default: uuidv4},
//     // creator: String,
//     // status: String,
//     // comments: String,
//     // createdById: {type: String, default: uuidv4},
//     // createdAt: { type: Date, default: Date.now},
//     // lastModified: { type: Date, default: Date.now},
//     // lastUpdatedById: {type: String, default: uuidv4},

//     // const reset = () => {
//     //   setTitle("");
//     //   setDescription("");
//     //   setCreator("");
//     //   setStatus("");
//     //   setComments("");
//     // }

//     // const onSubmit = (e) => {
//     //   e.target.reset();
//     // };

    

 
   
//     const handleDeleteTicket = () => {

//       setShouldRefresh(true)

//      const response = axios.delete(`${urlEndPoint}/tickets/delete-one/${ticket.id}`)
//       .then(function (response) {
//         console.log(response);
//       },{
//       'Content-Type': 'application/json'
//       })
//       setShouldRefresh(false)
//     }

//     const handleUpdateTicket = () => {
      
//       setShouldRefresh(true);
//       const req = {
//         title: title,
//         description: description,
//         relatedTicketsIds: relatedTicketsIds,
//         creator: creator,
//         status: status,
//         comments: comments,
        
       
//     } 
//       const response = axios.put(`${urlEndPoint}/tickets/update-one/${ticket.id}`, req)
//       .then(function (response) {
//         console.log(response);
//       },{
//       'Content-Type': 'application/json'
//       })
      
//       setShouldRefresh(false);
     
//     }

//     return (
//         <div>
        
//           {!isEditing && <h2>Title: {ticket.title}</h2>}
//           {isEditing && ( 
//           <> 
//           <h2>Title: {ticket.title}</h2>

//             <input
//               type="text"
//               value={title}
//               onChange={(e) => {
//                 setTitle(e.target.value);
//               }}
//             />
//            </>
            
//           )}
//           {/* <br/> */}
//           {!isEditing && <p>Description: {ticket.description}</p>}
//           {isEditing && (
//             <> <p>Description: {ticket.description}</p>
                    
//             <textarea
//               type="text"
//               value={description}
//               onChange={(e) => {
//                 setDescription(e.target.value);
//               }}
//             />
//            </>
//           )}
//           {/* <br/> */}
//           {!isEditing && <p>relatedTicketsIds: {ticket.relatedTicketsIds}</p>}
//           {isEditing && (
//             <> <p>relatedTicketsIds: {ticket.relatedTicketsIds}</p>
//             <input
//             type="text"
//             value={relatedTicketsIds}
//             onChange={(e) => {
//               setRelatedTicketsIds(e.target.value);
//             }}
//           />
//          </>
//           )}

//           {!isEditing && <p>Creator: {ticket.creator}</p>}
//           {isEditing && (
//             <> <p>Creator: {ticket.creator}</p>
//             <input
//             type="text"
//             value={creator}
//             onChange={(e) => {
//               setCreator(e.target.value);
//             }}
//           />
//          </>
//           )}
//            {/* <br/>  */}
        
//           {!isEditing && <p>Status: {ticket.status}</p>}
//           {isEditing && ( 
//             <> <p>Status: {ticket.status}</p>
//             <input
//               type="text"
//               value={status}
//               onChange={(e) => {
//                 setStatus(e.target.value);
//               }}
//             />
//             </>
//           )}
//           {!isEditing && <p>Comments: {ticket.comments}</p>}
//           {isEditing && ( 
//             <> <p>Comments: {ticket.comments}</p>
//             <textarea
//               type="text"
//               value={comments}
//               onChange={(e) => {
//                 setComments(e.target.value);
//               }}
//             />

        
//             </>
//           )} 
//           {!isEditing && <p>createdById: {ticket.createdById}</p>}
//           {isEditing && ( 
//             <> <p>Status: {ticket.createdById}</p>
//             <input
//               type="text"
//               value={createdById}
//               onChange={(e) => {
//                 setCreatedById(e.target.value);
//               }}
//             />
//             </>
//           )}
//           {!isEditing && <p>Creation Date: {ticket.createdAt}</p>}
//           {isEditing && ( 
//             <> <p>Status: {ticket.createdAt}</p>
//             <input
//               type="text"
//               value={createdAt}
//               onChange={(e) => {
//                 setCreatedAt(e.target.value);
//               }}
//             />
//             </>
//           )}

           
            
                   
           
         
//           {/* <p>createdById: {ticket.createdById}</p> */}
//           <p>Creation Date: {ticket.createdAt.toString()}</p> 
//           <p>Last Modified: {ticket.lastModified.toString()}</p> 



          
//           <button onClick={() => {handleDeleteTicket();
//           window.location.reload(true)
//           }}
//           >
//           Delete Ticket
//           </button>
        
//                 {!isEditing && 
//           <button 
//             onClick={() => {
//               setIsEditing(true);
//             }}
//           >
//             Edit Ticket
//           </button>
//                 } 

//                 {isEditing && 
//           <button
//             onClick={() => {
//               setIsEditing(false);
//               handleUpdateTicket()
//               // reset()
//               window.location.reload(true)
              
//             }}
//           >
//             Update Ticket
//           </button>
//           }


//           {/* <button
//             onClick={() => {
//             navigate("/ticketslist")
             
//           }}
//           >
//             Cancel
//           </button> */}
                


                


//                 <br/>
//                 <br/>
//         </div>
//       );
      
// }










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

    // const reset = () => {
    //   setTitle("");
    //   setDescription("");
    //   setCreator("");
    //   setStatus("");
    //   setComments("");
    // }

    // const onSubmit = (e) => {
    //   e.target.reset();
    // };












    // const handleUpdateTicket = () => {
      
    //   setShouldRefresh(true);
    //   const req = {
    //     title: title,
    //     description: description,
    //     relatedTicketsIds: relatedTicketsIds,
    //     creator: creator,
    //     status: status,
    //     comments: comments,
        
       
    // } 
    //   const response = axios.put(`${urlEndPoint}/tickets/update-one/${ticket.id}`, req)
    //   .then(function (response) {
    //     console.log(response);
    //   },{
    //   'Content-Type': 'application/json'
    //   })
      
    //   setShouldRefresh(false);
     
    // }

    // return (
    //     <div>
        
    //       {!isEditing && <h2>Title: {ticket.title}</h2>}
    //       {isEditing && ( 
    //       <> 
    //       <h2>Title: {ticket.title}</h2>

    //         <input
    //           type="text"
    //           value={title}
    //           onChange={(e) => {
    //             setTitle(e.target.value);
    //           }}
    //         />
    //        </>
            
    //       )}
    //       {/* <br/> */}
    //       {!isEditing && <p>Description: {ticket.description}</p>}
    //       {isEditing && (
    //         <> <p>Description: {ticket.description}</p>
                    
    //         <textarea
    //           type="text"
    //           value={description}
    //           onChange={(e) => {
    //             setDescription(e.target.value);
    //           }}
    //         />
    //        </>
    //       )}
    //       {/* <br/> */}
    //       {!isEditing && <p>relatedTicketsIds: {ticket.relatedTicketsIds}</p>}
    //       {isEditing && (
    //         <> <p>relatedTicketsIds: {ticket.relatedTicketsIds}</p>
    //         <input
    //         type="text"
    //         value={relatedTicketsIds}
    //         onChange={(e) => {
    //           setRelatedTicketsIds(e.target.value);
    //         }}
    //       />
    //      </>
    //       )}

    //       {!isEditing && <p>Creator: {ticket.creator}</p>}
    //       {isEditing && (
    //         <> <p>Creator: {ticket.creator}</p>
    //         <input
    //         type="text"
    //         value={creator}
    //         onChange={(e) => {
    //           setCreator(e.target.value);
    //         }}
    //       />
    //      </>
    //       )}
    //        {/* <br/>  */}
        
    //       {!isEditing && <p>Status: {ticket.status}</p>}
    //       {isEditing && ( 
    //         <> <p>Status: {ticket.status}</p>
    //         <input
    //           type="text"
    //           value={status}
    //           onChange={(e) => {
    //             setStatus(e.target.value);
    //           }}
    //         />
    //         </>
    //       )}
    //       {!isEditing && <p>Comments: {ticket.comments}</p>}
    //       {isEditing && ( 
    //         <> <p>Comments: {ticket.comments}</p>
    //         <textarea
    //           type="text"
    //           value={comments}
    //           onChange={(e) => {
    //             setComments(e.target.value);
    //           }}
    //         />

        
    //         </>
    //       )} 
    //       {!isEditing && <p>createdById: {ticket.createdById}</p>}
    //       {isEditing && ( 
    //         <> <p>Status: {ticket.createdById}</p>
    //         <input
    //           type="text"
    //           value={createdById}
    //           onChange={(e) => {
    //             setCreatedById(e.target.value);
    //           }}
    //         />
    //         </>
    //       )}
    //       {!isEditing && <p>Creation Date: {ticket.createdAt}</p>}
    //       {isEditing && ( 
    //         <> <p>Status: {ticket.createdAt}</p>
    //         <input
    //           type="text"
    //           value={createdAt}
    //           onChange={(e) => {
    //             setCreatedAt(e.target.value);
    //           }}
    //         />
    //         </>
    //       )}

           
            
                   
           
         
    //       {/* <p>createdById: {ticket.createdById}</p> */}
    //       <p>Creation Date: {ticket.createdAt.toString()}</p> 
    //       <p>Last Modified: {ticket.lastModified.toString()}</p>





      //       {isEditing && 
          // <button
          //   onClick={() => {
          //     //setIsEditing(false);
          //     handleUpdateTicket()
          //     // reset()
          //     window.location.reload(true)
              
          //   }}
          // >
          //   Update Ticket
          // </button>
          // }


          // /* <button
          //   onClick={() => {
          //   navigate("/ticketslist")
             
          // }}
          // >
          //   Cancel
          // </button> 
                