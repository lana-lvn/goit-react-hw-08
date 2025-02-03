import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        className="btn btn-outline"
        onClick={() => dispatch(logoutThunk())}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
