import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardFooter } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Eye } from 'lucide-react'

export default function ProductCard({ product, onAddToCart, onViewProduct }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {product.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onViewProduct(product)}
              className="bg-white/90 hover:bg-white"
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver Detalhes
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-teal-600">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-teal-600 hover:bg-teal-700"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}

