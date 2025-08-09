import { Card, CardContent } from '@/components/ui/card.jsx'

export default function Categories({ categories, selectedCategory, onCategorySelect }) {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossas Categorias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção organizada por categorias para encontrar a peça perfeita
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Categoria "Todos" */}
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
              selectedCategory === 'all' ? 'ring-2 ring-teal-500 bg-teal-50' : ''
            }`}
            onClick={() => onCategorySelect('all')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Todos
              </h3>
              <p className="text-sm text-gray-600">
                Ver todos os produtos
              </p>
            </CardContent>
          </Card>
          
          {/* Categorias dinâmicas */}
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                selectedCategory === category.name ? 'ring-2 ring-teal-500 bg-teal-50' : ''
              }`}
              onClick={() => onCategorySelect(category.name)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">
                    {category.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

