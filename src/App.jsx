import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WinBanner from './components/WinBanner'
import StartReferring from './components/StartReferring'
import ProgramTerms from './components/ProgramTerms'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WinBanner />
        <StartReferring />
        <ProgramTerms />
      </main>
      <Footer />
    </div>
  )
}
