import { RoleCard, SectionHeading } from '../ui'
import instructorImage from '../../../assets/images/Rectangle 19.png'
import studentImage from '../../../assets/images/Rectangle 21.png'

export default function WhatIsTotcSection() {
  return (
    <section className="landing-section what-totc-section" id="about">
      <div className="container what-totc-section__container">
        <SectionHeading
          title="What is "
          highlight="TOTC?"
          subtitle="TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
        />
        <div className="row g-4 g-xl-5">
          <div className="col-md-6">
            <RoleCard
              title="FOR INSTRUCTORS"
              buttonLabel="Start a class today"
              buttonVariant="ghost"
              imageClassName="role-card__media--instructors"
              imageSrc={instructorImage}
            />
          </div>
          <div className="col-md-6">
            <RoleCard
              title="FOR STUDENTS"
              buttonLabel="Enter access code"
              buttonVariant="solid"
              imageClassName="role-card__media--students"
              imageSrc={studentImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
