import "./FormInput.less";

export default function FormInput({
  handleChange,
  handleBlur,
  id,
  formInputs,
}: FormInputProps) {
  const isTextArea = id === "message";
  const currentValue = formInputs[id as keyof FormInputs].value;
  const currentError = formInputs[id as keyof FormInputs].error;
  const isError = currentError.length > 5; // more characters than "valid" :P

  return (
    <label
      htmlFor={id}
      className={`form__label ${
        currentError === "valid" ? "valid" : isError ? "error" : ""
      }`}>
      <span className="sr-only">{id}</span>
      {isTextArea ? (
        <textarea
          rows={4}
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={currentValue}
          className="form__input"></textarea>
      ) : (
        <input
          type="text"
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={currentValue}
          className="form__input"
        />
      )}
      {isError && (
        <p aria-live="assertive" className="form__error">
          {currentError}
        </p>
      )}
    </label>
  );
}
