import { Navigate, Outlet } from "react-router";

export function ProtectedRoute({ logedIn }: { logedIn: boolean }) {
  return logedIn ? <Outlet /> : <Navigate to="/login" />;
}
