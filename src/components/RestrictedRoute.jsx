import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isLoggedIn ? <Navigate to={location?.state || "/"} /> : children;
};
export default RestrictedRoute;
