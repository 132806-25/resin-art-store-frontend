import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'

export default function Header({ cartItems = [], onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Arte em Resina</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">
              Início
            </a>
            <a href="#products" className="text-gray-700 hover:text-teal-600 transition-colors">
              Produtos
            </a>
            <a href="#categories" className="text-gray-700 hover:text-teal-600 transition-colors">
              Categorias
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#categories" 
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

