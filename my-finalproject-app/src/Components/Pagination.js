import React from 'react'
import Button from 'react-bootstrap/Button';


                     // deconstructed props
const Pagination = ({totalTickets, ticketsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    
     
                        // ensures that page is created for tickets that do not fill the tickets per page number
    for(let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++)
    {
     pages.push(i)
    }
    

  return (
    <div className="pages">
        {
           pages.map((page, i) => {

           return <Button className="pages1" variant="success"  key={i} onClick={() => { setCurrentPage(page) } }>{page}</Button> 

          }) 
        }

    </div>
  )
}

export default Pagination
































// import Pagination from 'react-bootstrap/Pagination';

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination>
//   </div>
// );















//<button key={i} onClick={() => setCurrentPage(page)}>{page}</button>