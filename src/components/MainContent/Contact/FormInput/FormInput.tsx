import "./FormInput.less";

export default function FormInput({
  handleChange,
  id,
  formInputs,
}: FormInputProps) {
  const isTextArea = id === "message";
  return (
    <label htmlFor={id} className="form__label">
      <span className="sr-only">{id}</span>
      {isTextArea ? (
        <textarea
          rows={4}
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
          value={formInputs[id as keyof FormInputs].value}
          className="form__input"></textarea>
      ) : (
        <input
          type="text"
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
          value={formInputs[id as keyof FormInputs].value}
          className="form__input"
        />
      )}
      {formInputs[id as keyof FormInputs].error !== "" && (
        <p aria-live="assertive" className="form__error">
          {formInputs[id as keyof FormInputs].error}
        </p>
      )}
    </label>
  );
}
