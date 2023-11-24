import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, About } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: "/about",
    element: <About />
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
