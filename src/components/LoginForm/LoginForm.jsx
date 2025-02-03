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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <div className="card-body">
              <Form className="fieldset">
                <label className="fieldset-label">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="input"
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
                <button className="btn btn-neutral mt-4" type="submit">
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
