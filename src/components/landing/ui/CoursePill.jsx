/**
 * CoursePill Component
 * Represents a stylized vertical course pill/spine with custom background color,
 * vertical rotated label, and outer pill border matching the design.
 */
export default function CoursePill({
  title,
  color,
  textColor = '#ffffff',
  className = '',
  onClick,
}) {
  return (
    <div
      className={`course-pill-wrapper ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      title={title}
    >
      <div className="course-pill-halo">
        <div
          className="course-pill-inner"
          style={{ backgroundColor: color, color: textColor }}
        >
          <div className="course-pill-spines" aria-hidden="true">
            <span className="course-pill-notch" />
            <span className="course-pill-notch" />
          </div>
          <span className="course-pill-title">{title}</span>
        </div>
      </div>
    </div>
  )
}
