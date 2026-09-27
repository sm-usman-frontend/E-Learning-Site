export default function SectionHeading({
  title,
  highlight,
  highlightFirst = false,
  subtitle,
  className = '',
  centered = true,
}) {
  return (
    <header className={`section-heading ${centered ? 'section-heading--center' : ''} ${className}`.trim()}>
      <h2 className="section-heading__title">
        {highlightFirst && highlight ? (
          <>
            <span className="text-teal">{highlight}</span>
            {title}
          </>
        ) : highlight ? (
          <>
            {title}
            <span className="text-teal">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  )
}
