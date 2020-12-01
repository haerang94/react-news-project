import { useState, useCallback, ChangeEvent, FormEvent } from "react";

const initialForm = { id: "", password: "", message: "" };

function useInputs() {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("??");
    console.log(form.id, form.password);
    if (form.id !== "alyce") {
      setForm((form) => ({ ...form, message: "아이디가 다릅니다." }));
      return;
    } else if (form.password !== "alyce123") {
      setForm((form) => ({ ...form, message: "비밀번호가 다릅니다." }));
      return;
    } else {
      setForm((form) => initialForm);
      alert("로그인되었습니다.");
      localStorage.setItem("id", form.id);
      localStorage.setItem("password", form.password);
      localStorage.setItem("bookmark", JSON.stringify([]));
      return true;
    }
  };

  return { form, onChange, onSubmit };
}

export default useInputs;
