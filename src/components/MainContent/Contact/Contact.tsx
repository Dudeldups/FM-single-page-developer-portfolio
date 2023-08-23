import "./Contact.less";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  return (
    <section className="contact" id="contact">
      <header className="contact__header">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__desc">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </header>
      <form action="#" method="POST" className="form">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          className="form__input"
          required
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          className="form__input"
          required
        />

        <label htmlFor="message" className="sr-only">
          Name
        </label>
        <textarea
          rows={4}
          placeholder="message"
          name="message"
          id="message"
          className="form__input"
          required></textarea>

        <button type="submit" className="form__button">
          Send message
        </button>
      </form>
    </section>
  );
}
