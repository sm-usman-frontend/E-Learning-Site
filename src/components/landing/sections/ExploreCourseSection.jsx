import { FaGlobe, FaCompass, FaGraduationCap } from 'react-icons/fa'
import { CourseShelfRow } from '../ui'

// Assets for featured cards
import imageSeven from '../../../assets/images/image 7.png'
import imageEight from '../../../assets/images/image 8.png'
import imageTen from '../../../assets/images/image 10.png'

/**
 * ExploreCourseSection Component
 * Displays the "Explore Course" showcase featuring 3 category rows.
 * Each row includes a list of colorful stylized course book pills and
 * a highlighted featured course card sitting on a light shelf podium.
 */
export default function ExploreCourseSection() {
  // Standard course pills palette and data
  const row1LeftPills = [
    { id: '1-1', title: 'Ut Sed Eros', color: 'var(--landing-pill-orange)' },
    { id: '1-2', title: 'Curabitur Egestas', color: 'var(--landing-pill-coral)' },
    { id: '1-3', title: 'Quisque Conseq...', color: 'var(--landing-pill-brown)' },
    { id: '1-4', title: 'Cras Convallis', color: 'var(--landing-pill-yellow)' },
    { id: '1-5', title: 'Vestibulum fauch...', color: 'var(--landing-pill-purple)' },
    { id: '1-6', title: 'Ut Sed Eros', color: 'var(--landing-pill-blue)' },
    { id: '1-7', title: 'Vestibulum fauch...', color: 'var(--landing-pill-green)' },
  ]

  const row2LeftPills = [
    { id: '2-1', title: 'Ut Sed Eros', color: 'var(--landing-pill-orange)' },
    { id: '2-2', title: 'Curabitur Egestas', color: 'var(--landing-pill-coral)' },
    { id: '2-3', title: 'Quisque Consequat', color: 'var(--landing-pill-brown)' },
    { id: '2-4', title: 'Cras Convallis', color: 'var(--landing-pill-yellow)' },
  ]

  const row2RightPills = [
    { id: '2-5', title: 'Vestibulum faucibus', color: 'var(--landing-pill-teal)' },
    { id: '2-6', title: 'Ut Sed Eros', color: 'var(--landing-pill-blue)' },
    { id: '2-7', title: 'Vestibulum faucibus', color: 'var(--landing-pill-green)' },
  ]

  const row3LeftPills = [
    { id: '3-1', title: 'Ut Sed Eros', color: 'var(--landing-pill-orange)' },
  ]

  const row3RightPills = [
    { id: '3-2', title: 'Curabitur Egestas', color: 'var(--landing-pill-coral)' },
    { id: '3-3', title: 'Quisque Consequat', color: 'var(--landing-pill-brown)' },
    { id: '3-4', title: 'Cras Convallis', color: 'var(--landing-pill-yellow)' },
    { id: '3-5', title: 'Vestibulum faucibus', color: 'var(--landing-pill-teal)' },
    { id: '3-6', title: 'Ut Sed Eros', color: 'var(--landing-pill-blue)' },
    { id: '3-7', title: 'Vestibulum faucibus', color: 'var(--landing-pill-green)' },
  ]

  return (
    <section className="landing-section explore-courses-section" id="courses">
      <div className="explore-courses-container">
        {/* Section Header */}
        <div className="explore-courses-header">
          <h2 className="explore-courses-title">Explore Course</h2>
          <p className="explore-courses-subtitle">
              Ut sed eros finibus, placerat orci id, dapibus.
            </p>
          </div>

          {/* Row 1: Lorem Ipsum */}
          <CourseShelfRow
            icon={FaGlobe}
            title="Lorem Ipsum"
            seeAllHref="#see-all-lorem"
            leftPills={row1LeftPills}
            featuredCard={{
              image: imageSeven,
              imageAlt: 'Featured Course - Plate dish presentation',
              title: 'Integer id Orc Sed Ante Tincidunt',
              description:
                'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
              price: '$ 450',
              rating: 5,
              borderColor: 'var(--landing-teal)',
            }}
            rightPills={[]}
          />

          {/* Row 2: Quisque a Consequat */}
          <CourseShelfRow
            icon={FaCompass}
            title="Quisque a Consequat"
            seeAllHref="#see-all-quisque"
            leftPills={row2LeftPills}
            featuredCard={{
              image: imageEight,
              imageAlt: 'Featured Course - Night sky presentation',
              title: 'Integer id Orc Sed Ante Tincidunt',
              description:
                'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
              price: '$ 450',
              rating: 5,
              borderColor: 'var(--landing-card-border-pink)',
            }}
            rightPills={row2RightPills}
          />

          {/* Row 3: Aenean Facilisis */}
          <CourseShelfRow
            icon={FaGraduationCap}
            title="Aenean Facilisis"
            seeAllHref="#see-all-aenean"
            leftPills={row3LeftPills}
            featuredCard={{
              image: imageTen,
              imageAlt: 'Featured Course - Camera and photography',
              title: 'Integer id Orc Sed Ante Tincidunt',
              description:
                'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
              price: '$ 450',
              rating: 5,
              borderColor: 'var(--landing-card-border-cyan)',
            }}
            rightPills={row3RightPills}
          />
        </div>
      </section>
    )
  }
