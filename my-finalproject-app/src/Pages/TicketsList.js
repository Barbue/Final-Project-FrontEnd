//import { useState } from "react";
//import { useAuth } from "../Hooks/Auth";
//import { useNavigate  } from 'react-router-dom';
//import Pagination from "../Components/Pagination";
//import Sorting from "../Components/Sorting";
import TicketCard from "../Components/TicketCard";
import SearchBar from '../Components/SearchBar';
import Sorting from "../Components/Sorting";
import { BsFillTicketDetailedFill} from "react-icons/bs";
//import Reset from "../Components/Reset";


//home page component 
const TicketsList = (props) => {
    // const auth = useAuth();
    // const navigate = useNavigate();
const {
        ticketList,   
        setTicketList, 
        urlEndPoint,
        setShouldRefresh, 
        filterTickets,
        sortTicketsDsc,
        sortTicketsAsc,
        
    } = props
    
    console.log(ticketList)

return (

<div className="ticketList">       
         <br/>
         
         <SearchBar filterTickets={filterTickets} ticketList={ticketList} setTicketList={setTicketList}  setShouldRefresh={setShouldRefresh}  
         />
         
            
        <h1 className="ticketsTitle"> Tickets <BsFillTicketDetailedFill /> </h1>
            
        <br/>
            
        <div className="sorting">
        <Sorting sortTicketsDsc={sortTicketsDsc} sortTicketsAsc={sortTicketsAsc} />
        </div>
            
            

            
            {ticketList.map((item, index) => {
            
            
return (
            
            <TicketCard
            ticket={item}
            ticketList={ticketList}
            setTicketList={setTicketList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index} 
            />
       );
            })}
        </div>
    )
}

export default TicketsList













































// <Pagination 
           
        //    totalTickets={ticketList.length} 
        //    ticketsPerPage={ticketsPerPage}
        //    setCurrentPage={setCurrentPage}
        //    />   




    //        return (
    //         <div>
    //             {!auth.userToken && navigate("/login")}
    
    //             {auth.userToken && <SearchBar filterTickets={filterTickets}/>}
                
    //             {auth.userToken && <h1>Ticket App</h1>&& 
    //             ticketList.map((item, index) => {
    //     return (
                
    //               <TicketCard
    //             ticket={item}
    //             setTicketList={setTicketList}
    //             urlEndPoint={urlEndPoint}
    //             setShouldRefresh={setShouldRefresh}
    //             key={index} />
    //                 );
    //             })}
    
               
    
               
                
                
    //         </div>
    //     )
    // }