import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./EditProfile.scss";

const schema = yup.object({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup.string().email().required("Email required"),
  address: yup.string().optional(),
  currentPassword: yup.string().optional(),
  newPassword: yup.string().min(6, "Min 6 characters").optional(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .optional(),
});

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="edit-profile">
      <div className="container">
        <div className="menu">
          <div className="menu__head">
            <p>Manage My Account</p>
          </div>
          <div className="menu__nest">
            <ul>
              <li className="active">
                <a href="">My Profile</a>
              </li>
              <li>
                <a href="">Address Book</a>
              </li>
              <li>
                <a href="">My Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="menu__head">
            <p>My Orders</p>
          </div>
          <div className="menu__nest">
            <ul>
              <li>
                <a href="">My Returns</a>
              </li>
              <li>
                <a href="">My Cancellations</a>
              </li>
            </ul>
          </div>
          <div className="menu__head">
            <p>My WishList</p>
          </div>
        </div>

        <div className="form">
          <h3>Edit Your Profile</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile-data">
              <div>
                <label htmlFor="">
                  First Name
                  <input
                    {...register("firstName")}
                    placeholder="First Name"
                    className="input"
                  />
                </label>
                <p className="error">{errors.firstName?.message}</p>
              </div>

              <div>
                <label htmlFor="">
                  Last Name
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    className="input"
                  />
                  <p className="error">{errors.lastName?.message}</p>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Email
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="input"
                  />
                  <p className="error">{errors.email?.message}</p>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Address
                  <input
                    {...register("address")}
                    placeholder="Address"
                    className="input"
                  />
                </label>
              </div>
            </div>

            <div className="password-change">
              <label htmlFor="">
                Password Changes
                <input
                  {...register("currentPassword")}
                  placeholder="Current Password"
                  type="password"
                  className="input"
                />
              </label>
              <div className="new-password">
                <input
                  {...register("newPassword")}
                  placeholder="New Password"
                  type="password"
                  className="input"
                />
                <p className="error">{errors.newPassword?.message}</p>
              </div>
              <div className="new-password">
                <input
                  {...register("confirmPassword")}
                  placeholder="Confirm New Password"
                  type="password"
                  className="input"
                />
                <p className="error">{errors.confirmPassword?.message}</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button type="button" className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="button-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
