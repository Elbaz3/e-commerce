import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonPrim from "@components/shared/ButtonPrim/ButtonPrim";
import { signupSchema } from "@util/schemas";
import "./SignUp.scss";

const schema = signupSchema;

const SignUpC = () => {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="sign-up">
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
              <input type="text" placeholder="Name" {...register("name")} />
            </label>
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

            <button type="submit" className="button-primary btn-form">
              Create Account
            </button>
          </form>
          <div className="form-footer">
            <ButtonPrim
              to="/"
              value="Sign up with Google"
              style="form-btn"
              logo={<img src="/images/google.svg" width={24} height={24} />}
            />
            <div className="footer-text">
              <p>Already have account?</p>
              <a href="/login"> Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpC;
