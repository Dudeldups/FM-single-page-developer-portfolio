import "./FormInput.less";

export default function FormInput({
  handleChange,
  id,
  formInputs,
}: FormInputProps) {
  const isTextArea = id === "message";
  const currentValue = formInputs[id as keyof FormInputs].value;
  const currentError = formInputs[id as keyof FormInputs].error;
  const isError = currentError !== "";
  const isValid = currentValue !== "" && !isError;

  return (
    <label
      htmlFor={id}
      className={`form__label ${isValid ? "valid" : isError ? "error" : ""}`}>
      <span className="sr-only">{id}</span>
      {isTextArea ? (
        <textarea
          rows={4}
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
          value={currentValue}
          className="form__input"></textarea>
      ) : (
        <input
          type="text"
          placeholder={id}
          name={id}
          id={id}
          onChange={handleChange}
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
