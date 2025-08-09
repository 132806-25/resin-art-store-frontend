import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Minus, Plus, Trash2, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [whatsappNumber] = useState('5511999999999') // Número do WhatsApp (deve ser configurável)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const generateWhatsAppMessage = () => {
    let message = "Olá! Gostaria de fazer um pedido:\n\n"
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Quantidade: ${item.quantity}\n`
      message += `   Preço unitário: ${formatPrice(item.price)}\n`
      message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`
    })
    
    message += `Total: ${formatPrice(getTotalPrice())}\n\n`
    message += "Aguardo confirmação e informações sobre entrega!"
    
    return encodeURIComponent(message)
  }

  const handleWhatsAppRedirect = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Carrinho de Compras</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[60vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
              <Button onClick={onClose} variant="outline">
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <Badge variant="secondary" className="mt-1">
                      {item.category}
                    </Badge>
                    <p className="text-teal-600 font-bold mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        {cartItems.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-teal-600">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
            
            <Button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Finalizar Pedido via WhatsApp
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-2">
              Você será redirecionado para o WhatsApp com o resumo do pedido
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}

