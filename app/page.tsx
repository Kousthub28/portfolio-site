"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import SkillBar from "@/components/skill-bar"
import Timeline from "@/components/timeline"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl mx-auto text-center"
>
  <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
    <AnimatedText text="Kousthub D.G" />
  </h1>
  <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
    Computer Science Engineering Student
  </h2>
  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
    Passionate about applying theoretical knowledge to real-world challenges and driving technological
    advancements.
  </p>

  {/* Explore Button */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mb-6">
    <Link
      href="#about"
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
    >
      Explore My Work
    </Link>
  </motion.div>

  {/* Social Buttons */}
  <div className="flex justify-center gap-4">
    <Link
      href="https://github.com/Kousthub28"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-5 rounded-full"
    >
      GitHub
    </Link>
    <Link
      href="https://www.linkedin.com/in/kousthubdg"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full"
    >
      LinkedIn
    </Link>
  </div>
</motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown className="h-8 w-8 text-emerald-600" />
          </motion.div>
          
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm Kousthub D.G, a passionate Computer Science Engineering student with a strong foundation in
                    programming and problem-solving. I'm very eager to learn and a quick adapter to new technologies and
                    environments.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    Currently on the path of expanding my knowledge and finding ways to apply it in practical and
                    professional settings. I believe in continuous learning and growth, both personally and
                    professionally.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    As a dedicated engineering student, I am passionate about applying theoretical knowledge to
                    real-world challenges. I am eager to leverage my engineering expertise to contribute to cutting-edge
                    projects and drive technological advancements in the field.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Personal Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="font-medium mr-2">Date of Birth:</span> 28/09/2004
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Phone className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>xxxxxxxxx</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <Mail className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>kousthubdg28@gmail.com</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Banglore, Karnataka</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Professional Goals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="h-5 w-5 rounded-full bg-emerald-500 mr-3 mt-1 flex-shrink-0"></div>
                      <p>Develop expertise in AI and machine learning technologies to create innovative solutions</p>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="h-5 w-5 rounded-full bg-emerald-500 mr-3 mt-1 flex-shrink-0"></div>
                      <p>Contribute to open-source projects and collaborate with the developer community</p>
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="h-5 w-5 rounded-full bg-emerald-500 mr-3 mt-1 flex-shrink-0"></div>
                      <p>Build scalable and efficient software solutions that solve real-world problems and websites</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Personality Traits</h3>
                  <ul className="space-y-4">
                    {[
                      "Dedicated work ethic",
                      "Teamwork",
                      "Problem-Solving",
                      "Communication and presentation skills",
                    ].map((trait, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                      >
                        <div className="h-3 w-3 rounded-full bg-emerald-500 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-200">{trait}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mt-6">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Languages</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["English", "Kannada", "Hindi", "Telugu"].map((language, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
                      >
                        <span className="text-gray-700 dark:text-gray-200">{language}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mt-6">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Education</h3>
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        Bachelor of Engineering in Computer Science
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">BNM Institute of Technology, Bangalore</p>
                      <p className="text-emerald-600 dark:text-emerald-400">CGPA: 9.03 (5th SEM)</p>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">Pre-University Education</h4>
                      <p className="text-gray-600 dark:text-gray-300">Vidya Jyothi Pre-University, Kolar</p>
                      <p className="text-emerald-600 dark:text-emerald-400">Percentage: 92.3%</p>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">Secondary Education</h4>
                      <p className="text-gray-600 dark:text-gray-300">Jnana Bodhini English Medium School, Pavagada</p>
                      <p className="text-emerald-600 dark:text-emerald-400">Percentage: 95.68%</p>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Programming Languages</h3>
                <div className="space-y-6">
                  <SkillBar skill="C" percentage={85} />
                  <SkillBar skill="Java" percentage={85} />
                  <SkillBar skill="SQL" percentage={80} />
                  <SkillBar skill="Python" percentage={80} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Front End Development</h3>
                <div className="space-y-6">
                  <SkillBar skill="HTML" percentage={90} />
                  <SkillBar skill="CSS" percentage={85} />
                  <SkillBar skill="PHP" percentage={70} />
                  <SkillBar skill="Reactjs" percentage={70} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
              Certificates & Experience
            </h2>
            <Timeline
              items={[
                {
                  title: "Master the C Language",
                  organization: "Udemy",
                  period: "Certificate",
                  description: "Comprehensive course covering C programming fundamentals and advanced concepts.",
                },
                {
                  title: "Mastering the Java",
                  organization: "BNMIT",
                  period: "Certificate",
                  description: "In-depth Java programming course covering core concepts and application development.",
                },
                {
                  title: "AI/ML Internship",
                  organization: "ShadowFox",
                  period: "Certificate",
                  description: "Worked on Real-Time AI-ML Projects",
                },
                {
                  title: "Gen AI Internship",
                  organization: "Pantech Solutions",
                  period: "Internship",
                  description: "Worked on Generative AI projects and applications.",
                },
                {
                  title: "Web Development",
                  organization: "Codsoft",
                  period: "Virtual Internship",
                  description: "Developed responsive web applications using modern technologies.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Airline Reservation System"
                description="Developed a Swing-based airline reservation system in Java, managing passenger details, flight selection, seat availability, and payment processing."
                technologies={["Java", "Swing", "Database Management"]}
              />
              <ProjectCard
                title="Employee Data Analysis"
                description="Built a data-driven Employee Analytics platform using Streamlit, Python, and machine learning for attrition analysis, salary prediction, and clustering."
                technologies={["Python", "Streamlit", "Machine Learning"]}
              />
              <ProjectCard
                title="Real Time Chat Application"
                description="Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js) with WebSocket integration for instant messaging."
                technologies={["MongoDB", "Express.js", "React", "Node.js", "WebSocket"]}
              />
              <ProjectCard
                title="Share Fusion"
                description="Built a cloud-based file and text transfer system using Firebase and Cloudinary for real-time syncing, secure uploads, and seamless sharing."
                technologies={["JavaScript","CSS","HTML"]}
              />
              <ProjectCard
                title="AI-Task-Allocation"
                description="Built an AI-powered task allocation system that intelligently assigns tasks based on user roles, priorities, and workload using machine learning and automation logic"
                technologies={["Python","Streamlit","Machine Learning"]}
              />
              <ProjectCard
                title="Enhanced-Summarizer-Imagegen-Translation"
                description="Developed a multi-modal AI app integrating text summarization, image generation, translation, and audio playback using T5, Stable Diffusion, and Google TTS for enhanced user interaction."
                technologies={["Python","Gradio"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
              Get In Touch
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-emerald-600" />
                      <span className="text-gray-700 dark:text-gray-200">8217665155</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-emerald-600" />
                      <span className="text-gray-700 dark:text-gray-200">kousthubdg28@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-emerald-600" />
                      <span className="text-gray-700 dark:text-gray-200">Bangalore, Karnataka</span>
                    </div>
                  </div>
                </div>
                <div>
                <form
  action="https://formsubmit.co/kousthubdg28@gmail.com  "
  method="POST"
  className="space-y-4"
>
  

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"  // ✅ Add name for FormSubmit to capture
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"  // ✅ Add name for FormSubmit to capture
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"  // ✅ Add name for FormSubmit to capture
      rows={4}
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    ></textarea>
  </div>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
    type="submit"
  >
    Send Message
  </motion.button>
</form>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
        <p>© {new Date().getFullYear()} Kousthub D.G. All rights reserved.</p>
      </footer>
    </main>
  )
}
