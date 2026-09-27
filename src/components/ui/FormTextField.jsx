import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function FormTextField({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  showPasswordToggle = false,
  autoComplete,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const isPasswordField = type === 'password' || showPasswordToggle
  const inputType =
    isPasswordField && showPasswordToggle
      ? passwordVisible
        ? 'text'
        : 'password'
      : type

  return (
    <div className="form-text-field">
      <label className="form-text-field__label" htmlFor={id}>
        {label}
      </label>
      <div className="form-text-field__wrapper">
        <input
          className={`form-text-field__input${showPasswordToggle ? ' form-text-field__input--with-icon' : ''}`}
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="form-text-field__toggle"
            onClick={() => setPasswordVisible((visible) => !visible)}
            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  )
}
