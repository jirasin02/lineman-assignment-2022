import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantPage from "./pages/restaurant";
import RestaurantInfoPage from "./pages/restaurant/info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantPage />,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <RestaurantInfoPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
