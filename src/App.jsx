import React from 'react'
import HeaderHero from './components/HeaderHero'
import LogosMarquee from './components/LogosMarquee'
import FeatureGrid from './components/FeatureGrid'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderHero />
      <LogosMarquee />
      <FeatureGrid />
      <CTASection />
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-emerald-300 via-teal-400 to-emerald-700" />
            <span className="text-slate-700 font-semibold">OpenIAP</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">OpenCore</a>
            <a href="#" className="hover:text-slate-900">OpenRPA</a>
            <a href="#" className="hover:text-slate-900">Use cases</a>
            <a href="#" className="hover:text-slate-900">Pricing</a>
            <span className="text-slate-400">© 2025 OpenIAP</span>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
