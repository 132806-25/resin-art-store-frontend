import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { X, ShoppingCart, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [whatsappNumber] = useState('5511999999999') // Número do WhatsApp (deve ser configurável)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const generateWhatsAppMessage = () => {
    const message = `Olá! Tenho interesse no produto:\n\n*${product.name}*\n\nPreço: ${formatPrice(product.price)}\nCategoria: ${product.category}\n\nPoderia me dar mais informações?`
    return encodeURIComponent(message)
  }

  const handleWhatsAppRedirect = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const generateQRCodeUrl = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(whatsappUrl)}`
  }

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Detalhes do Produto</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Imagem do Produto */}
            <div className="space-y-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Informações do Produto */}
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-3xl font-bold text-teal-600 mb-4">
                  {formatPrice(product.price)}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Descrição</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Botões de Ação */}
              <div className="space-y-3 pt-4">
                <Button
                  onClick={() => {
                    onAddToCart(product)
                    onClose()
                  }}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                
                <Button
                  onClick={handleWhatsAppRedirect}
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comprar via WhatsApp
                </Button>
              </div>
              
              {/* QR Code */}
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3 text-center">
                  Ou escaneie o QR Code
                </h3>
                <div className="flex justify-center">
                  <img
                    src={generateQRCodeUrl()}
                    alt="QR Code para WhatsApp"
                    className="border rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Escaneie para abrir o WhatsApp
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

