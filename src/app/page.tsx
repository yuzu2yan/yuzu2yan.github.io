import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Skills from "@/components/Skills"
import Research from "@/components/Research"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import LoadingAnimation from "@/components/LoadingAnimation"

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
