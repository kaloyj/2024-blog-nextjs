"use client";

import { motion } from "motion/react";
import { ArrowDown, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog-posts";

interface HomeClientProps {
  latestPost?: BlogPost;
}

export default function HomeClient({ latestPost }: HomeClientProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-primary-950 to-dark-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - About Me */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Carlo Janea
              </h1>
              <h2 className="text-xl md:text-xl text-dark-300 mb-6">
                Frontend Engineer, Creative, and Experience Architect
                <br />
                <span className="text-primary-400">Barcelona, Spain</span>
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed mb-8">
               Hey! 👋🏻 It&apos;s Carlo, and this is my personal space for everything I need as a developer, creative, but mainly just as a person.
               It&apos;s like journaling, but publicly catered to be read by you, my invisible audience. So welcome, and i&apos;m glad you&apos;re here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/carlo-janea-2880a2132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 justify-center"
                >
                  <Linkedin size={20} />
                  Let&apos;s Connect
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 justify-center"
                >
                  <Mail size={20} />
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Latest Blog Spotlight */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                  Latest Article
                </span>
              </div>
              
              {latestPost ? (
                <>
                  <div className="mb-6">
                    <div className="h-32 relative rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={latestPost.image}
                        alt={latestPost.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                        {latestPost.category}
                      </span>
                      {latestPost.featured && (
                        <span className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {latestPost.title}
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed mb-4">
                      {latestPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-dark-400 mb-4">
                      <span>{new Date(latestPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                      <span>{latestPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${latestPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
                  >
                    Read Article
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-dark-300">No blog posts available yet.</p>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-left mt-16"
          >
            <ArrowDown size={32} className="text-primary-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                I&apos;m a passionate Frontend Engineer with expertise in modern web technologies. 
                I love creating beautiful, performant, and user-friendly applications that make a difference.
              </p>
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                Based in Barcelona, I work with cutting-edge technologies like React, Next.js, TypeScript, 
                and modern CSS frameworks to build exceptional digital experiences, and also integrating these with emerging AI technologies.
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                When I&apos;m not coding, you can find me introspecting about life, cooking dinners for friends, overanalyzing music and art, or just hanging out at home, reading.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                    7+ years of frontend development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                    Specialized in React ecosystem
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                    Key traits: communication and proactivity
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                    Human-first approach to everything 
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Development"]
              },
              {
                title: "Tools & Workflow",
                skills: ["Gitlab", "VS Code", "Figma", "Webpack", "Datadog"]
              },
              {
                title: "Backend & Others",
                skills: ["Node.js", "REST APIs", "GraphQL"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-dark-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-500"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {[
                {
                  period: "2022 - Present",
                  title: "Senior Frontend Engineer",
                  company: "Kiwi.com",
                  location: "Barcelona, Spain",
                  description: [
                    "Spearheaded implementation for SEM and commercial related experiments testing CTR and revenue impact across landing pages.",
                    "Automated costly manual workflows such as localization and urgent ad-hoc releases from stakeholders (mostly static pages such as legal, landing pages, etc)",
                    "Set up monitoring and optimized core web vitals and project health which covers setting up alerts and dashboards for tracking",
                    "Integrated AI tools to automate delivery for costly marketing campaigns, and introduced the workflow of using Figma MCP + Cursor to bootstrap initial UI development",
                    "Owned the technical responsibilities of the team's repository - code reviews, technical decisions, new tooling, practices, etc.",
                  ],
                  technologies: ["React", "Next.js", "TypeScript", "AI Integration"],
                  current: true
                },
                {
                  period: "2020 - 2022",
                  title: "Frontend Engineer",
                  company: "Caresharing, Inc",
                  location: "Cebu, Philippines / Netherlands", 
                  description: [
                    "Maintained and worked on a healthcare application used by majority of the hospitals in Holland.",
                    "One of the few pioneer devs to implement typescript and testing (jest, testing library, and backstopjs) on the frontend development for the project that I've worked on.",
                    "We used React and Ruby on Rails for the main stack, and Apollo GraphQL for server side state management, along with Context API and hooks for local state."
                  ],
                  technologies: ["React", "Ruby on Rails", "CSS Modules", "GraphQL"],
                  current: false
                },
                {
                  period: "2019 - 2020",
                  title: "Junior Frontend Developer",
                  company: "Fullscale",
                  location: "Cebu, Philippines",
                  description: [
                    "used React + Rails to create a drag and drop page builder application, and a virtual summit application",
                    "managed state locally with React hooks, and Redux on different projects",
                    "used RSpec and Cypress for testing"
                  ],
                  technologies: ["React", "Redux", "CSS3", "Cypress"],
                  current: false
                },
                {
                  period: "2018 - 2019",
                  title: "Web Developer Intern",
                  company: "Coding Avenue",
                  location: "Cebu, Philippines",
                  description: [
                    "Maintained and worked on a learning platform built on PHP + React",
                    "Learned the industry standars for Git, Javascript, and CSS"
                  ],
                  technologies: ["HTML", "CSS", "JavaScript", "Git"],
                  current: false
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10">
                    {job.current && (
                      <div className="absolute inset-0 bg-primary-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                          {job.period}
                        </span>
                        {job.current && (
                          <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="text-primary-400 font-semibold mb-1">{job.company}</div>
                      <div className="text-dark-400 text-sm mb-4">{job.location}</div>
                      
                      <div className="mb-4 space-y-3">
                        {job.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-dark-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span key={tech} className="bg-dark-700 text-dark-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {[
              {
                title: "Lamisa - Filipino Brunch Menu",
                description: "My dream Filipino brunch restaurant bringing traditional flavors to Barcelona. A passion project combining my love for Filipino cuisine, modern design, and creating spaces where people gather around the table to share food and stories.",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
                link: "/lamisa",
                isInternal: true
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-dark-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-primary-900 text-primary-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.isInternal ? (
                      <Link 
                        href={project.link}
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-semibold"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </Link>
                    ) : (
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        Coming Soon
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest from Blog</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-dark-300 text-lg">
              Thoughts on development, technology, personal projects, and life experiences
            </p>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  View All Articles
                  <ExternalLink size={16} />
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Get In Touch
                  <Mail size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-xl text-dark-300 mb-12">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:janeacarlo@gmail.com"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-3 justify-center"
              >
                <Mail size={20} />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/carlo-janea-2880a2132/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-3 justify-center"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-dark-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-dark-400">
            © 2025 Carlo Janea. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
