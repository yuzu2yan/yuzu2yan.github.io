"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Trophy, Rocket, Music, Target } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const projects = [
  {
    title: "NASA Space Apps Challenge 2024",
    description: "I created a web application that visualizes the relationship between GHG emission factors and global warming.",
    award: "Tokyo Venue Special Award!",
    icon: Trophy,
    color: "from-yellow-400 to-amber-600",
    image: "/images/nasa_space_apps.png",
    link: "https://github.com/yuzu2yan/GHG_Atlas",
    tags: ["Web App", "Climate Tech", "Visualization"]
  },
  {
    title: "ARLISS 2024",
    description: "We developed CanSat, a mock-up satellite, and participated in a satellite launch experiment in Nevada, USA",
    icon: Rocket,
    color: "from-blue-400 to-indigo-600",
    image: "/images/arliss2024.jpg",
    link: "https://github.com/yuzu2yan/ARLISS2024",
    tags: ["Robotics", "Satellite", "Hardware"]
  },
  {
    title: "Builder Weekend 2024",
    description: "We developed AI-coustic, an application that generates images from text and creates music from the space of those images.",
    award: "Rebase Prized!",
    icon: Music,
    color: "from-purple-400 to-pink-600",
    image: "/images/builder-weekend.jpg",
    link: "https://github.com/yuzu2yan/ARLISS2024",
    tags: ["AI", "Music", "Creative Tech"]
  },
  {
    title: "Tanegashima Rocket Contest 2024",
    description: "The project simulated sample collection and controlled multiple units with ROS and markers.",
    award: "3rd place in the mission division!",
    icon: Target,
    color: "from-green-400 to-teal-600",
    image: "/images/tanegashima-mission.jpg",
    link: "https://github.com/yuzu2yan/Tanegashima_Rocket_Contest_2024_Mission",
    tags: ["ROS", "Robotics", "Competition"]
  }
]

export default function Works() {
  return (
    <section id="works" className="py-24 bg-white relative overflow-hidden">
      <style jsx global>{`
        .works-swiper {
          padding: 20px 40px 60px 40px;
          cursor: grab;
        }
        .works-swiper:active {
          cursor: grabbing;
        }
        .works-swiper .swiper-slide {
          height: auto;
          width: 320px;
        }
        .works-swiper .swiper-button-prev,
        .works-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .works-swiper .swiper-button-prev:hover,
        .works-swiper .swiper-button-next:hover {
          background: #1890ff;
          transform: scale(1.1);
        }
        .works-swiper .swiper-button-prev:hover::after,
        .works-swiper .swiper-button-next:hover::after {
          color: white;
        }
        .works-swiper .swiper-button-prev::after,
        .works-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
          color: #1890ff;
        }
        .works-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .works-swiper .swiper-pagination-bullet-active {
          background: #1890ff;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Recent Works
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
            Swipe through my latest projects and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            centeredSlides={false}
            grabCursor={true}
            freeMode={{
              enabled: true,
              sticky: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            navigation={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination, FreeMode, Mousewheel]}
            className="works-swiper"
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        className={`bg-gradient-to-r ${project.color} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}
                      >
                        {project.award}
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-neutral-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-neutral-800 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-accent hover:text-accent-dark font-medium text-sm group/link mt-4"
                    >
                      View Project
                      <ExternalLink size={16} className="ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/yuzu2yan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-accent text-accent font-medium rounded-full hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View All Projects on GitHub
            <ExternalLink size={20} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}