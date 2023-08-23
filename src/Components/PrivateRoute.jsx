import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const checkAuth = window.authorized;

  return checkAuth ? children : <Navigate to="/login" />;
}
