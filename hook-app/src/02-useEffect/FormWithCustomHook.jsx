import { useEffect } from "react";

import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, username, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1> Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username} //alex11
        onChange={onInputChange}
      />
      <hr />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="alessandro@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
