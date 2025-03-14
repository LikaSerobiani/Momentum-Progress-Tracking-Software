import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";

import TasksList from "./pages/tasks/TasksList";
import TaskDetails from "./pages/tasks/TaskDetails";
import CreateTask from "./pages/tasks/CreateTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="tasks">
        <Route index element={<TasksList />} />
        <Route path=":id" element={<TaskDetails />} />
        <Route path="create" element={<CreateTask />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <Header />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
