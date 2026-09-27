import MarketingArticleCard from './ui/MarketingArticleCard'

// Assets
import linaAvatar from '../../assets/images/portrait-teacher-giving-online-class 1.png'
import articleImgOne from '../../assets/images/image 10.png'
import articleImgTwo from '../../assets/images/portrait-teacher-giving-online-class 1.png'
import articleImgThree from '../../assets/images/confident-teacher-explaining-lesson-pupils 1.png'
import articleImgFour from '../../assets/images/Rectangle 21.png'

/**
 * MarketingArticlesSection Component
 * Displays the "Marketing Articles" section with 4 article cards.
 */
export default function MarketingArticlesSection() {
  const articles = [
    {
      id: 'mktg-1',
      image: articleImgOne,
      imageAlt: 'Young girl studying with tablet',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: { name: 'Lina', avatar: linaAvatar },
      originalPrice: '$100',
      discountPrice: '$80',
    },
    {
      id: 'mktg-2',
      image: articleImgTwo,
      imageAlt: 'Student listening on headset',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: { name: 'Lina', avatar: linaAvatar },
      originalPrice: '$100',
      discountPrice: '$80',
    },
    {
      id: 'mktg-3',
      image: articleImgThree,
      imageAlt: 'Laptop conference with colleagues',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: { name: 'Lina', avatar: linaAvatar },
      originalPrice: '$100',
      discountPrice: '$80',
    },
    {
      id: 'mktg-4',
      image: articleImgFour,
      imageAlt: 'Interactive virtual lecture screen',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      author: { name: 'Lina', avatar: linaAvatar },
      originalPrice: '$100',
      discountPrice: '$80',
    },
  ]

  return (
    <section className="marketing-articles-section">
      <div className="container">
        {/* Section Header */}
        <div className="marketing-articles-header">
          <h2 className="marketing-articles-title">Marketing Articles</h2>
          <a href="#see-all-marketing" className="marketing-articles-see-all">
            See all
          </a>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-12 col-sm-6 col-lg-3" key={article.id}>
              <MarketingArticleCard
                image={article.image}
                imageAlt={article.imageAlt}
                category={article.category}
                duration={article.duration}
                title={article.title}
                description={article.description}
                author={article.author}
                originalPrice={article.originalPrice}
                discountPrice={article.discountPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
