import { useState, useCallback, ChangeEvent, FormEvent } from "react";

function useInputs() {
  const [form, setForm] = useState({ id: "", password: "", message: null });
  
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return { form, onChange, onSubmit };
}

export default useInputs;
