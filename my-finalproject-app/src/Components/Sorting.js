import React from 'react';
//import { useState } from "react";


const Sorting = (props) => {
       
        const {
            sortTicketsAsc, 
            sortTicketsDsc,
        } = props

return (
   <div>
     
   <button onClick={() => {sortTicketsAsc()}}> Asc </button>
   <button onClick={() => {sortTicketsDsc()}}> Dsc </button>

  </div>

      )
};

export default Sorting
  






















{/* //() => {sortedTicketsDescending } */}


// if (a.title.toUpperCase() < b.title.toUpperCase()) {
    //   return -1;
    // }
    // if (a.title.toUpperCase() > b.title.toUpperCase()) {
    //   return 1;
    // }
    // return 0;