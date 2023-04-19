//import { useState } from "react";
//import { useAuth } from "../Hooks/Auth";
//import { useNavigate  } from 'react-router-dom';
//import Pagination from "../Components/Pagination";
import TicketCard from "../Components/TicketCard";
import SearchBar from '../Components/SearchBar'


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
      } = props
    
    console.log(ticketList)

return (
        <div>
            {/* {!auth.userToken && navigate("/login")} */}
         <br/>
            <SearchBar filterTickets={filterTickets}/>
            
            {/* <h1>Ticket App</h1> */}
            
            
            {ticketList.map((item, index) => {
            
            
            return (
            
              <TicketCard
            ticket={item}
            setTicketList={setTicketList}
            urlEndPoint={urlEndPoint}
            setShouldRefresh={setShouldRefresh}
            key={index} />
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