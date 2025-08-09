"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconExternalLink } from "@tabler/icons-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'
import { HexagonPattern } from "@/components/ui/geometric-lines"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const projects = [
  {
    title: "NASA Space Apps Challenge 2024",
    description: "I created a web application that visualizes the relationship between GHG emission factors and global warming.",
    award: "Tokyo Venue Special Award!",
    color: "from-yellow-400 to-amber-600",
    image: "/images/nasa_space_apps.png",
    link: "https://github.com/yuzu2yan/GHG_Atlas",
  },
  {
    title: "ARLISS 2024",
    description: "We developed CanSat, a mock-up satellite, and participated in a satellite launch experiment in Nevada, USA",
    color: "from-blue-400 to-indigo-600",
    image: "/images/arliss2024.png",
    link: "https://github.com/yuzu2yan/ARLISS2024",
  },
  {
    title: "Builder Weekend 2024",
    description: "We developed AI-coustic, an application that generates images from text and creates music from the space of those images.",
    award: "Rebase Prized!",
    color: "from-purple-400 to-pink-600",
    image: "/images/builder-weekend.jpg",
    link: "https://github.com/yuzu2yan/ARLISS2024",
  },
  {
    title: "Tanegashima Rocket Contest 2024",
    description: "The project simulated sample collection and controlled multiple units with ROS and markers.",
    award: "3rd place in the mission division!",
    color: "from-green-400 to-teal-600",
    image: "/images/tanegashima-mission.jpg",
    link: "https://github.com/yuzu2yan/Tanegashima_Rocket_Contest_2024_Mission",
  },
  {
    title: "Noshiro Space Event 2023",
    description: "This project involves dropping a robot from the sky and, after landing, aiming for a zero-distance goal through autonomous control.",
    color: "from-green-400 to-teal-600",
    image: "/images/noshiro.jpg",
    link: "https://github.com/yuzu2yan/Noshiro_Space_Event_2023",
  }
]

export default function MobileProjects() {
  return (
    <section id="works" className="min-h-screen flex items-center relative overflow-hidden md:hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white via-blue-50/30 to-cyan-50/30" />
      
      {/* Hexagon pattern overlay */}
      <HexagonPattern className="text-blue-500 opacity-[0.03]" />
      
      <style jsx global>{`
        .mobile-works-swiper {
          padding: 20px 20px 60px 20px;
          cursor: grab;
        }
        .mobile-works-swiper:active {
          cursor: grabbing;
        }
        .mobile-works-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .mobile-works-swiper .swiper-pagination-bullet-active {
          background: #06b6d4;
          width: 20px;
          border-radius: 3px;
        }
      `}</style>

      <div className="relative w-full px-4 py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-1 text-center"
            >
              <p className="text-sm font-medium text-neutral-600">
                MY WORKS
              </p>
              <h1 className="text-3xl font-bold text-black">
                Projects.
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Spacer div */}
        <div className="h-6"></div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full mt-8"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            grabCursor={true}
            freeMode={{
              enabled: true,
              sticky: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, FreeMode]}
            className="mobile-works-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-neutral-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-black">
                          {project.title}
                        </h3>
                        
                        {/* Award */}
                        {project.award && (
                          <p className="text-sm font-semibold text-amber-600">
                            🏆 {project.award}
                          </p>
                        )}
                        
                        {/* Description */}
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-4">
                        {/* Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium group/link text-sm"
                        >
                          View Project
                          <IconExternalLink className="w-3 h-3 ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}