'use client'


import React, {  useState, useRef } from 'react'
import { CheckIcon } from 'lucide-react'
import { servicePlans } from '@/lib/utils'
export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)
const pricingRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={pricingRef} id="pricing" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute right-0 bottom-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Choose the plan that’s right for your real estate business.
          </p>
          <div className="inline-flex items-center bg-gray-900/50 backdrop-blur-lg p-1.5 rounded-xl border border-gray-800/30 mb-10">
            <button
              className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${isAnnual ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25' : 'text-gray-300'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (20% off)
            </button>
            <button
              className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${!isAnnual ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25' : 'text-gray-300'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePlans.map((plan, index) => (
            <div
              key={index}
              className={`
                price-card rounded-xl h-full flex flex-col translate-y-8 transition-all duration-700
                ${plan.highlighted ? 'bg-gradient-to-b from-violet-900/30 to-gray-900/80 backdrop-blur-xl border border-violet-500/30 shadow-lg shadow-violet-500/10' : 'bg-gray-900/30 backdrop-blur-lg border border-gray-800/30'}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-300 ml-2">/ month</span>
                  {isAnnual && (
                    <p className="text-sm text-violet-400 mt-1">
                      Billed annually
                    </p>
                  )}
                </div>
                <ul className="mb-8 space-y-3.5 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className={`
                        w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0
                        ${plan.highlighted ? 'bg-violet-500' : 'bg-indigo-500'}
                      `}
                      >
                        <CheckIcon size={14} className="text-white" />
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-8 pt-0">
                <button
                  className={`
                    w-full py-3.5 rounded-lg transition-all duration-300 font-medium relative overflow-hidden group
                    ${plan.highlighted ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/25' : 'bg-gray-800/70 backdrop-blur-lg text-white border border-gray-700/50'}
                  `}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.highlighted && (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 backdrop-blur-md opacity-20"></span>
                    </>
                  )}
                  {!plan.highlighted && (
                    <span className="absolute inset-0 bg-gray-700/50 rounded-lg  group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
