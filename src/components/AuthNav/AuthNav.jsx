import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex gap-10 items-center">
      <NavLink className="hover:underline" to="/register">
        Register
      </NavLink>
      <NavLink className="hover:underline" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
