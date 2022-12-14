import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../components/pages/Login'
import { Todo } from '../components/pages/Todo'
import { UserManagement } from '../components/pages/UserManagement'
import { Help } from '../components/pages/Help'
import { Page404 } from './Page404'

export const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
      </Route>
      <Route path="/todo" element={<Todo />} />
      <Route path="/user_management" element={<UserManagement />} />
      <Route path="/help" element={<Help />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
