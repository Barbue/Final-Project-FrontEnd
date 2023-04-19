//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import HomePage from './Pages/HomePage';
//import Layout from './Layouts/Layout';
//import SearchBar from './Components/SearchBar'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TicketFormPage from './Pages/TicketFormPage';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import TicketsList from "./Pages/TicketsList";
import Pagination from './Components/Pagination';
import PrivatePage from './Pages/PrivatePage';
import { Route, Routes} from "react-router-dom";
import NavBar from './Components/NavBar';



const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {


  //set up hooks for the state 
  const [ticketList, setTicketList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage] = useState(3);
  //, setTicketsPerPage



  console.log(ticketList)
  

  //load the ticket items from the back end 
  useEffect(() => {
    axios.get(`${urlEndPoint}/tickets/all`)
    .then(function (response) {
      console.log(response);
      setTicketList(response.data.tickets);
    })
    .catch(function (error) {
      console.log(error);
    })
    // .finally(function () {
    //   // always executed
    //   //setShouldRefresh(true)
    //   //window.location.reload(true)
    // });
  
  },[shouldRefresh])
   
  //New code////////
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = ticketList.slice(indexOfFirstTicket,indexOfLastTicket);



  const filterTickets = (input, field) => {

    const filteredTickets = ticketList.filter((ticket) => {
         return ticket[field].toLowerCase().includes(input.toLowerCase())
     })

    setTicketList(filteredTickets)
    } 
    

  
  return (
    <div className="App-header">

      <NavBar />

<Routes>
				<Route path="/" element={<PrivatePage />}>
					<Route
						index
						element={ <>
							<TicketsList ticketList={currentTickets} // without pagination it would be {ticketList}
          setTicketList={setTicketList}
          filterTickets={filterTickets}
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}
         
          />

          <Pagination 
           totalTickets={ticketList.length} 
           ticketsPerPage={ticketsPerPage}
           setCurrentPage={setCurrentPage}
           /> 
           </> 
						}
					/>
					<Route
						path="ticketform"
						element={
							<TicketFormPage urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
						}
					/>
					{/* <Route
						path="edit-blog/:id"
						element={
							<EditBlog
								blogsProps={blogs}
								setShouldRefreshProps={setShouldRefresh}
							/>
						}
					/> */}
				</Route>
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage  />} />
			</Routes>










       {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;





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


