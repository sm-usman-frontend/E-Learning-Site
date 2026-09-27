import BlogCategoryCard from './ui/BlogCategoryCard'

// Assets for categories
import catUxUiImg from '../../assets/images/portrait-teacher-giving-online-class 1.png'
import catReactImg from '../../assets/images/image 11.png'
import catPhpImg from '../../assets/images/image 10.png'
import catJsImg from '../../assets/images/image 8.png'

/**
 * BlogCategoryListSection Component
 * Displays the "Reading blog list" category row with 4 frosted glass cards.
 */
export default function BlogCategoryListSection() {
  const categories = [
    {
      id: 'ux-ui',
      label: 'UX/UI',
      image: catUxUiImg,
      imageAlt: 'UX/UI Design workspace',
      href: '#category-ux-ui',
    },
    {
      id: 'react',
      label: 'React',
      image: catReactImg,
      imageAlt: 'React coding on laptop',
      href: '#category-react',
    },
    {
      id: 'php',
      label: 'PHP',
      image: catPhpImg,
      imageAlt: 'PHP development environment',
      href: '#category-php',
    },
    {
      id: 'javascript',
      label: 'JavaScript',
      image: catJsImg,
      imageAlt: 'JavaScript programming screen',
      href: '#category-javascript',
    },
  ]

  return (
    <section className="blog-categories-section">
      <div className="container">
        <div className="blog-categories-header mb-4">
          <h2 className="blog-categories-title">Reading blog list</h2>
        </div>

        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-6 col-md-3" key={cat.id}>
              <BlogCategoryCard
                image={cat.image}
                imageAlt={cat.imageAlt}
                label={cat.label}
                href={cat.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
