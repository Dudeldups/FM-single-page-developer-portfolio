import { useState, useEffect } from "react";
import "./Contact.less";
import FormInput from "./FormInput/FormInput";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSubmitted]);

  const emailRegex = new RegExp(
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  );

  const isValidEmail = (email: string) => emailRegex.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formInputs).every((input: Input) => input.error === "")) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    let error = "";
    if (id === "name" && value === "") {
      error = "Please enter your name";
    } else if (id === "email" && !isValidEmail(value)) {
      error = "Invalid email format";
    } else if (id === "message" && value === "") {
      error = "Please enter a message";
    }

    setFormInputs(prev => ({
      ...prev,
      [id]: {
        value,
        error,
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
        <form action="#" method="POST" onSubmit={handleSubmit} className="form">
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
