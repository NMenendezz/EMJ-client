const Button = ({ type, name, id, className, onClick, value }) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      className={className}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button