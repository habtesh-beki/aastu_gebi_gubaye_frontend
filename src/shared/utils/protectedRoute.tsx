import { Navigate, Outlet } from "react-router";
////protect access other route before logedIn
export function ProtectedRoute({ logedIn }: { logedIn: boolean }) {
  return logedIn ? <Outlet /> : <Navigate to="/login" />;
}
