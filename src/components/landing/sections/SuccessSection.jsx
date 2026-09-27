const stats = [
  { value: '15K+', label: 'Students' },
  { value: '75%', label: 'Total success' },
  { value: '35', label: 'Main questions' },
  { value: '26', label: 'Chief experts' },
  { value: '16', label: 'Years of experience' },
]

export default function SuccessSection() {
  return (
    <section className="landing-section success-section">
      <div className="container">
        <h2 className="success-section__title">Our Success</h2>
        <p className="success-section__subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <div className="row g-4 justify-content-center success-section__stats">
          {stats.map((item) => (
            <div className="col-6 col-md-4 col-lg" key={item.label}>
              <div className="stat-block">
                <span className="stat-block__value">{item.value}</span>
                <span className="stat-block__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
