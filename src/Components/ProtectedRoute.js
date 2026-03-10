import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // ❌ Not logged in
  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // ❌ Logged in but role not allowed
  // if (allowedRoles && !allowedRoles.includes(role)) {
  //   return <Navigate to="/" replace />;
  // }

  // ✅ Access allowed
  return children;
};

export default ProtectedRoute;
