import { Navigate, Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";
import FirstDemo from "./pages/cms/FirstDemo";
import Login from "./pages/cms/auth/Login";
import Table from "./pages/cms/users/Table";
import Form from "./pages/cms/users/Form";
import Register from "./pages/cms/auth/Register";
import { useSelector } from "react-redux";
import TaskIndex from "./pages/cms/tasks/TaskIndex";
import TaskForm from "./pages/cms/tasks/TaskForm";

export default function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/cms/admin" /> : <Login />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cms/admin"
        element={isLoggedIn ? <Parent /> : <Navigate to="/login" />}
      >
        <Route path="/cms/admin/first-demo" element={<FirstDemo />} />
        <Route path="/cms/admin/users" element={<Table />} />
        <Route path="/cms/admin/users/create" element={<Form />} />
        <Route path="/cms/admin/tasks" element={<TaskIndex />} />
        <Route path="/cms/admin/tasks/create" element={<TaskForm />} />
      </Route>
    </Routes>
  );
}
