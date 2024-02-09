import { useForm, SubmitHandler } from 'react-hook-form'
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import Button from '../components/button/Button';

const Login = () => {
  const { login, logout } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    login(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      <input {...register('password', { required: true })} />
      <Button type='submit' value='Iniciar Sesion' />
    </form>
    <button onClick={logout}>Cerrar sesión</button>
    </>
  )
}

export default Login
