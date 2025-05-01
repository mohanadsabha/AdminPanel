import { Navigate, Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";
import FirstDemo from "./pages/cms/FirstDemo";
import Login from "./pages/cms/auth/Login";
import Table from "./pages/cms/users/Table";
import Form from "./pages/cms/users/Form";
import Register from "./pages/cms/auth/Register";

export default function AppRoutes() {
  const authenticated = true;
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cms/admin"
        element={authenticated ? <Parent /> : <Navigate to="/login" />}
      >
        <Route path="/cms/admin/first-demo" element={<FirstDemo />} />
        <Route path="/cms/admin/users" element={<Table />} />
        <Route path="/cms/admin/users/create" element={<Form />} />
      </Route>
    </Routes>
  );
}
