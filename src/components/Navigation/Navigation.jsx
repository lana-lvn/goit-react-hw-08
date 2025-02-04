import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className="flex gap-5">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
