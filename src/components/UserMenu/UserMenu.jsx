import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10 items-center">
      <p className="">Welcome, {user.name}</p>
      <button
        type="button"
        className="px-4 py-2 border rounded-md hover:bg-[#004aad] hover:text-[#fdfff3] cursor-pointer"
        onClick={() => dispatch(logoutThunk())}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
