type ProjectsData = {
  title: string;
  image: string;
  techStack: string[];
  projectLink: string;
  codeLink: string;
};

type Input = {
  value: string;
  error: string;
};

type FormInputs = {
  name: Input;
  email: Input;
  message: Input;
};

type FormInputProps = {
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  id: FormData[typeof name];
  formInputs: FormInputs;
};
