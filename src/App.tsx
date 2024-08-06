import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import CreateTrip from "./pages/create-trip/create-trip";
import TripDetails from "./pages/trip-details/trip-details";

function App() {
  
 return <RouterProvider router={router} />

};


//
const router = createBrowserRouter([
  {
    path: "/",
    element: < CreateTrip />,
  },

  {
    path: "/trip/:tripId",
    element: < TripDetails />,
  },
]);

export default App;
