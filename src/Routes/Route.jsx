import { createBrowserRouter } from "react-router";

const router= createBrowserRouter([
  {path:'/', element:<h1>Home</h1>},
  {path:'/c', element:<h1>contacts</h1>},
])

export default router;