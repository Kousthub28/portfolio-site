"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-500 z-10 shadow-lg"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{item.organization}</p>
                  <div className="inline-block px-3 py-1 mb-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm rounded-full">
                    {item.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
