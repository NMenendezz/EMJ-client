import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputText from "./InputText";

const apiUrl = process.env.REACT_APP_API_URL;

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/auth/register`, inputs);
      setInputs({
        username: "",
        firstname: "",
        lastname: "",
        password: "",
      });
      navigate("/login");
      setMessage(res.data);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (err) {
      setInputs({
        username: "",
        firstname: "",
        lastname: "",
        password: "",
      });
      setError(err.response.data);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1 className="register__title">Registrarse</h1>
        <form className="register__form">
          <InputText
            name="username"
            className="register__text"
            value={inputs.username}
            placeholder="Nombre de usuario"
            onChange={handleChange}
          />
          <InputText
            name="firstname"
            className="register__text"
            value={inputs.firstname}
            placeholder="Nombre"
            onChange={handleChange}
          />
          <InputText
            name="lastname"
            className="register__text"
            value={inputs.lastname}
            placeholder="Apellidos"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            className="register__password"
            value={inputs.password}
            onChange={handleChange}
          />
          <button className="register__btn" onClick={handleSubmit}>
            Registrarse
          </button>
          {err && <span className="register__message register__error">Ha ocurrido un error</span>}
          {message && (
            <span className="register__message register__success">
              Usuario registrado con éxito
            </span>
          )}
        </form>
        <span className="register__return">
          <Link to={"/"}>Volver a Inicio</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
