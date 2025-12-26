import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../SignUp/SignUp.scss";
import "./LogInC.scss";

import { loginSchema } from "@util/schemas";

const schema = loginSchema;

const LogInC = () => {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="sign-up log-in">
      <div className="container sign-up__container">
        <div className="sign-up__image">
          <img
            src="/images/cover.png"
            alt="mobile and shopping basket"
            width={900}
            height={780}
          />
        </div>
        <div className="sign-up__form">
          <div className="form-header">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
          </div>
          <form>
            <label>
              <input
                placeholder="Email or phone number"
                {...register("contact", {
                  required: "Required",
                  validate: (value) =>
                    /\S+@\S+\.\S+/.test(value) || /^[0-9]{10,15}$/.test(value)
                      ? true
                      : "Enter a valid email or phone number",
                })}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </label>

            <div className="form-footer">
              <button type="submit" className="button-primary btn-form">
                Log In
              </button>

              <a href="">Forget Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInC;
