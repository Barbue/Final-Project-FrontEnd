import React from 'react'
//import { useState } from "react";


const Pagination = ({totalTickets, ticketsPerPage, setCurrentPage}) => {
    let pages = [];
     
    for(let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++)
    {
     pages.push(i)
    }
    

  return (
    <div>
        {
           pages.map((page, i) => {

           return <button key={i} onClick={() => setCurrentPage(page)}>{page}</button>

           }) 
        }


    </div>
  )
}

export default Pagination
