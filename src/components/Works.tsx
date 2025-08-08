"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconExternalLink } from "@tabler/icons-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Mousewheel } from 'swiper/modules'
import { cn } from "@/lib/utils"
import { HexagonPattern } from "@/components/ui/geometric-lines"
import 'swiper/css'
import 'swiper/css/navigation'
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
    image: "/images/arliss2024.jpg",
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
  }
]

export default function Works() {
  return (
    <section id="works" className="py-32 md:py-40 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white via-blue-50/30 to-cyan-50/30" />
      
      {/* Hexagon pattern overlay */}
      <HexagonPattern className="text-blue-500 opacity-[0.03]" />
      
      <style jsx global>{`
        .works-swiper {
          padding: 20px 20px 60px 20px;
          cursor: grab;
        }
        .works-swiper:active {
          cursor: grabbing;
        }
        .works-swiper .swiper-button-prev,
        .works-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .works-swiper .swiper-button-prev:hover,
        .works-swiper .swiper-button-next:hover {
          background: #06b6d4;
          border-color: #06b6d4;
          transform: scale(1.05);
        }
        .works-swiper .swiper-button-prev:hover::after,
        .works-swiper .swiper-button-next:hover::after {
          color: white;
        }
        .works-swiper .swiper-button-prev::after,
        .works-swiper .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
          color: #06b6d4;
        }
        .works-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .works-swiper .swiper-pagination-bullet-active {
          background: #06b6d4;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Recent Works
          </h2>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
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
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-neutral-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-black mb-3">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-neutral-600 mb-6 flex-1">
                        {project.description}
                      </p>
                                            
                      {/* Link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium group/link"
                      >
                        View Project
                        <IconExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
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