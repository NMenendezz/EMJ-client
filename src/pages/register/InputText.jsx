
const InputText = ({ name, className, value, placeholder, onChange }) => {
  return (
    <input
            required
            type="text"
            name={name}
            id={name}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
          />
  )
}

export default InputText