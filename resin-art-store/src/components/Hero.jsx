import { Button } from '@/components/ui/button.jsx'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-teal-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Arte em{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Resina
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Peças únicas e artesanais que transformam qualquer ambiente.
            <br />
            Descubra a beleza translúcida da arte em resina.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Peças Únicas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Feito à Mão</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Alta Qualidade</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
            >
              Ver Produtos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}

