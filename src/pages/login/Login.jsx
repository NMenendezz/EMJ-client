import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import InputText from "../register/InputText";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const { currentUser, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      setInputs({
        username: "",
        password: "",
      });
      setError(null);
      navigate("/");
    } catch (err) {
      setInputs({
        username: "",
        password: "",
      });
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        {!currentUser && (
          <>
            <h1 className="login__title">Login</h1>
            <form className="login__form">
              <InputText
                name="username"
                className="login__username"
                value={inputs.username}
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className="login__password"
                value={inputs.password}
                onChange={handleChange}
              />
              <button className="login__btn" onClick={handleSubmit}>
                Login
              </button>
              {err && (
                <span className="login__error">Ha ocurrido un error</span>
              )}
            </form>
          </>
        )}
        <span className="login__return">
          <Link to={"/"}>Volver a Inicio</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
