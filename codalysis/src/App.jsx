import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element= {<MainLayout/>}/>
      <Route path="*" element= {<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
