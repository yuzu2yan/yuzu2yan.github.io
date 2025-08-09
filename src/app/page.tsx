import dynamic from 'next/dynamic'
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import LoadingAnimation from "@/components/LoadingAnimation"

// 動的インポートで遅延ロード
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})

const Research = dynamic(() => import('@/components/Research'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-50" />,
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-black" />,
})

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <div className="min-h-screen">
        <Header />
        <main>
          <Profile />
          <Skills />
          <Research />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
