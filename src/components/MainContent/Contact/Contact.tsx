import { useState } from "react";
import "./Contact.less";
import FormInput from "./FormInput/FormInput";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref: submitMessageRef, inView: isSubmitMessageVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: containerRef, inView: isContainerVisible } = useInView({
    triggerOnce: true,
    rootMargin: "20px",
  });
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

  const emailRegex = new RegExp(
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  );

  const isValidEmail = (email: string) => emailRegex.test(email);

  const getErrorMessage = (id: keyof FormInputs, value: string) => {
    let error = "valid";
    if (id === "name" && value === "") {
      error = "Please enter your name";
    } else if (id === "email" && value === "") {
      error = "Please enter your email";
    } else if (id === "email" && !isValidEmail(value)) {
      error = "Invalid email format";
    } else if (id === "message" && value === "") {
      error = "Please enter a message";
    }

    return error;
  };

  const handleBlur: InputEventHandler = e => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const error = getErrorMessage(id as keyof FormInputs, value);

    setFormInputs(prev => ({
      ...prev,
      [id]: {
        value,
        error,
      },
    }));
  };

  const handleChange: InputEventHandler = e => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

    setFormInputs(prev => ({
      ...prev,
      [id]: {
        value,
        error: "",
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allInputsValid = Object.values(formInputs).every(
      (input: Input) => input.error === "valid"
    );

    if (allInputsValid) {
      setIsSubmitted(true);
    } else {
      setFormInputs((prevFormInputs: FormInputs) => {
        const updatedFormInputs: FormInputs = { ...prevFormInputs };
        for (const key in updatedFormInputs) {
          const value = updatedFormInputs[key as keyof FormInputs].value;
          const error = getErrorMessage(key as keyof FormInputs, value);
          updatedFormInputs[key as keyof FormInputs] = {
            value,
            error,
          };
        }
        return updatedFormInputs;
      });
    }
  };

  return (
    <div className="contact-bg">
      <section
        ref={containerRef}
        className={`contact ${isContainerVisible ? "visible" : ""}`}
        id="contact">
        <header className="contact__header">
          <h2 className="contact__title">Contact</h2>
          <p className="contact__desc">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </header>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className={`form ${isSubmitted && "submitted"}`}>
          <FormInput
            formInputs={formInputs}
            id="name"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            formInputs={formInputs}
            id="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            formInputs={formInputs}
            id="message"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <button type="submit" className="form__button">
            Send message
          </button>
        </form>
        {isSubmitted && (
          <p
            ref={submitMessageRef}
            aria-live="assertive"
            className={`submit-message ${
              isSubmitMessageVisible ? "show" : ""
            }`}>
            Thank you for your message. I will reply as soon as possible.
          </p>
        )}
      </section>
    </div>
  );
}
