import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Todo } from "../components/pages/Todo";
import { UserManagement } from "../components/pages/UserManagement";
import { Help } from "../components/pages/Help";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>
        <Route path="/todo" element={<Todo />} />
        <Route path="/user_management" element={<UserManagement />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};
