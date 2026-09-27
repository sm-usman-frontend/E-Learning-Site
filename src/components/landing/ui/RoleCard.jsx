import ImageSlot from './ImageSlot'

export default function RoleCard({ title, buttonLabel, buttonVariant = 'ghost', imageClassName, imageSrc }) {
  return (
    <article className="role-card">
      <ImageSlot className={`role-card__media ${imageClassName || ''}`}>
        {imageSrc && <img src={imageSrc} alt="" />}
      </ImageSlot>
      <div className="role-card__overlay" />
      <div className="role-card__content">
        <h3 className="role-card__title">{title}</h3>
        <button
          type="button"
          className={
            buttonVariant === 'solid' ? 'btn-landing btn-landing--teal-solid' : 'btn-landing btn-landing--ghost-white'
          }
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}
