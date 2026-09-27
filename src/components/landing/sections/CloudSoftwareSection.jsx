import { FaCalendarAlt, FaFileAlt, FaUsers } from 'react-icons/fa'
import { CloudFeatureCard, SectionHeading } from '../ui'

const cards = [
  {
    icon: <FaFileAlt />,
    iconBgClass: 'bg-icon-purple',
    title: 'Online Billing, Invoicing, & Contracts',
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: <FaCalendarAlt />,
    iconBgClass: 'bg-icon-teal',
    title: 'Easy Scheduling & Attendance Tracking',
    description:
      'Schedule and reserve classrooms at one campus or multple campuses. Keep detailed records of student attendance',
  },
  {
    icon: <FaUsers />,
    iconBgClass: 'bg-icon-blue',
    title: 'Customer Tracking',
    description:
      'Automate and keep track of customer journeys and keep a record of their preferences and how they interact with your business',
  },
]

export default function CloudSoftwareSection() {
  return (
    <section className="landing-section cloud-section">
      <div className="container">
        <SectionHeading
          title="All-In-One "
          highlight="Cloud Software."
          subtitle="TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office."
        />
        <div className="row g-4 g-lg-5">
          {cards.map((card) => (
            <div className="col-md-4" key={card.title}>
              <CloudFeatureCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
