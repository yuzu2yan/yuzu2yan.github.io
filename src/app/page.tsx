import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Profile from "@/components/Profile"
import Works from "@/components/Works"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Works />
      </main>
      <Footer />
    </div>
  )
}
