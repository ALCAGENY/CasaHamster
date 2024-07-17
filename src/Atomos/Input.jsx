

export function InputT(props) {
  const { type, placeholder, value, onChange, className = "" } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border-b-2 border-solid border-gray-300 bg-transparent text-white outline-none mt-2 ${className}`}

    />
  );
}


