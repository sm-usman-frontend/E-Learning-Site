export default function FeatureRow({ reverse = false, visual, content, className = '' }) {
  const visualOrder = reverse ? 'order-lg-2 order-2' : 'order-lg-1 order-1'
  const contentOrder = reverse ? 'order-lg-1 order-1' : 'order-lg-2 order-2'

  return (
    <div className={`row align-items-center g-3 g-lg-4 feature-row ${className}`.trim()}>
      <div className={`col-lg-6 ${visualOrder}`}>{visual}</div>
      <div className={`col-lg-6 ${contentOrder}`}>{content}</div>
    </div>
  )
}
