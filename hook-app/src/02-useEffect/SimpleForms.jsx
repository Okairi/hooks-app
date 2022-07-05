import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForms = () => {
  const [formState, setformState] = useState({
    username: "alex",
    email: "alex@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setformState({ ...formState, [name]: value });
  };

  useEffect(() => {
    /* console.log("use efect"); */
  }, []);

  useEffect(() => {
    /* console.log("formState change"); */
  }, [formState]);

  useEffect(() => {
    /* console.log("Email change"); */
  }, [email]);

  return (
    <>
      <h1>Simple forms</h1>
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

      {username === "strider2" && <Message />}
    </>
  );
};
