import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  return (
    <div className="p-8 space-y-6">
      <Navbar />
      <Hero />
      {/* Schibsted Grotesk Example */}
      <div className="font-['Schibsted_Grotesk'] text-2xl mt-20">
        This is Schibsted Grotesk Font
      </div>

      {/* EB Garamond Example */}
      <div className="font-['EB_Garamond'] text-2xl">
        This is EB Garamond Font
      </div>

      {/* Ancizar Sans Example */}
      <div className="font-['Ancizar_Sans'] text-2xl">
        This is Ancizar Sans Font
      </div>

      {/* Inter Example */}
      <div className="font-['Inter'] text-2xl">
        This is Inter Font
      </div>

      {/* Friends UltraBold Example */}
      <div className="font-['Friends_UltraBold_Regular'] text-2xl">
        This is Friends UltraBold Font
      </div>
    </div>
  )
}

export default App
