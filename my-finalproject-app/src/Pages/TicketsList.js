//import { useState } from "react";

import TicketCard from "../Components/TicketCard";
import { useAuth } from "../Hooks/Auth";
import { useNavigate  } from 'react-router-dom';

//home page component 
const TicketsList = (props) => {
    const auth = useAuth();
    const navigate = useNavigate();

    const {
        ticketList, 
        setTicketList, 
        urlEndPoint,
        setShouldRefresh, 
    } = props
    
    console.log(ticketList)

    return (
        <div>
            {!auth.userToken && navigate("/login")}
            
            {auth.userToken && <h1>Ticket App</h1> && ticketList.map((item, index) => {
                return (<TicketCard 
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
