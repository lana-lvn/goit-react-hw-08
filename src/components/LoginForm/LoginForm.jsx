import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <div className="hero bg-[#fdfff3] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold font-[Cinzel_Serif]">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <div className="card-body">
              <Form className="fieldset">
                <label className="label">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border rounded-md h-[35px] pl-[10px]"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="border rounded-md h-[35px] pl-[10px]"
                  placeholder="Password"
                />
                <div>
                  <p>
                    Do not have an account?{" "}
                    <Link className="link link-hover" to="/register">
                      Register.
                    </Link>
                  </p>
                </div>
                <button
                  className="px-4 py-2 border rounded-md hover:bg-[#004aad] hover:text-[#fdfff3] cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
