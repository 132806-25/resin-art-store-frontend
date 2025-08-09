import { MessageCircle, Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="text-2xl font-bold">Arte em Resina</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Criamos peças únicas e artesanais em resina que transformam qualquer ambiente. 
              Cada produto é feito com carinho e atenção aos detalhes, garantindo qualidade e beleza.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@arteeresina.com</p>
              <p>Horário: Seg-Sex 9h-18h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Arte em Resina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

