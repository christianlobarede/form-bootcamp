import React, { useState } from "react";

const Form = () => {
  const users = [];
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {
      nombre: name,
      apellido: lastName,
      email: email,
      contraseña: password,
    };
    users.push(newUser);
    console.log("Welcom", newUser);
    console.log(users);
  };
  const handleName = (e) => {
    setName(e.target.value);
    e.target.value.length < 3
      ? setNameError("El nombre debe contener al menos 3 caracteres")
      : setNameError("");
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.target.value.length < 3
      ? setLastNameError("El nombre debe contener al menos 3 caracteres")
      : setLastNameError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value.length < 5
      ? setEmailError("El correo debe contener al menos 5 caracteres")
      : setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.value.length < 5
      ? setPasswordError("La contraseña debe contener al menos 5 caracteres")
      : setPasswordError("");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    e.target.value !== password
      ? setConfirmPasswordError("Las contraseñas debe coincidir")
      : setConfirmPasswordError("");
  };

  return (
    <div className="form">
      <form onSubmit={createUser}>
        <div className="input">
          <label htmlFor="name">Nombre: </label>
          <input
            className="input-data"
            onChange={handleName}
            type="text"
            name="name"
          />
          {nameError ? <p>{nameError}</p> : ""}
        </div>
        <div className="input">
          <label htmlFor="lastName">Apellido:</label>
          <input
            className="input-data"
            onChange={handleLastName}
            type="text"
            name="lastName"
          />
          {lastNameError ? <p>{lastNameError}</p> : ""}
        </div>
        <div className="input">
          <label htmlFor="email">Email: </label>
          <input
            className="input-data"
            onChange={handleEmail}
            type="email"
            name="email"
          />
          {emailError ? <p>{emailError}</p> : ""}
        </div>
        <div className="input">
          <label htmlFor="password">Contraseña</label>
          <input
            className="input-data"
            onChange={handlePassword}
            type="password"
            name="password"
          />
          {passwordError ? <p>{passwordError}</p> : ""}
        </div>
        <div className="input">
          <label htmlFor="confirmPasword">Confirme su contraseña</label>
          <input
            className="input-data"
            onChange={handleConfirmPassword}
            type="password"
            name="confirmPassword"
          />
          {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
