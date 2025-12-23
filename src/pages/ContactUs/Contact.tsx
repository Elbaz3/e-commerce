import phone from "@assets/contact-phone.svg";
import email from "@assets/contact-email.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./ContactC.scss";
import Breadcrumb from "@components/shared/Breadcrumb/Breadcrumb";

const contactSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

const ContactC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="contact">
      <div className="container">
        <Breadcrumb />
      </div>
      <div className="container contact__container">
        <div className="contact__info">
          <div className="contact__info__box">
            <div className="top">
              <div className="image">
                <img src={phone} alt="" width={20} height={20} />
              </div>
              <span>Call To Us</span>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="contact__info__box">
            <div className="top">
              <div className="image">
                <img src={email} alt="" width={20} height={20} />
              </div>
              <span>Write To US</span>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="top-inputs">
              <label>
                <input placeholder="Your Name *" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
              </label>

              <label>
                <input placeholder="Your Email *" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
              </label>

              <label>
                <input placeholder="Your Phone *" {...register("phone")} />
                {errors.phone && <span>{errors.phone.message}</span>}
              </label>
            </div>

            <label className="message-label">
              <textarea
                placeholder="Your Message"
                rows={6}
                {...register("message")}
              />
              {errors.message && <span>{errors.message.message}</span>}
            </label>

            <button type="submit" className="button-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactC;
