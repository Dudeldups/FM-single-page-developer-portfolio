import { useState } from "react";
import "./Contact.less";
import FormInput from "./FormInput/FormInput";

export default function Contact() {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  const isValidEmail = (email: string) => emailRegex.test(email);

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formInputs;
    const errors = {
      name: name.value === "" ? "Name is required" : "",
      email: isValidEmail(email.value) ? "" : "Invalid email format",
      message: message.value === "" ? "Message is required" : "",
    };

    if (Object.values(errors).every(error => error === "")) {
      console.log(formInputs);
    } else {
      setFormInputs(prev => ({
        name: { ...prev.name, error: errors.name },
        email: { ...prev.email, error: errors.email },
        message: { ...prev.message, error: errors.message },
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormInputs(prev => ({
      ...prev,
      [id]: {
        value,
        error: "",
      },
    }));
  };

  return (
    <div className="contact-bg">
      <section className="contact" id="contact">
        <header className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__desc">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </header>
        <form action="#" method="POST" onSubmit={validateForm} className="form">
          <FormInput
            formInputs={formInputs}
            id="name"
            handleChange={handleChange}
          />
          <FormInput
            formInputs={formInputs}
            id="email"
            handleChange={handleChange}
          />
          <FormInput
            formInputs={formInputs}
            id="message"
            handleChange={handleChange}
          />

          <button type="submit" className="form__button">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
