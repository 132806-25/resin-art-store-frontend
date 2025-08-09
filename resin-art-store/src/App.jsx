import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'
import ProductModal from './components/ProductModal'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { categories, products } from './data/mockData'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filtrar produtos por categoria
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Adicionar produto ao carrinho
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // Atualizar quantidade no carrinho
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  // Remover produto do carrinho
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  // Abrir modal do produto
  const viewProduct = (product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItems={cartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      
      <Categories 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      {/* Seção de Produtos */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra nossa coleção de peças únicas em resina, feitas com carinho e atenção aos detalhes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewProduct={viewProduct}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Seção Sobre */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre Nossa Arte
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Cada peça é criada com paixão e dedicação, utilizando técnicas artesanais 
              e materiais de alta qualidade. Nossa resina é cuidadosamente trabalhada 
              para criar efeitos únicos que capturam a luz e a beleza de forma especial.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Peças Únicas</h3>
                <p className="text-gray-600">Cada produto é único e irrepetível</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Feito à Mão</h3>
                <p className="text-gray-600">Processo artesanal com atenção aos detalhes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Alta Qualidade</h3>
                <p className="text-gray-600">Materiais premium e acabamento perfeito</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Modais */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
      
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={addToCart}
      />
    </div>
  )
}

export default App
