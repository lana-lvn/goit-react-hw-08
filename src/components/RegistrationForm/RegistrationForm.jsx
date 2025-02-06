import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div className="hero bg-[#fdfff3] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold font-[Cinzel_Serif]">
            Register now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <div className="card-body">
              <Form className="fieldset">
                <label className="label">Name</label>
                <Field
                  name="name"
                  className="border rounded-md h-[35px] pl-[10px]"
                  placeholder="Enter your name..."
                />
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
                    Already have an account?{" "}
                    <Link className="link link-hover" to="/login">
                      Login.
                    </Link>
                  </p>
                </div>
                <button
                  className="px-4 py-2 border rounded-md hover:bg-[#004aad] hover:text-[#fdfff3] cursor-pointer"
                  type="submit"
                >
                  Register
                </button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
