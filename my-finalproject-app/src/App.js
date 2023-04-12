import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import HomePage from './Pages/HomePage';
import TicketFormPage from './Pages/TicketFormPage';
import Layout from './Layouts/Layout';
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import TicketsList from "./Pages/TicketsList";




const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  //set up hooks for the state 
  const [ticketList, setTicketList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

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
    .finally(function () {
      // always executed
      // setShouldRefresh(true)
    });
  
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,

        },
        {
					path: "login",
					element: <LoginPage  />
				},
				{
					path: "registration",
					element: <RegistrationPage  />
				},
        {
          path: "ticketslist",
          element: <TicketsList ticketList={ticketList} 
          setTicketList={setTicketList}
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}
           />
        },
        { 
          path: "ticketform",
          element: <TicketFormPage urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
        },
        
      ],

    },
  ]);


  return (
    <div className="App-header">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

