export default function PrimaryButton({ children, type = 'button', onClick }) {
  return (
    <button type={type} className="primary-button" onClick={onClick}>
      {children}
    </button>
  )
}
