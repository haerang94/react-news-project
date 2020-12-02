import { useState, useCallback, ChangeEvent, FormEvent } from "react";

const initialForm = { id: "", password: "", message: "" };

function useInputs() {
  const [form, setForm] = useState(initialForm);
  // input change 및 폼 제출 custom hook
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  회원가입 validation
    if (form.id !== "alyce") {
      setForm((form) => ({ ...form, message: "아이디가 다릅니다." }));
      return;
    } else if (form.password !== "alyce123") {
      setForm((form) => ({ ...form, message: "비밀번호가 다릅니다." }));
      return;
    } else {
      // 정보 저장 및 메인페이지 이동 (리턴값 true)
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
