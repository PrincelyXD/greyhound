
import {
  Users2Icon,
  LayoutDashboardIcon,
  CodeIcon,
  SmartphoneIcon,
  RocketIcon,
  LayersIcon,
} from 'lucide-react'
export const Features = () => {


 const features = [
    {
      icon: <SmartphoneIcon size={24} className="text-blue-400" />,
      title: 'Mobile-First Development',
      description:
        'Crafting seamless, high-performance mobile applications for iOS and Android with modern frameworks and design systems.',
    },
    {
      icon: <CodeIcon size={24} className="text-violet-400" />,
      title: 'Custom Web Solutions',
      description:
        'Building scalable, secure, and interactive web applications tailored to your business needs and growth strategy.',
    },
    {
      icon: <LayersIcon size={24} className="text-indigo-400" />,
      title: 'Scalable Architecture',
      description:
        'Future-proof systems built with microservices, cloud infrastructure, and APIs that grow alongside your business.',
    },
    {
      icon: <RocketIcon size={24} className="text-blue-400" />,
      title: 'Product Launch & MVPs',
      description:
        'Rapidly bring ideas to life with well-designed minimum viable products that are ready for testing and scaling.',
    },
    {
      icon: <LayoutDashboardIcon size={24} className="text-violet-400" />,
      title: 'Interactive Dashboards',
      description:
        'Data-rich, visually appealing dashboards that provide actionable insights for teams and stakeholders.',
    },
    {
      icon: <Users2Icon size={24} className="text-indigo-400" />,
      title: 'Collaborative Project Management',
      description:
        'Streamlined team collaboration and client communication with role-based access and real-time updates.',
    },
   
  ];
  
  return (
    <section id="features" className="p-24 md:p-32 relative">
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
    Build and launch digital products faster with tools and solutions designed
    to scale seamlessly—whether for web, mobile, or enterprise software.
  </p>
</div>

        <div
        
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-900/30 backdrop-blur-lg border border-gray-800/30 rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/10   translate-y-8"
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
