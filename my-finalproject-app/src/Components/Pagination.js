import React from 'react'
import Button from 'react-bootstrap/Button';


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

           return <Button variant="success"  key={i} onClick={() => {setCurrentPage(page)
           }}>{page}</Button> 

           

           }) 
        }


    </div>
  )
}

export default Pagination






//<button key={i} onClick={() => setCurrentPage(page)}>{page}</button>