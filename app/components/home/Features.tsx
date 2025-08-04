
import {
  Users2Icon,
  LinkIcon,
  LayoutDashboardIcon,
  CreditCardIcon,
  FileTextIcon,
  UserPlusIcon,
} from 'lucide-react'
export const Features = () => {


  const features = [
    {
      icon: <Users2Icon size={24} className="text-blue-400" />,
      title: 'Client Management',
      description:
        'Comprehensive system for tracking client purchases, preferences, and history in one unified interface.',
    },
    {
      icon: <LinkIcon size={24} className="text-violet-400" />,
      title: 'Realtor Connections',
      description:
        'Seamlessly link realtors to clients with automated commission disbursement for direct and referral sales.',
    },
    {
      icon: <LayoutDashboardIcon size={24} className="text-indigo-400" />,
      title: 'Role-Based Dashboards',
      description:
        'Tailored experiences for Admins, Realtors, and Clients with relevant metrics and controls.',
    },
    {
      icon: <CreditCardIcon size={24} className="text-blue-400" />,
      title: 'Flexible Payment Plans',
      description:
        'Support for full payments, installment plans, and automated tracking of down payments and schedules.',
    },
    {
      icon: <FileTextIcon size={24} className="text-violet-400" />,
      title: 'Document Processing',
      description:
        'Streamlined workflows for document management with progress tracking and automated notifications.',
    },
    {
      icon: <UserPlusIcon size={24} className="text-indigo-400" />,
      title: 'Seamless Onboarding',
      description:
        'Intuitive sign-up flows and onboarding processes for all user types with guided setup assistance.',
    },
  ]
  return (
    <section id="features" className="pb-24 md:pb-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute left-0 bottom-20 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform delivers everything real estate companies need to
            streamline operations and maximize growth.
          </p>
        </div>
        <div
        
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-900/30 backdrop-blur-lg border border-gray-800/30 rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5  translate-y-8"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md rounded-lg w-14 h-14 flex items-center justify-center mb-5 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
