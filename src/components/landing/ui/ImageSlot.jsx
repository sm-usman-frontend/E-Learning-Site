/**
 * Background image container — add your file under public/images/home/
 * Example: <img src="/images/home/hero-main.jpg" alt="" className="image-slot__img" />
 */
export default function ImageSlot({ className = '', children }) {
  return (
    <div className={`image-slot ${className}`.trim()}>
      {/* adr image rakhoo */}
      {children}
    </div>
  )
}
