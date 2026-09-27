import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import {
  BlogHeroSection,
  BlogCategoryListSection,
  RelatedBlogSection,
  MarketingArticlesSection,
} from '../../components/blog'
import linaAvatar from '../../assets/images/portrait-teacher-giving-online-class 1.png'
import '../../styles/blog.css'

/**
 * BlogPage Component
 * Full Blog page incorporating light navbar with Lina profile,
 * Blog Hero post, Reading blog categories list, Related Blog carousel,
 * Marketing Articles grid, and dark SiteFooter.
 */
export default function BlogPage() {
  return (
    <div className="blog-page">
      <SiteHeader
        variant="light"
        user={{
          name: 'Lina',
          avatar: linaAvatar,
        }}
      />
      <main>
        <BlogHeroSection />
        <BlogCategoryListSection />
        <RelatedBlogSection />
        <MarketingArticlesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
