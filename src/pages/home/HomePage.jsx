import SiteHeader from '../../components/layout/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter'
import {
  AssessmentsSection,
  ClassManagementSection,
  ClassroomSection,
  CloudSoftwareSection,
  DiscussionsSection,
  ExploreCourseSection,
  HeroSection,
  LatestNewsSection,
  OurFeaturesSection,
  SuccessSection,
  TestimonialsSection,
  ToolsSection,
  WhatIsTotcSection,
} from '../../components/landing/sections'

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__hero-wrap">
        <SiteHeader />
        <HeroSection />
      </div>
      <main>
        <SuccessSection />
        <CloudSoftwareSection />
        <WhatIsTotcSection />
        <ClassroomSection />
        <OurFeaturesSection />
        <ToolsSection />
        <AssessmentsSection />
        <ClassManagementSection />
        <DiscussionsSection />
        <ExploreCourseSection />
        <TestimonialsSection />
        <LatestNewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
