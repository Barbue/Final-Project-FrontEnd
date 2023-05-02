import React from 'react';
import Button from 'react-bootstrap/Button';


const Sorting = (props) => {
       
        const {
            sortTicketsAsc, 
            sortTicketsDsc,
        } = props

return (
   <div>
     
   
   <Button variant="success" size="sm" onClick={() => {sortTicketsAsc()
          }}>Asc</Button>
          {" "}

   <Button variant="success" size="sm" onClick={() => {sortTicketsDsc()
          }}>Dsc</Button>

  </div>

  )
};

export default Sorting
  







//<button onClick={() => {sortTicketsAsc()}}> Asc </button>
//<button onClick={() => {sortTicketsDsc()}}> Dsc </button>














/* //() => {sortedTicketsDescending } */


// if (a.title.toUpperCase() < b.title.toUpperCase()) {
    //   return -1;
    // }
    // if (a.title.toUpperCase() > b.title.toUpperCase()) {
    //   return 1;
    // }
    // return 0;