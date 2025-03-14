import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import TasksList from "./pages/tasks/TasksList";
import TaskDetails from "./pages/tasks/TaskDetails";
import CreateTask from "./pages/tasks/CreateTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
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
  return <RouterProvider router={router} />;
}

export default App;
