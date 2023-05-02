//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import HomePage from './Pages/HomePage';
//import Layout from './Layouts/Layout';
//import SearchBar from './Components/SearchBar'
//import Sorting from "./Components/Sorting"
//import { title } from 'process';
//import { useNavigate  } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TicketFormPage from "./Pages/TicketFormPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import TicketsList from "./Pages/TicketsList";
import Pagination from "./Components/Pagination";
import PrivatePage from "./Pages/PrivatePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import EditTicketForm from "./Components/EditTicketForm";


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  //set up hooks for the state
  const [ticketList, setTicketList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage] = useState(3);
  const [filteredTickets, setFilteredTickets] = useState([]);
  //, setTicketsPerPage
  //const navigate = useNavigate
  //console.log(ticketList)

  //load the ticket items from the back end
  useEffect(() => {
    axios
      .get(`${urlEndPoint}/tickets/all`)
      .then(function (response) {
        console.log(response);
        setTicketList(response.data.tickets);
        setFilteredTickets(response.data.tickets);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }, [shouldRefresh]);

  // Pagination
  // so if current page is 1 and there are 5 tickets per page, then
  // last index of page will be 5
  const indexOfLastTicket = currentPage * ticketsPerPage;

  // so if last index  of last ticket is 5 and tickets per page is 5,
  // then the index of first ticket will be 1 because index starts at 0.
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

  // so if the "indexOfFirstTicket" is "0" and the "indexOfLastTicket"
  // is "5", then the displayed page will include indexes 0-4(tickets 1-5) and end with index 5, which is not included.
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket,
  );
  console.log(currentTickets)

 
// Sorting title, ascending order(alphabetical):
// Spread operator "spreads" filteredTickets into its elements, makes a copy of it, then sorts(mutates) that copy
// A conditional (ternary) operator is used in this compare function.
// The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(title).
// if value of a.title is > b.title, return 1, if not return -1

// > 0 sorts a after b or [b,a]
// < 0 sorts a before b [a,b]
// === 0 keeps original of a and b


  const sortTicketsAsc = () => {
    const sortedTicketsAscending = [...filteredTickets].sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    });
    setFilteredTickets(sortedTicketsAscending);
    console.log(sortedTicketsAscending);
  };

  // Sorting by title, descending order(alphabetical):
 // Spread operator "spreads" filteredTickets into its elements, makes a copy of it, then sorts(mutates) that copy
 // A conditional (ternary) operator is used in this compare function.
// The array of objects are sorted by comparing the return value(Unicode code point value) of one of the properties(title).
// if value of a.title is > b.title, return -1, if not return 1

// > 0 sorts a after b or [b,a]
// < 0 sorts a before b [a,b]
// === 0 keeps original of a and b

  const sortTicketsDsc = () => {
    const sortedTicketsDescending = [...filteredTickets].sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
    });
    setFilteredTickets(sortedTicketsDescending);
    console.log(sortedTicketsDescending);
  };

  const filterTickets = (input, field) => {
   
    if (field.length === 0) {
      setFilteredTickets(ticketList);
      
    } else {
      const filteredTickets = ticketList.filter((ticket) => {
        return ticket[field].toLowerCase().includes(input.toLowerCase());
      });
      setFilteredTickets(filteredTickets);
      if(filteredTickets.length === 0) {
        alert("No ticket found!")
      }
      
    }
  };

  return (
    <div className="App-header ">
      <NavBar />

      <Routes>
        <Route path="/" element={<PrivatePage />}>
          <Route
            index
            element={
              <>
                <TicketsList
                  ticketList={currentTickets} // without pagination it would be {ticketList}
                  setTicketList={setTicketList}
                  filterTickets={filterTickets}
                  urlEndPoint={urlEndPoint}
                  setShouldRefresh={setShouldRefresh}
                  sortTicketsDsc={sortTicketsDsc}
                  sortTicketsAsc={sortTicketsAsc}
                />

                <Pagination
                  totalTickets={filteredTickets.length}
                  ticketsPerPage={ticketsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            }
          />
          <Route
            path="ticketform"
            element={
              <TicketFormPage
                urlEndPoint={urlEndPoint}
                setShouldRefresh={setShouldRefresh}
              />
            }
          />
          <Route
            path="edit-ticket/:id"
            element={
              <EditTicketForm
                urlEndPoint={urlEndPoint}
                ticketList={ticketList}
                setShouldRefresh={setShouldRefresh}
              />
            }
          />
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;













// .finally(function () {
    //   // always executed
    //   //setShouldRefresh(true)
    //   //window.location.reload(true)
    // });

//{/* <RouterProvider router={router} /> */}

// const sortedTicketsAscending = ticketList.sort(
//   // (a, b) =>
//   //  a.title.localeCompare(b.title)
//   function(a, b){return a.title - b.title}

// );
//setTicketList(sortedTicketsAscending)
//console.log(sortedTicketsAscending)

// }

// const sortedTicketsDsc = () => {

// const sortedTicketsDescending = ticketList.sort(
//   function(a, b){return b.title - a.title }
//   // (b, a) =>
//      //b.title.localeCompare(a.title)

//   );
//   console.log(sortedTicketsDescending)

// }

// <Route
// 						path="edit-ticket/:id"
// 						element={
// 							<EditTicketForm
//               urlEndPoint={urlEndPoint}
// 								ticketList={ticketList}
// 								setShouldRefresh={setShouldRefresh}
// 							/>
// 						}
// 					/>

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,

//       },
//       {
//         path: "login",
//         element: <LoginPage  />
//       },
//       {
//         path: "registration",
//         element: <RegistrationPage  />
//       },
//       {
//         path: "ticketslist",
//         element: <>

//          <TicketsList ticketList={currentTickets} // without pagination it would be {ticketList}
//         setTicketList={setTicketList}
//         filterTickets={filterTickets}
//         urlEndPoint={urlEndPoint}
//         setShouldRefresh={setShouldRefresh}

//         />

//         <Pagination
//          totalTickets={ticketList.length}
//          ticketsPerPage={ticketsPerPage}
//          setCurrentPage={setCurrentPage}
//          />
//          </>
//       },
//       {
//         path: "ticketform",
//         element: <TicketFormPage urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
//       },

//     ],

//   },
// ]);
